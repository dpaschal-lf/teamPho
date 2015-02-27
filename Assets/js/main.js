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
    
    $(".c2_r2").click(function(){
        flipDown(this, 190);
    })
    
    $(".c2_r3").click(function(){
        flipDown(this, 370);
    })
    
    $(".c3_r1").click(function(){        
        flipDown(this, 0);    
    });
    
    $(".c3_r2").click(function(){
        flipDown(this, 190);
    })
    
    $(".c3_r3").click(function(){
        flipDown(this, 370);
    })
    
    $(".c1_r4").click(function(){
        rollUp($(this).parent(), 3);
    })
    
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
    
    $(cloneEle).animate({opacity: 0}, 100, function(){
        $(this).remove();
        $(parentEle).next().children().css('visibility', 'visible');
    });
}

function rollUp(ele, stop){
    start = ;
    
    //var topPos = 370;
    start.animate({borderSpacing: 180}, {
        step: function(now,fx) {
        
        $(this).css('-webkit-transform','rotateX('+now+'deg)');
        $(this).css('-ms-transform','rotateX('+now+'deg)');
        //$(this).css('top', topPos+'px');
        //topPos -= .25;
        },
        duration: 'slow'
    });
    
    start.animate({opacity: 0}, 100, function(){
        if (stop > 1){
            stop--;
            rollUp(start.prev(), stop);
        }
    });
}