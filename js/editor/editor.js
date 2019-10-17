var quill = new Quill('#editor-container', {
    modules: {
        formula: true,
        syntax: true,
        toolbar: '#toolbar-container'
    },
    placeholder: '请输入详情...',
    theme: 'snow'
});
var quill_content = ''
quill.on('text-change', function (delta, oldDelta, source) {
    //监听文本变化..将值赋给 vue 的shop 对象...
    /*   if (source == 'api') {
           console.log("An API call triggered this change.");
       } else if (source == 'user') {

       }*/
    // t.shop.introduce = quill.container.firstChild.innerHTML;
    quill_content = quill.container.firstChild.innerHTML;
    console.log(quill.container.firstChild.innerHTML)
});


