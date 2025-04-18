document.addEventListener('DOMContentLoaded', function() {
    // Make the entire body clickable (except the CTA button)
    document.body.addEventListener('click', function(e) {
        // Prevent CTA button from triggering body redirect
        if (!e.target.closest('.cta-button')) {
            window.location.href = 'https://topgames.bet/'; // Replace with your URL
        }
    });
});


// Countdown timer
function updateCountdown() {
    // Set the date we're counting down to (24 hours from now)
    const countDownDate = new Date();
    countDownDate.setHours(countDownDate.getHours() + 24);
    
    // Update the countdown every 1 second
    const x = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the countdown date
        const distance = countDownDate - now;
        
        // Time calculations for hours, minutes and seconds
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result
        document.getElementById("hours").innerHTML = String(Math.floor(hours)).padStart(2, '0');
        document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');
        
        // If the countdown is finished, clear interval
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
            document.querySelector(".countdown-title").innerHTML = "OFFER HAS EXPIRED!";
        }
    }, 1000);
}

// Create confetti
function createConfetti() {
    const container = document.getElementById('confetti-container');
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 60 + 80}, 100%, 50%)`;
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.animationDuration = Math.random() * 3 + 3 + 's';
        container.appendChild(confetti);
    }
}

// Initialize when page loads
window.onload = function() {
    updateCountdown();
    createConfetti();
    
    // Add click event to CTA button
    document.querySelector(".cta-button").addEventListener("click", function() {
        alert("You are being redirected to the deposit page to claim your 500% bonus!");
        // In a real implementation, you would redirect to the deposit page
        // window.location.href = "/deposit";
        
        // Add more confetti on click
        createConfetti();
    });
};
