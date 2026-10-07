// Custom scroll behavior (overrides Nuxt's default).
// iOS Safari ignores a single scrollTo when the user tapped during momentum
// scrolling, and the home page still shifts after render (client-only parallax,
// images), so the target is re-applied a few times after the page is rendered.

if (process.client && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const RETRY_DELAYS = [0, 50, 150, 350, 700]

function targetY(to, savedPosition) {
  if (to.hash) {
    try {
      const el = document.querySelector(to.hash)
      if (el) {
        return el.getBoundingClientRect().top + window.pageYOffset
      }
    } catch (e) {}
  }
  return savedPosition ? savedPosition.y : 0
}

export default function (to, from, savedPosition) {
  const nuxt = window.$nuxt

  // triggerScroll is only fired when a new page component is loaded
  if (to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'))
  }

  return new Promise((resolve) => {
    nuxt.$once('triggerScroll', () => {
      let cancelled = false
      const cancel = () => { cancelled = true }
      // stop correcting as soon as the user starts scrolling themselves
      window.addEventListener('touchstart', cancel, { once: true, passive: true })
      window.addEventListener('wheel', cancel, { once: true, passive: true })

      RETRY_DELAYS.forEach((delay, i) => {
        setTimeout(() => {
          window.requestAnimationFrame(() => {
            if (!cancelled) {
              window.scrollTo(0, targetY(to, savedPosition))
            }
            if (i === RETRY_DELAYS.length - 1) {
              window.removeEventListener('touchstart', cancel)
              window.removeEventListener('wheel', cancel)
            }
          })
        }, delay)
      })

      // scrolling is handled above, tell vue-router not to scroll
      resolve(false)
    })
  })
}
