var currentIndex = 0;



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
                bg.style.backgroundImage = imageProperties[Math.floor(Math.random() * imageProperties.length)];
            //bg.style.height = window.innerHeight + "px";
            //bg.style.width = window.innerWidth + "px";
            //bg.style.maxHeight = window.innerHeight + "px";
            //bg.style.maxWidth = window.innerWidth + "px";
            //bg.style.backgroundSize = "cover";
            });
            window.addEventListener("load", function(anotherEvent) {


        });
