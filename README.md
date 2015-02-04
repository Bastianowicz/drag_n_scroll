# drag and scroll
Javascript tool to make element dragable by drag &amp; scroll

## Requirements
* jQuery installed

## Install
1. Include drag_n_scroll.css
2. Include drag_n_scroll.js
3. Set config (HTML-context and speed) in drag_n_scroll.js

## Example
http://bastianowicz.github.io/drag_n_scroll/

## Multi-Usage
If you want to add multiple scrollable panes to a document just do as in the following example:

```javascript
    // drag_n_scroll on image
    var draggable = new bastianowicz.Drag_n_Scroll();
    draggable.$context = $("#myImage");     // of course you have to change the selector
    draggable.init();
```