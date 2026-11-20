let foods = [
    {
        id: 1,
        name: "Burger",
        price: 35,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
    },
    {
        id: 2,
        name: "Pizza",
        price: 50,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500"
    },
    {
        id: 3,
        name: "Sushi",
        price: 70,
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500"
    }
];

let foodsBox = document.querySelector(".foods");
let nameInput = document.querySelector(".name");
let priceInput = document.querySelector(".price");
let imageInput = document.querySelector(".image");
let add = document.querySelector(".add");

function showFoods() {
    foodsBox.innerHTML = "";

    foods.forEach((food) => {

        let card = document.createElement("div");

        card.classList.add(
            "bg-white",
            "rounded-2xl",
            "shadow",
            "overflow-hidden"
        );

        card.innerHTML = `
            <img
                src="${food.image}"
                class="w-full h-48 object-cover"
            >

            <div class="p-5">

                <h2 class="text-2xl font-bold">
                    ${food.name}
                </h2>

                <p class="text-orange-500 font-bold text-xl my-3">
                    ${food.price} сомони
                </p>

                <button
                    class="edit bg-yellow-400 px-4 py-2 rounded-lg mr-2"
                    data-id="${food.id}"
                >
                    Edit
                </button>

                <button
                    class="delete bg-red-500 text-white px-4 py-2 rounded-lg"
                    data-id="${food.id}"
                >
                    Delete
                </button>

            </div>
        `;

        foodsBox.append(card);
    });

    document.querySelectorAll(".delete").forEach((button) => {

        button.onclick = () => {

            let id = Number(button.dataset.id);

            foods = foods.filter((food) => food.id !== id);

            showFoods();
        };
    });

    document.querySelectorAll(".edit").forEach((button) => {

        button.onclick = () => {

            let id = Number(button.dataset.id);

            let food = foods.find((food) => food.id === id);

            let name = prompt("Название", food.name);
            let price = prompt("Цена", food.price);
            let image = prompt("Фото", food.image);

            if (name && price && image) {
                food.name = name;
                food.price = Number(price);
                food.image = image;

                showFoods();
            }
        };
    });
}

add.onclick = () => {

    if (
        nameInput.value &&
        priceInput.value &&
        imageInput.value
    ) {

        foods.push({
            id: Date.now(),
            name: nameInput.value,
            price: Number(priceInput.value),
            image: imageInput.value
        });

        nameInput.value = "";
        priceInput.value = "";
        imageInput.value = "";

        showFoods();
    }
};

showFoods();