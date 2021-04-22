
document.addEventListener("DOMContentLoaded", function (event) {


    // wait until window is loaded - meaning all images, stylesheets, js, fonts, media assets, and links
    window.addEventListener("load", function (e) {

        document.body.style.display = 'block';
        var tl = new TimelineMax();

        tl.staggerFrom('section', 2, {
            opacity: 0,
            scale: .5,
            ease: Power2.easeOut
        }, 0.2)
        // For Background image
        // tl.staggerFrom('', 2, {
        //     opacity: 0,
        //     scale: .5,
        //     ease: Power2.easeOut
        // }, 0.2)


        // show .from() initially
        tl.staggerFrom('h1, h2', 0.5, {
            opacity: 0,
            y: -40,
            ease: Power2.easeInOut
        }, 0.2, "-=2")

        tl.staggerFrom('.anim-panel', 1, {
            opacity: 0,
            y: -40,
            ease: Power2.easeInOut
        }, 0.2, "-=1.5")

    }, false);

});

// Scroll background
function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById('banner').style.backgroundImage = images[x];

    // TweenLite.set("#banner", 2, { backgroundImage: images[x], ease: Power2.easeInOut });

    // var tl = new TimelineMax();

    // tl.staggerFrom('#banner', 2, {
    //     opacity: 1,
    //     backgroundImage: images[x],
    //     ease: Power2.easeOut
    // }, 0.2)

    // tl.staggerTo('#banner', 2, {
    //     backgroundImage: images[x],
    //     ease: Linear
    // }, 0.2)

}


function startTimer() {
    console.log("Hi");
    console.log("Hi");
    console.log("Hi");
    setInterval(displayNextImage, 8500);
}

startTimer();

var images = [], x = -1;
images[0] = "url(Assets/back/1.jpg)";
images[1] = "url(Assets/back/2.jpg)";
images[2] = "url(Assets/back/3.jpg)";
images[3] = "url(Assets/back/4.jpg)";
images[4] = "url(Assets/back/5.jpg)";
images[5] = "url(Assets/back/6.jpg)";
images[6] = "url(Assets/back/7.jpg)";
images[7] = "url(Assets/back/8.jpg)";
images[8] = "url(Assets/back/9.jpg)";
images[9] = "url(Assets/back/10.jpg)";

// Tabs
function openLink(evt, linkName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("myLink");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(linkName).style.display = "block";
    evt.currentTarget.className += " w3-red";
}

// Click on the first tablink on load
document.getElementsByClassName("tablink")[0].click();

//

// For Image-Gallery

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
}

$(".page-header ul a").on("click", function (e) {
    // 1
    e.preventDefault();
    // 2
    const href = $(this).attr("href");
    // 3
    $("html, body").animate({ scrollTop: $(href).offset().top }, 950);
});

//animation of everything

$(window).scroll(function () {
    $(".slideanim").each(function () {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 800) {
            $(this).addClass("slide");
        }
    });
});

$(window).scroll(function () {
    $(".slideanimx").each(function () {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 700) {
            $(this).addClass("slidex");
        }
    });
});

$(window).scroll(function () {
    $(".slideanimxl").each(function () {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 700) {
            $(this).addClass("slidexl");
        }
    });
});



// POPUP PAssenger

function openForm() {
    document.getElementById("passenger").style.display = "block";
    
    //router.get('/find', function(req, res, next) {
        
               
          // });
}



// Get the modal
var modal = document.getElementById('passenger');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// No of Passenger travelling

function updatecount() {
    var count = parseInt(document.getElementById("number1").value) + parseInt(document.getElementById("number2").value);

    var check = document.getElementById("economy").checked;
    var check1 = document.getElementById("business").checked;

    if (count == 1) {
        if (check == true)
            document.getElementById("travelcount").innerHTML = count + " Adult, Economy";
        else
            document.getElementById("travelcount").innerHTML = count + " Adult, Business";
    }
    else {

        if (check == true) {
            document.getElementById("travelcount").innerHTML = count + " Travellers, Economy";
            console.log(count);
        }
        else
            document.getElementById("travelcount").innerHTML = count + " Travellers, Business";
        console.log(check);


    }


}