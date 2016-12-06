        function showMenuButtons() {
            var mainMenuButtons = document.getElementsByClassName("mainMenuButton");
            var menuBarClassName = document.getElementById("menuBar").className;
            if (menuBarClassName === "" || menuBarClassName === "slideUp") {
                document.getElementById("menuBar").className = "slideDown";
            } else {
                document.getElementById("menuBar").className = "slideUp";
            }
            console.log(document.getElementById("menuBar").className);
        }

        document.addEventListener("DOMContentLoaded", function(event) {

            document.getElementById("hamburgerMenu").addEventListener("click", function() {
                showMenuButtons();
            }, false);

        });