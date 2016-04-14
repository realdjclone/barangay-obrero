$(function() {
    smoothScrool(300);
    // menuBelt();
    // menuLoad();
    aboutStuff();
    // slideShow();
});

function smoothScrool (duration) {
    $('a[href^="#"]').on('click', function(event) {

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
