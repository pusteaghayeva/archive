// aos
AOS.init({
    duration: 1200,
})

// aos end
function fixMenu() {
    let imgHeight = $(".header-nav").height() + $(".logo-section").height();
    if ($(window).scrollTop() > imgHeight) {
        $(".main-navbar").css({ position: "fixed", top: "0", width: '100%', "z-index": 4 });
    } else {
        $(".main-navbar").css({ position: "sticky", top: "0", width: '100%', "z-index": 4 });
    }
}

fixMenu();

$(window).scroll(function () {
    fixMenu();
});

$(window).resize(function () {
    fixMenu();
});

// news
$(document).ready(function () {
    $("#news-slider").owlCarousel({
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigation: true,
        navigationText: ["", ""],
        pagination: true,
        autoPlay: true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
});
// news end

// faydali link2 start
$(function () {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 3,
        margin: 10,
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });
});

// project
document.addEventListener("DOMContentLoaded", function () {
    const projectCols = document.querySelectorAll('.project-col');

    const hoverEffects = [
        { bgColor: 'var(--menuColor)', textColor: '#fff', imgSrc: './src/img/hover1.png' },
        { bgColor: 'var(--newsBg)', textColor: '#fff', imgSrc: './src/img/hover2.png' },
        { bgColor: 'var(--menuColor)', textColor: '#fff', imgSrc: './src/img/hover3.png' },
        { bgColor: 'var(--newsBg)', textColor: '#fff', imgSrc: './src/img/hover4.png' }
    ];

    projectCols.forEach((col, index) => {
        const img = col.querySelector('.project-img');
        const title = col.querySelector('.project-title');

        col.addEventListener('mouseover', function () {
            col.style.backgroundColor = hoverEffects[index].bgColor;
            title.style.color = hoverEffects[index].textColor;
            img.src = hoverEffects[index].imgSrc;
        });

        col.addEventListener('mouseout', function () {
            col.style.backgroundColor = 'rgba(165, 186, 199, 1)';
            title.style.color = 'black';
            img.src = `./src/img/project${index + 1}.png`;
        });
    });
});

// Back to top
var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
        $('button.back-to-top').addClass('show');
    } else {
        $('button.back-to-top').removeClass('show');
    }
});

$('button.back-to-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});


// loader
var loader = document.querySelector('.loader');

var scrollPosition = [
    self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
];
var html = jQuery('html');
html.data('scroll-position', scrollPosition);
html.data('previous-overflow', html.css('overflow'));
html.css('overflow', 'hidden');
window.scrollTo(scrollPosition[0], scrollPosition[1]);

$(document).ready(function () {
    setTimeout(function () {
        var html = jQuery('html');
        var scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1]);
        loader.style.display = "none";
    }, 3000);

});