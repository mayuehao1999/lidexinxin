const io =
  typeof IntersectionObserver !== 'undefined'
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('is-visible')
              io.unobserve(e.target)
            }
          })
        },
        { threshold: 0.12 }
      )
    : null

export default {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) el.style.transitionDelay = `${binding.value}ms`
    io ? io.observe(el) : el.classList.add('is-visible')
  },
  unmounted(el) {
    io && io.unobserve(el)
  },
}