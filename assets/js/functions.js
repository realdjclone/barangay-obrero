$(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $('h1').css({
        'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

    if(wScroll > $('.section-news-and-events').offset().top - 70) {

        $('.section-news-and-events svg, .nae').each(function(){
            $('.section-news-and-events svg, .nae').addClass('is-showing');
        });
    }

    if(wScroll > $('.nae-content').offset().top - 280) {

        $('.nae-content #container, .news-wrap, .events-wrap, .calendar-wrap, .activity-wrap').each(function(i){
            setTimeout(function(){
                $('.nae-content #container, .news-wrap, .events-wrap, .calendar-wrap, .activity-wrap').eq(i).addClass('is-showing');
            }, 300 * (i+1));
        });
    }

    if(wScroll > $('.section-about-us').offset().top - 70) {

        $('.section-about-us svg, .about').each(function(){
            $('.section-about-us svg, .about').addClass('is-showing');
        });
    }

    if(wScroll > $('.about-wrap').offset().top - 280) {

        $('.about-wrap .about-icon, .about-thumb, .about-content').each(function(i){
            setTimeout(function(){
                $('.about-wrap .about-icon, .about-thumb, .about-content').eq(i).addClass('is-showing');
            }, 300 * (i+1));
        });
    }

});

$(function() {
    smoothScrool(800);
    aboutStuff();
});


function smoothScrool (duration) {
    $('a[href^="."]').on('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
}

// function menuBelt() {
//
//     $('.thumb-unit').click(function() {
//
//         $('.menu-belt').css('left','-100%');
//         $('.menu-container').show();
//         $('.section-about').hide(800);
//
//     });
//
//     $('.menu-back').click(function() {
//         $('.menu-belt').css('left','0%');
//         $('.menu-container').hide(800);
//         $('.section-about').show(800);
//
//     });
// }
//
// function menuLoad() {
//
//     $.ajaxSetup ({ cache: true });
//
//     $('.thumb-unit').click(function() {
//
//         var $this = $(this),
//             newTitle = $this.find('strong').text(),
//             newFolder = $this.data('folder'),
//             spinner = '<div class="loader">Loading...</div>',
//             newHTML = '/category/'+ newFolder;
//         $('.menu-load').html(spinner).load(newHTML);
//         $('.menu-title').text(newTitle);
//     });
// }

function aboutStuff() {

    $('.about-content-wrap').first().addClass('active-about');
    $('.about-icon').first().addClass('active-about');

    $('.about-icon').click(function() {
        var $this = $(this),
            $siblings = $this.parent().children(),
            position = $siblings.index($this);
        $('.about-content-wrap').removeClass('active-about').eq(position).addClass('active-about');
        $siblings.removeClass('active-about');
        $this.addClass('active-about');


    });

}
