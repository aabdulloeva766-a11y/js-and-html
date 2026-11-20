let input = document.querySelector(".input");
let name = document.querySelector(".name");
let left = document.querySelector(".left");

let cnt = 0;

input.oninput = () => {
    cnt = input.value.length;
    cnt = Math.min(10, cnt);
    left.textContent = "Left: " + (10 - cnt);

    if (cnt == 10) {
        left.classList.add("text-red-500");
    } else {
        left.classList.add("text-black");
    }
}