(function($){
  /**
   * Object:
   *    width float
   *    height float
   * @returns Object
   */
  $.fn.getSizeChilds = function(){
    var tar = this;
    var height = 0.0,width = 0.0;
    var childs = tar.children();
    var wrap = childs.wrapAll('<div></div>').parent();
    height = wrap.height();
    width = wrap.width();
    wrap.unwrap();
    return {width:width,height:height};
  };
})(jQuery);
