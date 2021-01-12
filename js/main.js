var active = 0;
$("#burger").on('click', function(){
    if (active == 0)
    {
        $("#burger-list").css("display", "block");
        $("#burger-list").addClass("shadow10");
        $("#head-menu").removeClass("shadow3");
        active++;
    }
    else {
        $("#burger-list").css("display", "none");
        $("#burger-list").removeClass("shadow10");
        $("#head-menu").addClass("shadow3");
        active--;
    }
});

$.fn.HasAttr = function(name){
    return this.attr(name) !== undefined;
}

document.addEventListener('DOMContentLoaded', function(){
    $("input").each(function(i){
        if($($("input").get(i)).HasAttr('required')){
            $($($($("input").get(i)).parent()).children('p').append("<p>&lowast;</p>")).children('p').css('display', 'inline-block').css('color', 'red').css('font-size', '12px')
        }
    })
    if($(".student").length > 1)
    {
        $(".student").each(function(i){
            $($("#student-button").append("<a></a>")).children('a').addClass('back-button-student');
            if(i === 0)
            {
                $($(".back-button-student").get(i)).css('background-color', '#666').attr('href', 'javascript:slide_student('+i+')');
            }
            else 
            {
                $($(".student").get(i)).css('display', 'none');
                $($(".back-button-student").get(i)).css('background-color', '#b3b3b3').attr('href', 'javascript:slide_student('+i+')');
            }
        })
    }
    develop();
    if($(".mentor").length > 0)
    {
        $(".mentor").each(function(i){
            $($("#mentor-button").append("<a></a>")).children('a').addClass('back-button-mentor');
            if(i === 0)
            {
                $($(".back-button-mentor").get(i)).css('background-color', '#666').attr('href', 'javascript:slide_mentor('+i+')');
            }
            else 
            {
                $($(".mentor").get(i)).css('display', 'none');
                $($(".back-button-mentor").get(i)).css('background-color', '#b3b3b3').attr('href', 'javascript:slide_mentor('+i+')');
            }
        })
    }
    max_height();
    video_frame();
})

function slide_student(point){
    if (!Number.isInteger(point)){
        point = parseInt(point, 10);
    }
    else {
        stud = point;
        clearInterval(timeSlide);
        timeSlide = setInterval(auto_slide, 10000);
    }
    $('.student').each(function(i){
        if(i === point){
            $($(".student").get(i)).fadeIn();
            $($(".back-button-student").get(i)).css('background-color', '#666');
        }
        else {
            $($(".student").get(i)).fadeOut();
            $($(".back-button-student").get(i)).css('background-color', '#b3b3b3');
        }
    })
}

function slide_develop(point){
    var first = $(".develop-block").length > 1 && window.screen.width < 600;
    var second = $(".develop-block").length > 2 && window.screen.width < 851;
    var third = $(".develop-block").length > 3 && window.screen.width > 851;
    if(first) {
        $('.develop-block').each(function(i){
            if(i === point){
                $($(".develop-block").get(i)).fadeIn();
                $($(".develop-block").get(i)).css('position', 'reletive');
                $($(".back-button-develop").get(i)).css('background-color', '#666');
            }
            else {
                $($(".develop-block").get(i)).fadeOut();
                $($(".develop-block").get(i)).css('position', 'absolute');
                $($(".back-button-develop").get(i)).css('background-color', '#b3b3b3');
            }
        })
    }
    else if (second) {
        var x = 2;
        var j = 0;
        $('.develop-block').each(function(i){
            if(x * point <= i && i < x * (point+1)){
                $($(".develop-block").get(i)).fadeIn();
                $($(".develop-block").get(i)).css('position', 'reletive');
            }
            else {
                $($(".develop-block").get(i)).fadeOut();
                $($(".develop-block").get(i)).css('position', 'absolute');
            }
            if(j == point){
                $($(".back-button-develop").get(j)).css('background-color', '#666');
            }
            else {
                $($(".back-button-develop").get(j)).css('background-color', '#b3b3b3');
            }
            if (i % 2 == 0){
                j++;
            }
        })
    }
    else if (third) {
        var x = 3;
        var j = 0;
        $('.develop-block').each(function(i){
            if(x * point <= i && i < x * (point+1)){
                $($(".develop-block").get(i)).fadeIn();
                $($(".develop-block").get(i)).css('position', 'reletive');
            }
            else {
                $($(".develop-block").get(i)).fadeOut();
                $($(".develop-block").get(i)).css('position', 'absolute');
            }
            if(j == point){
                $($(".back-button-develop").get(j)).css('background-color', '#666');
            }
            else {
                $($(".back-button-develop").get(j)).css('background-color', '#b3b3b3');
            }
            if (i % 3 == 0){
                j++;
            }
        })
    }
    
}

