document.addEventListener("DOMContentLoaded", function() {
    var info_container = document.getElementById("info_container");
    var overlay = document.getElementById('overlay');

    document.addEventListener("click", function(event) {
        if (!info_container.contains(event.target)) {
            info_container.style.display = 'none';
            overlay.style.display = 'none';
        }
    });
});