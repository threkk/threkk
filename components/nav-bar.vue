<script setup lang="ts">
const route = useRoute()
const isDark = useDark()

const isSelected = (u: string) => route.path === u
const isExternalLink = (u: string): boolean => {
  try {
    // eslint-disable-next-line no-new
    new URL(u)
    return true
  } catch {
    return false
  }
}

const icon = computed(() =>
  isDark.value
    ? '/default-monochrome-white.svg'
    : '/default-monochrome-black.svg'
)

const LINKS = ref([
  { text: 'About', href: '/' },
  { text: 'Articles', href: '/articles' },
  { text: 'Projects', href: 'https://github.com/threkk/' }
])
</script>
<template>
  <nav class="container">
    <ul>
      <li>
        <NuxtLink to="/">
          <nuxt-img
            format="svg"
            placeholder="/default-monochrome-white.svg"
            :src="icon"
            alt="threkk.com's website logo"
          />
        </NuxtLink>
      </li>
    </ul>
    <label for="menu" tabindex="0">
      <IconCSS name="mdi:hamburger" />
    </label>
    <input id="menu" type="checkbox" :checked="false" />
    <ul>
      <li v-for="link in LINKS" :key="link.href">
        <NuxtLink :to="link.href">
          <strong v-if="isSelected(link.href)">{{ link.text }}</strong>
          <span v-else>{{ link.text }}</span>
          <IconCSS
            v-if="isExternalLink(link.href)"
            name="uil:external-link-alt"
          />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<style>
/* Placing the logo in the navbar */
nav img {
  height: 2rem;
}

/* Adding some effects to the links */
nav a {
  white-space: nowrap;
}

/* Hamburger menu */
nav input[type='checkbox'],
nav label {
  display: none;
}

@media (max-width: 576px) {
  input[type='checkbox']:not(:checked) + ul {
    display: none;
  }

  nav {
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 0;
    margin-right: 0;
    padding: calc(var(--form-element-spacing-vertical) * 0.5)
      var(--form-element-spacing-horizontal);
  }

  nav label {
    text-align: right;
    display: block;
    font-size: 2rem;
    line-height: 1.3em;
  }

  nav ul {
    display: block;
  }

  nav ul:last-child {
    width: 100%;
    flex-basis: 100%;
  }

  nav ul li {
    margin-bottom: 0;
    width: 100%;
    text-align: right;
    padding: calc(var(--form-element-spacing-vertical) * 0.5)
      var(--form-element-spacing-horizontal);
  }
}
</style>
