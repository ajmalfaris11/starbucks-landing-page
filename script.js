    function imgSlider(anything, logo){

        if(anything == "/images/img3.png"){
            img3 = document.querySelector(".img3");
            document.querySelector(".starbucks").classList.add("img3");
            console.log(anything);
        } else {
            document.querySelector(".starbucks").classList.remove("img3");
        }

        document.querySelector(".starbucks").src = anything;
        document.querySelector(".logo").src = logo ;


    }

    function colorChange(color){
        const startbuck = document.getElementById("starbucksText")
        const circle = document.querySelector(".circle")
        document.getElementById('ExpBtn').style.background = color ;
        circle.style.background = color;
        startbuck.style.color = color
    }
