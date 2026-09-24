const watchBtn = document.getElementById("watchBtn");
const playerSection = document.getElementById("playerSection");
const player = document.getElementById("animePlayer");

// Replace this with your embed link
const embedURL = "YOUR_EMBED_LINK";

watchBtn.addEventListener("click", () => {

    player.src = embedURL;

    playerSection.classList.remove("hidden");

    playerSection.scrollIntoView({
        behavior: "smooth"
    });

});
