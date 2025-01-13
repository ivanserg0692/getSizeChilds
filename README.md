# getSizeChilds
This is a jQuery plugin that returns the width and the height of childs's nodes.
Use to calculate the size of the container in which to place a childs

**example use**


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
