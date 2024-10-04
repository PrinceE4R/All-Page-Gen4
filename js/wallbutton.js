const wallbutton = document.querySelector(".wallbutton-container");
const wallon = document.getElementById("wallon");
const walloff = document.getElementById("walloff");

// Function to update wallpaper state
function updateWallpaperState(isWallpaperOn) {
    if (isWallpaperOn) {
        wallon.style.display = "inline";
        walloff.style.display = "none";
        const imgPath = `./images/${currentTheme}.jpg`;
        document.body.style.backgroundImage = `url(${imgPath})`;
    } else {
        wallon.style.display = "none";
        walloff.style.display = "inline";
        document.body.style.backgroundImage = "none";
    }
    // Save state to localStorage
    localStorage.setItem('wallpaperOn', isWallpaperOn);
}

// Event listener for wallpaper toggle
wallbutton.addEventListener("click", () => {
    const isCurrentlyOn = wallon.style.display === "inline";
    updateWallpaperState(!isCurrentlyOn);
});

// Function to load wallpaper preference
function loadWallpaperPreference() {
    const savedWallpaperState = localStorage.getItem('wallpaperOn');
    
    if (savedWallpaperState !== null) {
        // Convert the stored string to boolean
        const isWallpaperOn = savedWallpaperState === 'true';
        updateWallpaperState(isWallpaperOn);
    }
}

// Add this to your existing window load event listener
window.addEventListener('load', () => {
    loadWallpaperPreference();
    // ... your other initialization code
});