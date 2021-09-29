$(document).ready(function () {
    $('body').scrollspy({ target: 'nav-scroll' }, () => {
        $('.location-wrapper').scrollspy({ target: 'location-map' })
    });

    $('.carousel').carousel({
        interval: 5000
    })
});
(function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
})();
// function activeScrollItem() {
//     let activateMap = document.querySelector("a.list-group-item.list-group-item-action.active").href.baseVal;
//     let referId = document.getElementById(activateMap.replace("#", ""));
//     let scrollMapLocations = document.querySelectorAll(".location-item");
//     scrollMapLocations.forEach(element => element.classList.remove("active"))
//     referId.classList.add("active");
// }
// var firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
// firstScrollSpyEl.addEventListener('activate.bs.scrollspy', function () {
//     activeScrollItem()
// })

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('nav-scroll').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('nav-scroll').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});


