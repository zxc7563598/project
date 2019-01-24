window.onload=function(){
    console.log($(window).width())
    if($(window).width()<=1198){
        if($('.Nav_back').height()<324){
            $('.Nav_back').css('height','324px');
            $('.Nav_back').css('width','auto');
        }else{
            $('.Nav_back').css('height','auto');
            $('.Nav_back').css('width','100%');
            if($('.Nav_back').height()<324){
                $('.Nav_back').css('height','324px');
                $('.Nav_back').css('width','auto');
            }
        }
        if($(window).width()>500){
            $('.project_info').css('margin-bottom',$('.project_info').css('margin-left'));
            $('.information_info').css('margin-bottom',$('.information_info').css('margin-left'));
        }
        $('.information_content').css('width',($('.information_info').width()-74));
    }else{
        $('.Nav_back').css('height','100%');
        $('.Nav_back').css('width','auto');
        $('.project_info').css('margin-bottom',$('.project_info').css('margin-left'));
        $('.information_info').css('margin-bottom',$('.information_info').css('margin-left'));
        $('.information_content').css('width',($('.information_info').width()-114));
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
        if($(window).width()>500){
            $('.project_info').css('margin-bottom',$('.project_info').css('margin-left'));
            $('.information_info').css('margin-bottom',$('.information_info').css('margin-left'));
        }
        $('.information_content').css('width',($('.information_info').width()-74));
    }else{
        $('.Nav_back').css('height','100%');
        $('.Nav_back').css('width','auto');
        $('.project_info').css('margin-bottom',$('.project_info').css('margin-left'));
        $('.information_info').css('margin-bottom',$('.information_info').css('margin-left'));
        $('.information_content').css('width',($('.information_info').width()-114));
    }
}


$('.nav_list_button').click(function(){

    if($('.nav_list_body').css('display')=='none'){
        $('.nav_list_body').css('display','block');
    }else{
        $('.nav_list_body').css('display','none');
    }
})

$('.project_info').mouseenter(function(){
    console.log(111);
    $(this).children('.project_info_content').fadeIn(100);
})
$('.project_info').mouseleave(function(){
    $(this).children('.project_info_content').fadeOut(100);
})


