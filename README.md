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

## Support
Do you like the stuff? Use it, spread it, modify it and extend it.

- But what if I literally LOVE the snippet?
yeah, than... <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LRS5X7EETUJUQ" target="_blank">buy me a beer or something</a>