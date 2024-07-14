// bubbleEffect.js

document.addEventListener('DOMContentLoaded', function () {
    const bubbleContainer = document.querySelector('.bubble-background');
    
    // Function to create a bubble element
    function createBubble() {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
  
      // Randomly assign a color class to the bubble
      const colors = ['blue', 'pink', 'white'];
      const colorClass = colors[Math.floor(Math.random() * colors.length)];
      bubble.classList.add(colorClass);
  
      // Randomly set initial position and size
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 10 + 5}s`;
      bubble.style.opacity = Math.random();
  
      bubbleContainer.appendChild(bubble);
  
      // Remove the bubble after its animation ends
      bubble.addEventListener('animationend', function () {
        bubble.remove();
      });
    }
  
    // Create bubbles at intervals
    setInterval(createBubble, 500); // Adjust the interval for more or fewer bubbles
  });
  