function slide_mentor(point){
    if (!Number.isInteger(point)){
        point = parseInt(point, 10);
    }
    else {
        ment = point;
        clearInterval(timeSlide);
        timeSlide = setInterval(auto_slide, 10000);
    }

    $('.mentor').each(function(i){
        if(i === point){
            $($(".mentor").get(i)).fadeIn();
            $($(".back-button-mentor").get(i)).css('background-color', '#666');
        }
        else {
            $($(".mentor").get(i)).fadeOut();
            $($(".back-button-mentor").get(i)).css('background-color', '#b3b3b3');
        }
    })
}

var stud = 0;
var ment = 0;

function auto_slide(){
    if (stud >= $('.student').length - 1) {
        stud = 0;
    }
    else{
        stud++;
    }
    slide_student(stud.toString());

    if (ment >= $('.mentor').length - 1) {
        ment = 0;
    }
    else{
        ment++;
    }
    slide_mentor(ment.toString());
}

var timeSlide = setInterval(auto_slide, 10000);

window.addEventListener('resize', function(){
    video_frame();
    max_height();
    develop();
});


function video_frame(){
    var tmp = 188;
    if(window.screen.width >= 320)
    {
        tmp = 188 + (100 - (1020 - window.screen.width) / 700 * 100) * 3.33;
    }
    $($('iframe').get(0)).css('height', tmp);
}

function max_height(){
    //set max height for student block
    content_height('.student', '.all-students');
    //set max height for develop block
    content_height('.develop-block', '#develop-content');
    //set max height for develop title
    content_height('.develop-title');

    //set mentor height with different width

    var max = 0;
    if (window.screen.width < 851)
    {
        $(".mentor").each(function(i){
            var tmp = $($(".mentor").get(i)).height();
        if(tmp > max) { max = tmp;}
        })
    }
    else if (window.screen.width >= 851)
    {
        $(".mentor").each(function(i){
            var tmp = $($($(".mentor").get(i)).children('div')).height();
        if(tmp > max) { max = tmp;}
        })
    }
    $('#mentor-content').height(max);

    //set width for develop

    max = 0;

    $(".develop-block").each(function(i){
    if($($(".develop-block").get(i)).width() > max) { max = $($(".develop-block").get(i)).width();}
    })
    if ( window.screen.width > 851){
        if(window.screen.width < 1164){
            $('#develop-content').css('width', window.screen.width);
        }
        else{
            $('#develop-content').css('width', '1164px');
        }
    }
    else if (window.screen.width > 600){
        $('#develop-content').css('width', max*2 + 41);
    }
    else{
        $('#develop-content').css('width', '100%');
    }
    
}

function content_height(find_in, set_in){
    if (set_in == '#develop-content' && window.screen.width > 1300)
    {
        $(set_in).css('column-gap', '70px');
    }
    else if (set_in == '#develop-content' && window.screen.width > 1168)
    {
        $(set_in).removeAttr('style');
        $(set_in).css('column-gap', window.screen.width*3/100);
    }
    else if (set_in == '#develop-content' && window.screen.width < 1168)
    {
        $(set_in).removeAttr('style');
    }

    var max = 0;
    if(find_in == '.develop-title' && window.screen.width < 1168) {
        $(find_in).each(function(i){
        $($(find_in).get(i)).removeAttr('style');
        if($($(find_in).get(i)).height() > max) { max = $($(find_in).get(i)).height();}
        })
        $(find_in).each(function(i) {
            $($(find_in).get(i)).height(max);
        })
    }
    else if(set_in != null) {
        $(find_in).each(function(i){
        if($($(find_in).get(i)).height() > max) { max = $($(find_in).get(i)).height();}
        })
        $(set_in).css('height', max);
    }
}

