// type="text/javascript"
// function shineLinks(id){
//     try{
//         var el=document.getElementById(id).getElementsByTagName('a');
//         var url=document.location.href;
//         for(var i=0;i<el.length; i++){
//             if (url==el[i].href){
//                 el[i].className += ' act';
//             };
//         };
//     }catch(e){}
// };

// let a = document.querySelectorAll('.navbar-menu_item')
// a.forEach((el)=>{
//     if (el.getAttribute('href') == window.location.pathname) el.classList.add('test')
// })
//
// let time = performance.timing;
//
// let pageloadtime = time.loadEventStart - time.navigationStart;

/* TO DO LIST */
$(".tdl-new").bind('keypress', function(e){
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code == 13) {
        var v = $(this).val();
        var s = v.replace(/ +?/g, '');
        if (s == ""){
            return false;
        }else{
            $(".tdl-content ul").append("<li><label><input type='checkbox'><i></i><span>"+ v +"</span><a href='#'>–</a></label></li>");
            $(this).val("");
        }
    }
});


$(".tdl-content a").bind("click", function(){
    var _li = $(this).parent().parent("li");
    _li.addClass("remove").stop().delay(100).slideUp("fast", function(){
        _li.remove();
    });
    return false;
});

// for dynamically created a tags
$(".tdl-content").on('click', "a", function(){
    var _li = $(this).parent().parent("li");
    _li.addClass("remove").stop().delay(100).slideUp("fast", function(){
        _li.remove();
    });
    return false;
});