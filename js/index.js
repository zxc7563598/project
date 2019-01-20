window.onload=function(){
    if($('.Navigation').width()<1199){
        if($('.Nav_back').height()<324){
            $('.Nav_back').css('height','324px');
            $('.Nav_back').css('width','auto');
        }else{
            $('.Nav_back').css('height','auto');
            $('.Nav_back').css('width','100%');
        }
    }
}

window.onresize=function(){
    if($('.Navigation').width()<1199){
        if($('.Nav_back').height()<324){
            $('.Nav_back').css('height','324px');
            $('.Nav_back').css('width','auto');
        }else{
            $('.Nav_back').css('height','auto');
            $('.Nav_back').css('width','100%');
        }
    }
}

