Bootstrap BigModal
==================

A wrapper around bootstrap's modal that provides "fullscreen" modal windows.  These big modals are 90% window width, 90% window height, with 5% margins.


Installation
------------

* Include `css/bigmodals.css` in your page after bootstrap's main css files.
  * Alternatively, include `less/bigmodals.less` after bootstrap's `modals.less` in your build process.
* Include `js/bootstrap-bigmodal.js` after bootstrap's `bootstrap-modal.js`


Usage
-----

See [bootstrap modals][1] for all options and methods.  BigModal passes all arguments to the underlying modal.  Simply use the `bigmodal` jquery method in place of the `modal` method:

[1]: http://twitter.github.com/bootstrap/javascript.html#modals

```javascript
// Initialize bigmodal
$('.modal').bigmodal();
```

```javascript
// Initialize bigmodal with modal options
$('.modal').bigmodal({ /* ... */ });
```

```javascript
// Call modal function (either .bigmodal or .modal can be used to call methods)
$('.modal').bigmodal('show');
```
