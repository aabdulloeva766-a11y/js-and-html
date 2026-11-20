let input = document.querySelector(".input");
let select = document.querySelector(".select");
let add = document.querySelector(".add");
let search = document.querySelector(".search");
let list = document.querySelector(".list");
let count = document.querySelector(".count");

let arr = [
    {
        name: "Помидоры",
        category: "Овощи"
    },
    {
        name: "Лепёшка",
        category: "Хлеб"
    },
    {
        name: "Огурцы",
        category: "Овощи"
    }
];

function show(a) {
    list.innerHTML = "";

    a.forEach((item) => {
        let div = document.createElement("div");
        div.classList.add(
            "h-[68px]",
            "flex",
            "items-center",
            "justify-between",
            "px-6",
            "border-b",
            "border-[#eeeeee]"
        );

        let name = document.createElement("p");
        name.classList.add("text-[21px]", "text-[#454545]");
        name.textContent = item.name;

        let right = document.createElement("div");
        right.classList.add("flex", "items-center", "gap-5");

        let cat = document.createElement("span");
        cat.classList.add(
            "px-4",
            "py-2",
            "rounded-full",
            "text-[15px]"
        );

        cat.textContent = item.category;

        if (item.category == "Овощи") {
            cat.classList.add("bg-[#e2eee6]", "text-[#907d6c]");
        } else {
            cat.classList.add("bg-[#f0eadc]", "text-[#907d6c]");
        }

        let del = document.createElement("button");
        del.classList.add("text-[#a67b62]", "text-[17px]");
        del.textContent = "Удалить";

        del.onclick = () => {
            arr = arr.filter((x) => x != item);
            show(arr);
        };

        right.append(cat);
        right.append(del);

        div.append(name);
        div.append(right);

        list.append(div);
    });

    count.textContent = a.length + " в списке";
}

add.onclick = () => {
    let text = input.value;

    if (text == "") {
        return;
    }

    arr.push({
        name: text,
        category: select.value
    });

    input.value = "";

    show(arr);
};

search.onclick = () => {
    let text = input.value.toLowerCase();

    let result = [];

    arr.forEach((item) => {
        if (item.name.toLowerCase().includes(text)) {
            result.push(item);
        }
    });

    show(result);
};

show(arr);