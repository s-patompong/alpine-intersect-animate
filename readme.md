# alpine-intersect-animate
This is a library that you can use to animate your DOM once it enters the viewport. The library only work with animate.css so first you'll need to include it (checkout its website for more details https://animate.style/).

Once you've included animate.css to your website. Use x-intersect-animate on the dom that you want to animate it. You don't need to enter the full animation name, just its keyword is fine.

```html
<div x-data x-intersect-animate="fadeInUp">
    I'm gonna be animated once I enter the viewport
</div>
```