// Open the postcard
function openCard() {

    document.getElementById("front").style.display = "none";

    document.getElementById("message").style.display = "block";
}


// Close the postcard
function closeCard() {

    document.getElementById("message").style.display = "none";

    document.getElementById("front").style.display = "block";
}


// Create floating hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "💕";


    // Random horizontal position
    heart.style.left =
        Math.random() * 100 + "vw";


    // Random animation speed
    heart.style.animationDuration =
        (3 + Math.random() * 4) + "s";


    // Add heart to page
    document.body.appendChild(heart);


    // Remove heart after 7 seconds
    setTimeout(() => {

        heart.remove();

    }, 7000);
}


// Create a new heart every 700 milliseconds
setInterval(createHeart, 700);