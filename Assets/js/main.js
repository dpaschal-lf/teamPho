$(document).ready(function(){
    
    
});

function flipDown(){
    var myDiv = $('#flip');
    var topPos = 50;
    myDiv.animate({borderSpacing: -180}, {
        step: function(now,fx) {
        $(this).css('-webkit-transform','rotateX('+now+'deg)');
        $(this).css('-ms-transform','rotateX('+now+'deg)');
        $(this).css('top', topPos+'px');
        topPos++;
        },
        duration: 'slow'
    });
    
    //myDiv.animate({opacity: 0}, 100, function(){myDiv.hide();});
}