var currentIndex = 0;

function toggleAboutMeDescription() {
            if (document.getElementById("mainContentBox").className === "mainContentBox visible") {
                document.getElementById("mainContentBox").className = "mainContentBox hidden";
            } else {
                document.getElementById("mainContentBox").className = "mainContentBox visible";
            }
        }
            window.addEventListener("load", function(anotherEvent) { 
                var dir = "file:///C:/Users/Nick/Desktop/UCI%20Fall%202016%20Quarter/INF%20133/MidtermProjectIN4MATX133/LiveInternetIN4MATX133Files/psntnick.github.io";
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
                document.body.style.backgroundImage = imageProperties[Math.floor(Math.random() * imageProperties.length)];
                console.log(imageProperties[0]);
                console.log(document.body.style.backgroundImage);
            window.addEventListener("keydown", function(event) {

                if (event.keyCode == 32) {
                    currentIndex = ++currentIndex % imagesProperties.length
                    document.body.style.backgroundImage = imagesProperties[currentIndex];
                    console.log(imagesProperties[currentIndex]);
                    
                }
            });

            document.getElementById("learnMoreAboutMeLink").addEventListener("click", function() {
                toggleAboutMeDescription();
            });
        });
