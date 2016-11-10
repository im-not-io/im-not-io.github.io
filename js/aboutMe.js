function toggleAboutMeDescription() {
            if (document.getElementById("mainContentBox").className === "mainContentBox visible") {
                document.getElementById("mainContentBox").className = "mainContentBox hidden";
            } else {
                document.getElementById("mainContentBox").className = "mainContentBox visible";
            }
                        console.log(document.getElementById("mainContentBox").className)

        }
            
            //work please
        document.addEventListener("DOMContentLoaded", function(event) {
            document.getElementById("hamburgerMenu").addEventListener("click", function() {
                showMenuButtons();
            });
            document.getElementById("learnMoreAboutMeLink").addEventListener("click", function() {
                toggleAboutMeDescription();
            });
        });