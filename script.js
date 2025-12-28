const ball = document.querySelector(".ball");

function randompick(){
    const randomstuff = Math.floor(Math.random() * items.length);
    choice = items[randomstuff];
    document.querySelector(".text").textContent = choice;
}

ball.addEventListener("click", function() {
    randompick();
})

const items = ["HELL YES", "HELL NO", "Never gonna happen", "Ask again later", "Definitely", "No way", "Absolutely", "Not in a million years", "Sure thing", "Doubt it", "Without a doubt", "Zzz...", "Why ask me?"];