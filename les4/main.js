const hero = {
    title: "Original Dragon",
    emoji: "🐉",
    type: "fire",
    legendary: true
};

const stats = [
    { label: "Health", value: 85 },
    { label: "Attack", value: 92 },
    { label: "Deffence", value: 45 },
    { label: "Speed", value: 30 }
];



//////////legend
const leg = document.querySelector(".rarity")
if(hero.legendary){
    leg.innerHTML = "⭐Legendary"
}
leg.classList.add('font-bold', 'text-yellow-400', 'my-10', 'mx-20', 'text-3xl' )


/////////emoji
const emoji = document.querySelector(".emoji");
emoji.innerHTML = hero.emoji;
emoji.classList.add('text-8xl', 'mx-20', 'my-10')


//////name
const name = document.querySelector('.hero-name')
name.textContent = "Fire Dragon";
name.classList.add('text-3xl', 'font-bold', 'text-center')


////body & card
const body = document.querySelector("body");
const card = document.querySelector(".card");
body.classList.add('bg-blue-900', "flex", "justify-center");
card.classList.add('bg-white', "p-6", "rounded-3xl");



////////type
const type = document.querySelector('.type')
type.textContent = "🔥Fire";



