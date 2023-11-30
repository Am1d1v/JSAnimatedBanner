


const  section = document.querySelector('section');

// Star creation
let j = 0;

while (j < 190){
    let star = document.createElement('i');

    // Generate random X ana Y positions for stars 
    let x = Math.floor(Math.random() * window.innerWidth);
    star.style.left = `${x}px`;

    let y = Math.floor(Math.random() * window.innerHeight);
    star.style.top = `${y}px`;

    // Star size
    let size = Math.random() * 4;

    star.style.width = `${1 + size}px`;
    star.style.height = `${1 + size}px`;


    //Random Star Animation Duration
    let duration = Math.random() * 2;
    star.style.animationDuration = `${duration + 1}s`

    section.append(star);
    j++;
}