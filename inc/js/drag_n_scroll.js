/**
 * Created by Bastian Charlet
 * on 21.12.2014.
 */

 ///////////////////////////////////////////////////////////////////
 // START OF CONFIG                                               //
 ///////////////////////////////////////////////////////////////////

/**
 * jQuery-Selector to bind the Drag-Behaivour
 * @type {string}
 */
var context = "html";

/**
 * Speed-Factor for scrollspeed
 * @type {number}
 */
var scrollSpeed = 1;

 ///////////////////////////////////////////////////////////////////
 // END OF CONFIG                                                 //
 ///////////////////////////////////////////////////////////////////



// self-calling anonymous function
(function(context) {
    /**
     * Class that provides Click&Scroll-Behaivour
     */
    var drag_n_scroll = function () {

        /**
         * Where to apply behaivour
         * @type {jQuery}
         */
        this.$context = {};

        /**
         * alias
         * @type {drag_n_scroll}
         */
        var that = this;

        /**
         * Is left mouse button currently clicked?
         * @type {boolean}
         */
        var clicked = false;

        /**
         * Where did the Drag start?
         * @type {{x: number, y: number}}
         */
        var startClickPos = {x:0,y:0};

        /**
         * Scroll-Position at beginning of dragging
         * @type {{x: number, y: number}}
         */
        var scrollPos = {x:0,y:0};

        /**
         * Preset the values
         * Bind the events
         */
        this.init = function () {
            that.$context.addClass("dragable");
            that.$context.mousedown(function (e) {
                e.preventDefault();
                scrollPos = {
                    x: that.$context.scrollLeft(),
                    y: that.$context.scrollTop()
                };
                startClickPos.x = e.clientX;
                startClickPos.y = e.clientY;
                clicked = true;
                that.$context.addClass("dragging");
            });

            $(document).mouseup(function (e){
                e.preventDefault();
                clicked = false;
                that.$context.removeClass("dragging");
                startClickPos = {x:0,y:0};
            });

            $(window).mousemove(function(e){
                scroll(e);
            });

        };

        /**
         * Here is where the magic happens
         * Move by Drag-Vector
         * @param e {event}
         */
        var scroll = function (e) {
            if(clicked) {
                var currentMouse = {
                    x:  e.clientX,
                    y:  e.clientY
                };

                var delta = {
                    x: startClickPos.x - currentMouse.x,
                    y: startClickPos.y - currentMouse.y
                };

                that.$context.scrollTop(scrollPos.y + scrollSpeed * (delta.y));
                that.$context.scrollLeft(scrollPos.x + scrollSpeed * (delta.x));
            }
        }
    };

    /**
     * Start at DOM-ready
     */
    $(document).ready(function(){
        if(typeof bastianowicz == "undefined") bastianowicz = {};
        bastianowicz.Drag_n_Scroll = drag_n_scroll;
        bastianowicz.drag_n_scroll = new drag_n_scroll();
        bastianowicz.drag_n_scroll.$context = $(context);
        bastianowicz.drag_n_scroll.init();
    });
})(context);
