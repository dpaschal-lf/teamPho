$(document).ready(function(){
    
    init();
    
    $(".c1_r1").click(function(){        
        flipDown(this, 0);
        
        
    });
    
    $(".c1_r2").click(function(){
        flipDown(this, 190);
    })
    
    $(".c1_r3").click(function(){
        flipDown(this, 370);
    })
    
    $(".c2_r1").click(function(){
        flipDown(this, 0);
    });
    
});

function init(){
    var className;
    
    for(var i=1; i<=6; i++){
        className = ".c" + i + "_r";
        for(var j=2; j<=4; j++){
            var finalName = className + j;
            $(finalName).css("visibility", "hidden");
        }
    }
}

function flipDown(ele, top){
    var $ele = $(ele);
    var parentEle = $ele.parent();
    var cloneEle = $ele.clone();
    
    $(parentEle).append($(cloneEle));
    
    $(cloneEle).css({'position' : 'absolute', 'top' : top});
    
    var topPos = top;
    $(cloneEle).animate({borderSpacing: -180}, {
        step: function(now,fx) {
        
        $(this).css('-webkit-transform','rotateX('+now+'deg)');
        $(this).css('-ms-transform','rotateX('+now+'deg)');
        $(this).css('top', topPos+'px');
        topPos += .25;
        },
        duration: 'slow'
    });
    
    $(cloneEle).animate({opacity: .5}, 100, function(){
        $(this).css("visibility", "hidden");
        $(parentEle).next().children().css('visibility', 'visible');
    });
}