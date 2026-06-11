document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute('href')
        ).scrollIntoView({
            behavior: 'smooth'
        });

    });

});


const texts = [
    "Aspiring Network Engineer",
    "Computer Engineering Student",
    "IT Infrastructure Enthusiast",
    "System Administration Learner"
];

let count = 0;

function changeText() {

    const typing = document.getElementById("typing");

    if (typing) {

        typing.style.opacity = 0;

        setTimeout(() => {

            typing.textContent = texts[count];

            typing.style.opacity = 1;

            count = (count + 1) % texts.length;

        }, 300);

    }

}

changeText();

setInterval(changeText, 2500);


window.addEventListener('scroll', () => {

    const header = document.querySelector('header');

    if (window.scrollY > 50) {

        header.style.background = "rgba(15,23,42,0.85)";
        header.style.backdropFilter = "blur(20px)";

    } else {

        header.style.background = "rgba(255,255,255,0.05)";
        header.style.backdropFilter = "blur(15px)";

    }

});