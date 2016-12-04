var currentIndex = 0;

function toggleAboutMeDescription() {
            if (document.getElementById("mainContentBox").className === "mainContentBox visible") {
                document.getElementById("mainContentBox").className = "mainContentBox hidden";
            } else {
                document.getElementById("mainContentBox").className = "mainContentBox visible";
            }
        }
            window.addEventListener("load", function(anotherEvent) {   
            document.body.className = "loadBackgroundImages";
            var imagesProperties = window.getComputedStyle(document.body).backgroundImage.split(", ");
            console.log(imagesProperties);
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
