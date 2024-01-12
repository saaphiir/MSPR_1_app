document.addEventListener("DOMContentLoaded", function() {
    var info_container = document.getElementById("info_container");
    var overlay = document.getElementById('overlay');

    document.addEventListener("click", function(event) {
        if (!info_container.contains(event.target)) {
            info_container.classList.add("hide");
            overlay.classList.add("hide");
        }
    });
});