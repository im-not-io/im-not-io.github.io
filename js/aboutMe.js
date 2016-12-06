var currentIndex = 0;

function toggleAboutMeDescription() {
            if (document.getElementById("mainContentBox").className === "mainContentBox visible") {
                document.getElementById("mainContentBox").className = "mainContentBox hidden";
            } else {
                document.getElementById("mainContentBox").className = "mainContentBox visible";
            }

        }

            window.addEventListener("DOMContentLoaded", function(event) {
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
                document.querySelector(".backgroundImage").style.backgroundImage = imageProperties[Math.floor(Math.random() * imageProperties.length)];
                console.log(imageProperties[0]);
                console.log(document.body.style.backgroundImage);
            });
            window.addEventListener("load", function(anotherEvent) {
                console.log("load fired");
               

            document.getElementById("learnMoreAboutMeLink").addEventListener("click", function() {
                toggleAboutMeDescription();
            });
        });
