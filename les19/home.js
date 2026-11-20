let body = document.querySelector(".body")
let header = document.createElement("header")
header.classList.add("bg-black", "p-5", "text-gray-400", "flex", "gap-4")
let p1 = document.createElement("p")
p1.textContent="Ситора Синема"
p1.classList.add("text-red-500", "font-bold", "text-[19px]", "pr-[200px]", "pl-10")
let p2 = document.createElement("p")
p2.textContent="Афиша"
let p3 = document.createElement("p")
p3.textContent="Скоро"
let p4 = document.createElement("p")
p4.textContent="Кинотеатры"
let p5 = document.createElement("p")
p5.textContent="Акции"
p5.classList.add("pr-[400px]")
let p6 = document.createElement("p")
p6.textContent="Душанбе"


body.append(header)
header.append(p1, p2, p3, p4, p5, p6)





////section1
let s1 = document.createElement("section")
s1.classList.add("bg-gradient-to-b", "from-[#0a1751]", "to-black", "p-10", "px-20", "text-white")
let dbig = document.createElement("div")
dbig.classList.add("flex")
let d1 = document.createElement("div")
d1.classList.add("px-20")

let img = document.createElement("img")
img.src="https://images.pexels.com/photos/35694076/pexels-photo-35694076.jpeg"
img.classList.add("w-[300px]", "rounded-2xl")

let pad = document.createElement("p")
pad.textContent="12+"
pad.classList.add("border", "border-white", "rounded-lg", "p-1", "font-bold", "my-3", "mr-[500px]")

let h1 = document.createElement("h1")
h1.textContent="Последний рейс"
h1.classList.add("text-3xl", "font-bold", "py-3")

let ha = document.createElement("h1")
ha.textContent="2026 · Приключения, драма · 2 ч 8 мин"
ha.classList.add("text-gray-400", "py-3")

let zrit = document.createElement("p")
zrit.textContent="Рейтинг зрителей: 8.4"
zrit.classList.add("text-green-400", "py-3")

let txt = document.createElement("p")
txt.innerHTML="Пилот маленькой авиакомпании соглашается на последний рейс через <br> горы Памира. Погода портится, связь пропадает, а на борту — девочка, <br> которой нужно успеть на операцию."
txt.classList.add("text-gray-300", "py-3")

let span1 = document.createElement("span")
span1.textContent="Режиссёр"
span1.classList.add("text-gray-400", "pr-[100px]")

let span2 = document.createElement("span")
span2.innerHTML="Страна <br>"
span2.classList.add("text-gray-400")

let span3 = document.createElement("span")
span3.textContent="Фаррух Назаров"
span3.classList.add("pr-[50px]")

let span4 = document.createElement("span")
span4.innerHTML="Таджикистан"


body.append(s1)
s1.append(dbig)
dbig.append(img, d1)
d1.append(pad, h1, ha, zrit, txt, span1, span2, span3, span4)


////section2
let section2 = document.createElement("section");
section2.classList.add("bg-black", "text-white", "px-20", "py-10");

let title2 = document.createElement("h2");
title2.textContent = "Сеансы на сегодня";
title2.classList.add("text-2xl", "font-bold", "mb-6");

let sessions = document.createElement("div");
sessions.classList.add("flex", "gap-5", "flex-wrap");

let times = [
    {
        time: "10:30",
        zal: "Зал 1",
        summa: "30 сомони"
    },
    {
        time: "13:15",
        zal: "Зал 3",
        summa: "35 сомони"
    },
    {
        time: "16:00",
        zal: "IMAX",
        summa: "60 сомони"
    },
    {
        time: "18:45",
        zal: "Зал 1",
        summa: "45 сомони"
    },
    {
        time: "21:20",
        zal: "IMAX",
        summa: "70 сомони"
    }
];

times.forEach((item) => {
    let card = document.createElement("div");
    card.classList.add(
        "border",
        "border-gray-700",
        "rounded-xl",
        "p-5",
        "w-[170px]",
        "bg-[#171717]"
    );

    let time = document.createElement("h3");
    time.textContent = item.time;
    time.classList.add("text-2xl", "font-bold");

    let zal = document.createElement("p");
    zal.textContent = item.zal;
    zal.classList.add("text-gray-400", "my-2");

    let summa = document.createElement("p");
    summa.textContent = item.summa;
    summa.classList.add("font-semibold");


    card.append(time, zal, summa);
    sessions.append(card);
});

section2.append(title2, sessions);


////skidka
let skidka = document.createElement("p");
skidka.textContent = "Детям до 12 лет — скидка 20%.";
skidka.classList.add(
    "text-gray-400",
    "mt-8",
    "text-lg"
);

section2.append(skidka);


//// foto of film
let section3 = document.createElement("section");
section3.classList.add("bg-black", "text-white", "px-20", "py-10");

let ttl3 = document.createElement("h2");
ttl3.textContent = "Кадры из фильма";
ttl3.classList.add("text-2xl", "font-bold", "mb-6");

let photos = document.createElement("div");
photos.classList.add("flex", "gap-5");

let photo1 = document.createElement("img");
photo1.src = "https://avatars.mds.yandex.net/i?id=19d8df2083d810bbb47982de5670f9513fd3d66b-11379499-images-thumbs&n=13";
photo1.classList.add("w-[300px]", "h-[180px]", "object-cover", "rounded-xl");

let photo2 = document.createElement("img");
photo2.src = "https://avatars.mds.yandex.net/i?id=d7d14cb6d50e5dcec9167d855eca2b73c61ebac6-9151019-images-thumbs&n=13";
photo2.classList.add("w-[300px]", "h-[180px]", "object-cover", "rounded-xl");

let photo3 = document.createElement("img");
photo3.src = "https://avatars.mds.yandex.net/i?id=27a641c480cc3a68c24aa221161ebbc89ef027f3-2771387-images-thumbs&n=13";
photo3.classList.add("w-[300px]", "h-[180px]", "object-cover", "rounded-xl");

photos.append(photo1, photo2, photo3);
section3.append(ttl3, photos);


let footer = document.createElement("footer");
footer.textContent = "© 2026 Ситора Синема · ТЦ «Душанбе Молл», 4 этаж";
footer.classList.add(
    "bg-[#111111]",
    "text-gray-400",
    "p-6"
);


body.append(section2, section3, footer);