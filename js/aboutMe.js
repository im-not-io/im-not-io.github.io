function toggleAboutMeDescription() {
            if (document.getElementById("mainContentBox").className === "mainContentBox visible") {
                document.getElementById("mainContentBox").className = "mainContentBox hidden";
            } else {
                document.getElementById("mainContentBox").className = "mainContentBox visible";
            }
                        console.log(document.getElementById("mainContentBox").className)

        }
  
        document.addEventListener("DOMContentLoaded", function(event) {

            document.getElementById("learnMoreAboutMeLink").addEventListener("click", function() {
                toggleAboutMeDescription();
            });
        });



