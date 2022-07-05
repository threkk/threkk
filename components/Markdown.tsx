import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import nord from 'react-syntax-highlighter/dist/cjs/styles/prism/nord'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

type Size = 'small' | 'normal' | 'medium' | 'large'

// Component
export default function Markdown(props: {
  md: string
  size?: Size
}): JSX.Element {
  const { md, size } = props
  return mdToJSX(md, { size })
}

export function mdToJSX(input: string, config: { size?: Size }): JSX.Element {
  return (
    <ReactMarkdown
      className={`content is-${config.size ?? 'normal'}`} // Bulma content class.
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={{
        a({ node, href, title, target, children, ...props }) {
          return (
            <Link href={href}>
              <a {...props} title={title ?? href}>
                {children}
              </a>
            </Link>
          )
        },
        // TODO: Create a loader based on the CMS
        // TODO: Add a blur effect for the image
        img({ node, src, title, ...props }) {
          return (
            <Image
              {...props}
              src={src}
              alt={title}
              layout='fill'
              placeholder='blur'
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer())}`}
            />
          )
        },
        code({ node, inline, children, className /* ...props */ }) {
          if (inline || !className) {
            return <kbd>{children}</kbd>
          } else {
            const language = className.split('-')[1]
            return (
              <SyntaxHighlighter
                style={nord}
                language={language}
                showLineNumbers={true}
                customStyle={{
                  margin: 0,
                  borderRadius: 0
                }}
              >
                {children}
              </SyntaxHighlighter>
            )
          }
        }
      }}
    >
      {input}
    </ReactMarkdown>
  )
}

// Utilities
const shimmer = (w: string = '100%', h: string = '100%'): string => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string): string =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)