function develop(){
    var first = $(".develop-block").length > 1 && window.screen.width <= 600;
    var second = $(".develop-block").length > 2 && window.screen.width < 851;
    var third = $(".develop-block").length > 3 && window.screen.width > 851;
    var _first = window.screen.width <= 600;
    var _second = window.screen.width < 851;
    var _third = window.screen.width > 851;
    $(".back-button-develop").remove();
    var j = 0;
    if(first || second || third)
    {
        $(".develop-block").each(function(i){
            if(first)
            {
                $($("#develop-button").append("<a></a>")).children('a').addClass('back-button-develop');
                if(i === 0)
                {
                    $($(".develop-block").get(i)).css('position', 'reletive');
                    $($(".back-button-develop").get(i)).css('background-color', '#666').attr('href', 'javascript:slide_develop('+i+')');
                }
                else 
                {
                    $($(".develop-block").get(i)).css('position', 'absolute');
                    $($(".develop-block").get(i)).css('display', 'none');
                    $($(".back-button-develop").get(i)).css('background-color', '#b3b3b3').attr('href', 'javascript:slide_develop('+i+')');
                }
            }
            else if (second){
                $($(".develop-block").get(i)).css('position', 'absolute');
                $($(".develop-block").get(i)).css('display', 'none');
                if(i % 2 == 0){
                    $($(".develop-block").get(i)).css('grid-area', '1 / 1 / 2 / 2');
                    $($("#develop-button").append("<a></a>")).children('a').addClass('back-button-develop');
                    $($(".back-button-develop").get(j)).css('background-color', '#b3b3b3').attr('href', 'javascript:slide_develop('+j+')');
                    j++;
                }
                else if (i % 2 == 1){
                    $($(".develop-block").get(i)).css('grid-area', '1 / 2 / 2 / 3');
                }

                if (i < 2){
                    $($(".develop-block").get(i)).css('position', 'relative');
                    $($(".develop-block").get(i)).css('display', 'flex');
                }
                if(i === 0)
                {
                    $($(".back-button-develop").get(i)).css('background-color', '#666').attr('href', 'javascript:slide_develop('+i+')');
                }
            }
            else if (third){
                $($(".develop-block").get(i)).css('position', 'absolute');
                $($(".develop-block").get(i)).css('display', 'none');
                if(i % 3 == 0){
                    $($(".develop-block").get(i)).css('grid-area', '1 / 1 / 2 / 2');
                    $($("#develop-button").append("<a></a>")).children('a').addClass('back-button-develop');
                    $($(".back-button-develop").get(j)).css('background-color', '#b3b3b3').attr('href', 'javascript:slide_develop('+j+')');
                    j++;
                }
                else if (i % 3 == 1){
                    $($(".develop-block").get(i)).css('grid-area', '1 / 2 / 2 / 3');
                }
                else if (i % 3 == 2){
                    $($(".develop-block").get(i)).css('grid-area', '1 / 3 / 2 / 4');
                }

                if (i < 3){
                    $($(".develop-block").get(i)).css('position', 'relative');
                    $($(".develop-block").get(i)).css('display', 'flex');
                }
                if(i === 0)
                {
                    $($(".back-button-develop").get(i)).css('background-color', '#666').attr('href', 'javascript:slide_develop('+i+')');
                }
            }
        })
    }
    else if(_first || _second || _third){
        $(".develop-block").each(function(i){
            $($(".develop-block").get(i)).css('position', 'reletive');
            $($(".develop-block").get(i)).css('display', 'flex');
            if (_second){
                if ($(".develop-block").length == 2){
                    if(i % 2 == 0){
                        $($(".develop-block").get(i)).css('grid-area', '1 / 1 / 2 / 2');
                    }
                    else if (i % 2 == 1){
                        $($(".develop-block").get(i)).css('grid-area', '1 / 2 / 2 / 3');
                    }
                }
                else {
                    $("#develop-content").css('margin', 'auto');
                }
            }
            else if (_third){
                if ($(".develop-block").length == 3){
                    if(i % 3 == 0){
                        $($(".develop-block").get(i)).css('grid-area', '1 / 1 / 2 / 2');
                    }
                    else if (i % 3 == 1){
                        $($(".develop-block").get(i)).css('grid-area', '1 / 2 / 2 / 3');
                    }
                    else if (i % 3 == 2){
                        $($(".develop-block").get(i)).css('grid-area', '1 / 3 / 2 / 4');
                    }
                }
                else {
                    $("#develop-content").css('display', 'flex');
                    $(".develop-block").css('margin', 'auto');
                }
            }
        })
    }
}