let black = document.querySelector(".black");
let beige = document.querySelector(".beige");
let gray = document.querySelector(".gray");
let img = document.querySelector(".img");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let p = document.querySelector("#count");
let input = document.querySelector(".input");
let name = document.querySelector(".name");

input.oninput = () => {
    name.textContent = input.value;
}
let cnt = 0;

minus.onclick = () => {
    if (cnt > 0) {
        cnt--;
    }

    p.textContent = cnt;
}

plus.onclick = () => {
    cnt++;
    p.textContent = cnt;
}

black.onclick = function() {
    img.src = "https://cdn.saleecom.com/upload/images/698c7b935214761ffb990729/chatgpt-image-apr-9-2026-01-58-07-pm-a3e5.webp?auto=format";
}

beige.onclick = function() {
    img.src = "https://cdn.zochil.shop/c2a0a5a9-7597-40a0-afcc-4c843ac36ca9_t1500.jpg";
}

gray.onclick = function() {
    img.src = "https://eplehuset.no/cdn/shop/files/MQTQ3_928db62b-e506-47ee-9325-8dfbf19e975c.jpg?v=1743589282&utm_source=chatgpt.com";
}
