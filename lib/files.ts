import React, { createContext, useContext, useMemo } from 'react'
import { join } from 'path'
import { readdir, readFile } from 'fs/promises'
import matter from 'gray-matter'

export type LOCALE = 'en' | 'es' | 'nl' | 'fr'

export type File = {
  title: string
  description: string
  cover: string
  date: string
  lang: LOCALE
  slug: string
  content: string
  published: boolean 
  tags: string[]
  canonical_url
}

type RawContent = {
  filename: string
  content: string
}

async function getFolderContents(path: string): Promise<RawContent[]> {
  const filenames = await readdir(path, { encoding: 'utf8' })
  const files = []

  for (const filename of filenames) {
    const filePath = join(path, filename)
    const content = await readFile(filePath, 'utf8')
    files.push({ filename, content })
  }

  return files
}

export async function getPosts(): Promise<File[]> {
  const pagesDir = join(process.cwd(), '_files/posts')
  const pagesRaw = await getFolderContents(pagesDir)

  const files = []
  for (const raw of pagesRaw) {
    const { data, content, excerpt } = matter(raw, { excerpt: true })

    const file: File = {
      title:
        data.title ??
        raw.filename
          .replaceAll('-', ' ')
          .replace(/^\w/, (c) => c.toUpperCase()),
      description: excerpt ?? '',
      cover: 'TODO: Replace for default image asset',
      date: data.date.toISOString() ?? null,
      lang: data.lang ?? 'en',
      slug: raw.filename,
      content,
    }
    files.push(file)
  }
  return files
}
