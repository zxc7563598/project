window.onload=function(){
    if($(window).width()<=1198){
        if($('.Nav_back').height()<324){
            $('.Nav_back').css('height','324px');
            $('.Nav_back').css('width','auto');
        }else{
            $('.Nav_back').css('height','auto');
            $('.Nav_back').css('width','100%');
        }
    }else{
        $('.Nav_back').css('height','100%');
        $('.Nav_back').css('width','auto');
        $('.project_info').css('padding-bottom',$('.project_info').css('padding-left'));
    }
}

window.onresize=function(){
    console.log($(window).width());
    if($(window).width()<=1198){
        if($('.Nav_back').height()<324){
            $('.Nav_back').css('height','324px');
            $('.Nav_back').css('width','auto');
        }else{
            $('.Nav_back').css('height','auto');
            $('.Nav_back').css('width','100%');
        }
    }else{
        $('.Nav_back').css('height','100%');
        $('.Nav_back').css('width','auto');
        $('.project_info').css('padding-bottom',$('.project_info').css('padding-left'));
    }
}


$('.nav_list_button').click(function(){

    if($('.nav_list_body').css('display')=='none'){
        $('.nav_list_body').css('display','block');
    }else{
        $('.nav_list_body').css('display','none');
    }
})


