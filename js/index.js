

        var p1 = "Player 1";
        var p2 = "Player 2";

        function rollTheDice() {
            setTimeout(function () {
                var randomNumber1 = Math.floor(Math.random() * 6) + 1;
                var randomNumber2 = Math.floor(Math.random() * 6) + 1;

                document.querySelector(".img1").setAttribute("src",
                    "images/dice" + randomNumber1 + ".png");

                document.querySelector(".img2").setAttribute("src",
                    "images/dice" + randomNumber2 + ".png");

                if (randomNumber1 === randomNumber2) {
                    document.querySelector("h1").innerHTML = "Draw! 🚩";
                }

                else if (randomNumber1 < randomNumber2) {
                    document.querySelector("h1").innerHTML
                        = (p2 + " WINS! 🚩");
                }

                else {
                    document.querySelector("h1").innerHTML
                        = (p1 + " WINS! 🚩");
                }
            }, 1500);
        }
