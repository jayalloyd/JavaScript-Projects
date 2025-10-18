function flipCoin(userChoice) {

    let coin = document.querySelector(".coin");
    let h1 = document.querySelector("h1");
    let flips = Math.floor(Math.random() * 2) + 3; // Random 3 or 4 flips
    let finalResult = Math.random() < 0.5 ? "heads" : "tails"; // Random outcome

    let totalRotation = 360 * flips + (finalResult === "heads" ? 0 : 180); // Final rotation

    coin.style.transition = "transform 2s ease-in-out"; // Animation for 2 sec
    coin.style.transform = `rotateY(${totalRotation}deg)`;

    setTimeout(() => {
        if (userChoice === finalResult) {
            h1.innerText = `You chose ${userChoice.toUpperCase()} and won! 🎉`;
            triggerConfetti();
        } else {

            h1.innerText = `You chose ${userChoice.toUpperCase()} but lost. 😔 The result was ${finalResult.toUpperCase()} better luck next time👍.`;

        }
    }, 2000);
}
function triggerConfetti() {
    confetti({
        particleCount: 150, // Number of particles
        spread: 70, // How wide they spread
        origin: { y: 0.6 } // Where it starts (higher = lower on screen)
    });
}