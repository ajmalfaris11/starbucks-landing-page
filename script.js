    function imgSlider(anything, logo){

        if(anything == "./images/img3.png"){
            img3 = document.querySelector(".img3");
            document.querySelector(".starbucks").classList.add("img3");
        } else {
            document.querySelector(".starbucks").classList.remove("img3");
        }

        document.querySelector(".starbucks").src = anything;
        document.querySelector(".logo").src = logo ;


        const starbucksText = document.getElementById("starbucksText");
        const starbucksDiscription = document.getElementById("starbucksDiscription");

        

        if(anything == "./images/img3.png"){
            starbucksText.innerText = "Midnight Frappuccnio"
            starbucksDiscription.innerText = "The Starbucks Midnight Frappuccino is a rich and creamy blend of dark mocha sauce and coffee, blended with milk and ice. Topped with whipped cream and a swirl of dark mocha drizzle, it's a luxurious treat perfect for chocolate lovers looking to indulge their cravings.";
            
        } else if(anything == "./images/img2.png"){
            starbucksText.innerText = "Espresso Frappuccnio ";
            starbucksDiscription.innerText = "The Starbucks Espresso Frappuccino is a bold and refreshing beverage that combines rich espresso with creamy milk and ice. Topped with whipped cream for a smooth finish, it offers a satisfyingly cool and caffeinated pick-me-up for espresso enthusiasts on the go.";
        } else {
            starbucksText.innerText = "MochaCookie Crumble";
            starbucksDiscription.innerText = "Starbucks Mocha Cookie Crumble combines creamy mocha sauce, Frappuccino® Roast coffee, milk, and ice. Topped with whipped cream, chocolate cookie crumbles, and a mocha drizzle, it’s a delicious blend of sweetness and crunch.";
        }
    }

    function colorChange(color){

        const animatedTextElements = document.getElementsByClassName("animatedText");
        animatedTextElements[0].style.opacity = "0";
        animatedTextElements[0].style.transition = "0s";
        animatedTextElements[0].style.transform = "translateX(-200px)";
        Array.from(animatedTextElements).forEach(function(element) {
            // Add animation class after a short delay
            setTimeout(function() {
              animatedTextElements[0].style.transition = "1s";
              element.style.opacity = "1";
              element.style.transform = "translateX(0)";
            }, 100); 
          });
          const startbuck = document.getElementById("starbucksText")
        const circle = document.querySelector(".circle")
        document.getElementById('ExpBtn').style.background = color ;
        circle.style.background = color;
        startbuck.style.color = color

    }

     // Animation
     document.addEventListener("DOMContentLoaded", function() {
        const animatedTextElements = document.getElementsByClassName("animatedText");
        const socialMedia = document.getElementById("social-media");
        const thumb = document.getElementById("thumb");
      
        // Loop through each element with the class "animatedText"
        Array.from(animatedTextElements).forEach(function(element) {
          // Add animation class after a short delay
          setTimeout(function() {
            element.style.opacity = "1";
            element.style.transform = "translateX(0)";

            socialMedia.style.transform = "translateY(-100%)";
            thumb.style.bottom = "20px";

          }, 0); 
        });
      });