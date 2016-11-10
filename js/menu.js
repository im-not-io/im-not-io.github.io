        function showMenuButtons() {
            var mainMenuButtons = document.getElementsByClassName("mainMenuButton");
            
            for (var x = 0; x < mainMenuButtons.length; ++x) {
                if (mainMenuButtons[x].classList.contains("hidden")) {
                    mainMenuButtons[x].classList.remove("hidden")
                    mainMenuButtons[x].classList.add("visible")
                } else {
                    mainMenuButtons[x].classList.remove("visible")
                    mainMenuButtons[x].classList.add("hidden")
                }
            }

        }