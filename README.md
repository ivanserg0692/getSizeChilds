# getSizeChilds
jQuery plugin, return width and height childs

#example use
http://codepen.io/wanes101/pen/zKqbyV?editors=1111

```html
<div class='main'>
  <div id='1'>here</div>
  <div id='2'>here1</div>
  <div id= '3'>here2</div>
</div>
<div id='logs'></div>
```
```javascript
$().ready(function(){
  var childs = $('.main').children();
  childs.click(function(){
    console.log('click');
  });
  var size = $('.main').getSizeChilds();
  $('#logs').text('width:' + size.width +'; height:' + size.height);
});
```
