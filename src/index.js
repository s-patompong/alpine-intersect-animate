export default function (Alpine) {
  Alpine.directive('intersect-animate', (el, { value, expression, modifiers }, { evaluateLater, cleanup }) => {
    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (
          !entry.isIntersecting && value === 'enter' ||
          entry.isIntersecting && value === 'leave' ||
          entry.intersectionRatio === 0 && !value
        ) return;

        let classes = ['animate__animated'];
        expression.split(" ").forEach(c => classes.push(`animate__${c}`));
        el.classList.add(...classes);

        observer.disconnect()
      })
    }, { threshold: getThreshold(modifiers) })

    observer.observe(el);

    cleanup(() => {
      observer.disconnect();
    });
  });
}


function getThreshold(modifiers) {
  if (modifiers.includes('full')) {
      return 0.99
  }

  if (modifiers.includes('half')) {
      return 0.5
  }

  if (! modifiers.includes('threshold')) {
      return 0
  }

  const threshold = modifiers[modifiers.indexOf('threshold') + 1]

  return threshold === '1' ? 1 : Number(`.${threshold}`)
}