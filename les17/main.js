let fruits = [
    {
        name: "Яблоко",
        price: 1.5,
        img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Банан",
        price: 0.8,
        img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Апельсин",
        price: 1.2,
        img: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Груша",
        price: 1.0,
        img: "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?auto=format&fit=crop&w=800&q=80"
    }
];

let body = document.querySelector("body");
body.classList.add("flex", "p-4", "gap-3", "flex-wrap");

fruits.push(
    {
        name: "Виноград",
        price: 2.0,
        img: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Киви",
        price: 1.5,
        img: "https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&w=800&q=80"
    }
);

fruits[0].price = 1.8;

fruits.splice(2, 1);

fruits.forEach(fruit => {
    let fruitDiv = document.createElement("div");

    fruitDiv.classList.add(
        "fruit-card",
        "border",
        "p-3",
        "rounded-[20px]",
        "shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]",
        "bg-white",
        "w-44",
        "h-64",
        "hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.5)]",
        "transition-shadow",
        "duration-300",
        "hover:scale-105",
        "transform",
        "hover:cursor-pointer",
        "hover:translate-y-[-5px]",
        "hover:translate-x-[-3px]",
        "hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.5)]",
        "hover:bg-blue-100"
    );

    let img = document.createElement("img");

    img.src = fruit.img;
    img.alt = fruit.name;

    img.classList.add(
        "fruit-image",
        "w-full",
        "h-36",
        "object-cover",
        "rounded-[20px]"
    );

    fruitDiv.append(img);

    let name = document.createElement("h2");

    name.textContent = fruit.name;

    name.classList.add(
        "fruit-name",
        "text-lg",
        "font-bold",
        "mb-2",
        "mt-2"
    );

    let price = document.createElement("p");

    price.textContent = `Цена: $${fruit.price.toFixed(2)}`;

    price.classList.add(
        "fruit-price",
        "text-gray-700",
        "mb-2"
    );

    fruitDiv.append(name, price);

    body.append(fruitDiv);
});