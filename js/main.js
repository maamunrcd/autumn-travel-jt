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
function activeScrollItem() {
    let activateMap = document.querySelector("a.list-group-item.list-group-item-action.active").href.baseVal;
    let referId = document.getElementById(activateMap.replace("#", ""));
    let scrollMapLocations = document.querySelectorAll(".location-item");
    scrollMapLocations.forEach(element => element.classList.remove("active"))
    referId.classList.add("active");
}
var firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
firstScrollSpyEl.addEventListener('activate.bs.scrollspy', function () {
    activeScrollItem()
})


