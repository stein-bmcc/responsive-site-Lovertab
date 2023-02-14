# responsive-starter
Responsive Site Starter Files

This repository is designed to give you the basic files that you need to create a responsive site.

## What it includes

* Basic information in the <head> to have meta information, set up a responsive page and include your CSS file.
* header, main and footer content sectioning elements.
* folders for css, images and JavaScript
* basic CSS file with some responsive styles most sites can use
* basic JavaScript file that gives a place to write vanilla and jQuery code.
* jQuery JavaScript library

## Assumptions it Makes

### External Resources

It assumes you will use external files for CSS and JS. Folders for CSS, images and JavaScript are included. You may want to name them differently or have additional folders for things like video and audio. The following folders are included

* __css__ : Add all of your css files here
* __images__ : Add all of your image files here
* __js__ : JavaScript files you write go here
* __js/vendor__ : this is for JavaScript files you didn't write. the jQuery Library backup file is added here.

### header/main/footer elements

most web pages have these three parts of the page. Because of this and to encourage use of Semantic HTML, these three elements are included.

* __header__: This should include your site title and navigation (and logo if you have it). *This will (should) be the same on every page*
* __main__: this is the main content of the page. *The content inside of this should change on every page*
* __footer__: this has information like copyright, links to social, navigation or anything else you want at the bottom of the page. *The content inside of this should be the same on every page*

Also note that they have classes which allow you to better identify them and style them. All except main could also be used in other ways on your page.

### jQuery

This is controversial. Some people are moving away from jQuery towards vanilla JavaScript or other libraries. [jQuery](https://jquery.org) was included here because the assumption is that as beginners you will be using JavaScript mostly for things like getting your navigation working responsively or some basic UI actions. Most likely you will copy examples from sites and many of these are still using jQuery. Feel free to remove the jQuery and use something else if you desire and are able. 

Here are two resources about using vanilla JavaScript instead of jQuery from [Tobias Ahlin Bjerrome](https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/) and [bob.ts](https://dev.to/rfornal/-replacing-jquery-with-vanilla-javascript-1k2g) on the dev.to site.

## What it does not include

For a produciton-ready site there will be much more to add to this. 

### <head>

You may want to add more to your <head> to do things like give descriptions for use by search engines or when sites like Twitter show your site. You can also include more CSS files, favicon and more. For a larger <head> with line-by-line explanation visit [Manuel Matuzović's post](https://www.matuzo.at/blog/html-boilerplate/).

### CSS Libraries/Frameworks/Preprocessors

None of the following are used to cut down on complexity, but depending on your project, these may be useful.

#### Libraries, Frameworks and UI Kits

- [Tailwind](https://tailwindcss.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Bulma](https://bulma.io/)

#### Preprocessors

- [Sass](https://sass-lang.com/)
- [Less](https://lesscss.org/)

If you're interested in those, check out [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (Custom Properties) as well.

### JavaScript Libraries/Frameworks

jQuery is the only Library used. Some you might see that are not used to minimize complexity. Also, these are typically used when creating an interactive web application.

- [React](https://reactjs.org/)
- [Vue](https://vuejs.org/)
- [Svelte](https://svelte.dev/)


### Build Tools

Build tools also add to the complexity of work BUT can be very helpful when creating large sites and working with teams of people or a number of the kidns of libraries and preprocessors linked to above. Some examples:

- [Grunt](https://gruntjs.com/)
- [Gulp](https://gulpjs.com/)
- [Bower](https://bower.io/)

[Node](https://nodejs.org/) is also not used.

