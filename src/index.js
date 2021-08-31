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

        observer.disconnect();
      })
    })

    observer.observe(el);

    cleanup(() => {
      observer.disconnect();
    });
  });
}