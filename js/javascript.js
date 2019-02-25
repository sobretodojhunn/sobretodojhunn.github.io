$(document).ready(function() {
var scrollLink = $('.scroll');

// smooth scrolling
scrollLink.click(function(e)  {  
    
e.preventDefault(); 
$('body,html').animate({
    scrollTop: $(this.hash).offset().top
}, 1500);
});


// active link switching
$(windows).scroll(function(){

    var scrollbarLocation = $(this).scrollTop();
scrollLink.each(function() {
    var sectionOffset = $(this.hash).offset().top

    if (sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active'); }
        else {
        $(this).parent().siblings().removeClass('active');
    }
})
})
}) 

$(document).ready(function(){
    $(window).on('.scroll', function(){
        if($(window).scrollTop()){
            $$('nav').addCLass('black');
        }
            else {
                $('nav').removeClass('black');
            }
        
    })

})