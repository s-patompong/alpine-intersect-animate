# alpine-intersect-animate
This is an alpine.js plugin that you can use to animate your DOM once it enters the viewport. 

The plugin only work with animate.css library (or you can create your own class).

It allows you to use animate.css class like so (note that we don't need to add the animate_animated class, the plugin will do that for us):

```html
<div x-data x-intersect-animate="fadeInUp">
    I'm gonna be animated once I enter the viewport
</div>

<!-- The above code will becomes this once the DOM is in the viewport -->
<div x-data x-intersect-animate="fadeInUp" class="animate_animated animate_fadeInUp">
    I'm gonna be animated once I enter the viewport
</div>
```

## Installation

- Make sure you've included animate.css to your website (https://animate.style/).
- Run `npm install alpine-intersect-animate --save`.

## Usage

Import the plugin, you can name it anything (for example IntersectAnimate). Then, set it as an Alpine plugin.
```js
// Import
import Alpine from 'alpinejs';
import IntersectAnimate from 'alpine-intersect-animate';

// Set as alpine.js plugin
Alpine.plugin(IntersectAnimate);

// Start alpine.js
Alpine.start();
```