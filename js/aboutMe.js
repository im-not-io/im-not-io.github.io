function updateBackgroundSize(bg) {
    bg.style.width = window.innerWidth + "px";
    bg.style.height = window.innerHeight + "px";
}

window.addEventListener("resize", function(event) {
    updateBackgroundSize(document.querySelector(".backgroundImage"));
});

            window.addEventListener("DOMContentLoaded", function(event) {
                var bg = document.querySelector(".backgroundImage");
 var dir = "https://psntnick.github.io";
                                var imageProperties = [
                                    'url("' + dir + '/img/airportTerminalHeader.jpg")',
                                    'url("' + dir + '/img/boatWaitingHeader.jpg")',
                                    'url("' + dir + '/img/palmsHeader.jpg")',
                                    'url("' + dir + '/img/runwayHeader.jpg")',
                                    'url("' + dir + '/img/santaMonicaHeader.jpg")',
                                    'url("' + dir + '/img/SFWindowHeader.jpg")',
                                    'url("' + dir + '/img/shockHeader.jpg")',
                                   'url("' + dir + '/img/sunsetSiloHeader.jpg")'
                                ];
                updateBackgroundSize(bg);
                bg.maxHeight = window.innerHeight;
                bg.style.backgroundImage = imageProperties[Math.floor(Math.random() * imageProperties.length)];

            });