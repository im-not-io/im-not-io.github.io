function flip(id) {
            var flippableElement = document.getElementById(id);
            switch (flippableElement.className) {
                case "flippableElement": 
                    //initial look (never been flipped by user)
                    flippableElement.className = "flippableElement faceDown";
                    break;
                case "flippableElement faceDown":
                    flippableElement.className = "flippableElement faceUp";
                    break;
                case "flippableElement faceUp":
                    flippableElement.className = "flippableElement faceDown";
                    break;
                default:
                    throw "flippableElement not detected."     
            }

        }
        
        
        document.addEventListener("DOMContentLoaded", function(event) {


            document.getElementById("flipButton").addEventListener("click", function() {
                    //flip both the question and answer divs when the flip button is clicked
                    flip("notecardQuestion");
                    flip("notecardAnswer");

                });
            document.getElementById("notecardQuestion").addEventListener("click", function() {
                    //flip both the question and answer divs when the notecard is clicked
                    flip("notecardQuestion");
                    flip("notecardAnswer");
                });
            document.getElementById("notecardAnswer").addEventListener("click", function() {
                    //flip both the question and answer divs when the notecard
                    //this is added since I don't have useCapture for addEventListener set to true
                    flip("notecardQuestion");
                    flip("notecardAnswer");
                });
            
            document.getElementById("closeButton").addEventListener("click", function() {
window.history.back();
            });
        });
        