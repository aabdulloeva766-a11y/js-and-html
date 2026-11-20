let students = [
    {id:1, name: "Alice", age: 20, img: "https://i.pravatar.cc/300?img=1"},
    {id:2, name: "Bob", age: 22, img: "https://i.pravatar.cc/300?img=2"},
    {id:3, name: "David", age: 21, img: "https://i.pravatar.cc/300?img=4"},
    {id:4, name: "Eve", age: 20, img: "https://i.pravatar.cc/300?img=5"},
    {id:5, name: "Frank", age: 23, img: "https://i.pravatar.cc/300?img=6"},
    {id:6, name: "Grace", age: 22, img: "https://i.pravatar.cc/300?img=7"},
    {id:7, name: "Hannah", age: 21, img: "https://i.pravatar.cc/300?img=8"},
    {id:8, name: "Lan", age: 20, img: "https://i.pravatar.cc/300?img=9"},
    {id:9, name: "Alice", age: 20, img: "https://i.pravatar.cc/300?img=1"},
    {id:10, name: "Bob", age: 22, img: "https://i.pravatar.cc/300?img=2"},
    {id:11, name: "David", age: 21, img: "https://i.pravatar.cc/300?img=4"},
];

let btnAdd = document.querySelector(".add");

let inpName = document.querySelector(".inpName");
let inpAge = document.querySelector(".inpAge");
let inpImg = document.querySelector(".inpImg");

inpName.classList.add(
    "border", "p-2", "rounded", "mb-2",
    "focus:outline-none", "focus:ring-2",
    "focus:ring-blue-500", "hover:shadow-lg",
    "focus:shadow-md", "transition", "duration-300",
    "ease-in-out", "hover:scale-105",
    "focus:scale-105", "m-2"
);

inpAge.classList.add(
    "border", "p-2", "rounded", "mb-2",
    "focus:outline-none", "focus:ring-2",
    "focus:ring-blue-500", "hover:shadow-lg",
    "focus:shadow-md", "transition", "duration-300",
    "ease-in-out", "hover:scale-105",
    "focus:scale-105", "m-2"
);

inpImg.classList.add(
    "border", "p-2", "rounded", "mb-2",
    "focus:outline-none", "focus:ring-2",
    "focus:ring-blue-500", "hover:shadow-lg",
    "focus:shadow-md", "transition", "duration-300",
    "ease-in-out", "hover:scale-105",
    "focus:scale-105", "m-2"
);

let body = document.querySelector(".box");

let btnCards = document.createElement("button");
btnCards.textContent = "Cards";

btnCards.classList.add(
    "bg-blue-500", "text-white", "px-4", "py-2",
    "rounded-lg", "mr-2", "hover:bg-blue-600",
    "hover:scale-105", "transition", "duration-300",
    "ease-in-out", "hover:shadow-lg",
    "focus:outline-none", "focus:ring-2",
    "focus:ring-blue-500", "focus:shadow-md"
);

let btnTable = document.createElement("button");
btnTable.textContent = "Table";

btnTable.classList.add(
    "bg-purple-500", "text-white", "px-4", "py-2",
    "rounded-lg", "hover:bg-purple-600",
    "hover:scale-105", "transition", "duration-300",
    "ease-in-out", "hover:shadow-lg",
    "focus:outline-none", "focus:ring-2",
    "focus:ring-purple-500", "focus:shadow-md"
);

body.before(btnCards, btnTable);

let isTable = false;

btnCards.onclick = () => {
    isTable = false;
    showStudents();
};

btnTable.onclick = () => {
    isTable = true;
    showStudents();
};

btnAdd.classList.add(
    "mr-[275px]", "bg-blue-500", "text-white",
    "py-2", "px-4", "rounded-lg",
    "hover:bg-blue-600", "hover:scale-105",
    "transition", "duration-300", "ease-in-out",
    "hover:shadow-lg", "focus:outline-none",
    "focus:ring-2", "focus:ring-blue-500",
    "focus:shadow-md"
);

btnAdd.onclick = () => {

    let newStudent = {
        name: inpName.value,
        age: Number(inpAge.value),
        img: inpImg.value
    };

    if (
        newStudent.name === "" ||
        inpAge.value === "" ||
        newStudent.img === ""
    ) {
        return;
    }

    students.push(newStudent);

    inpName.value = "";
    inpAge.value = "";
    inpImg.value = "";

    showStudents();
};


function showStudents() {

    body.innerHTML = "";

    if (isTable) {
        showTable();
        return;
    }

    body.classList.add(
        "flex",
        "flex-wrap",
        "gap-4"
    );

    students.forEach(student => {

        let div = document.createElement("div");

        div.classList.add(
            "w-[150px]",
            "text-center",
            "bg-gray-100",
            "p-4",
            "rounded-2xl",
            "shadow-md",
            "hover:shadow-lg",
            "transition",
            "hover:scale-105"
        );

        let img = document.createElement("img");
        img.src = student.img;

        img.classList.add(
            "w-24",
            "h-24",
            "rounded-3xl",
            "object-cover"
        );

        let name = document.createElement("h2");
        name.textContent = student.name;

        let age = document.createElement("p");
        age.textContent = student.age;


        let edit = document.createElement("button");

        edit.textContent = "Edit";

        edit.classList.add(
            "bg-blue-500",
            "text-white",
            "px-3",
            "py-0",
            "rounded-lg",
            "mt-2",
            "hover:bg-blue-600",
            "hover:scale-105",
            "transition",
            "duration-300",
            "ease-in-out",
            "hover:shadow-lg",
            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-blue-500",
            "focus:shadow-md"
        );


        let removeBtn = document.createElement("button");

        removeBtn.textContent = "Delete";

        removeBtn.classList.add(
            "bg-red-500",
            "text-white",
            "px-3",
            "py-0",
            "rounded-lg",
            "mt-2",
            "hover:bg-red-600",
            "hover:scale-105",
            "transition",
            "duration-300",
            "ease-in-out",
            "hover:shadow-lg",
            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-red-500",
            "focus:shadow-md"
        );


        removeBtn.onclick = () => {

            students = students.filter(
                s => s.id !== student.id
            );

            showStudents();
        };


        edit.onclick = () => {

            let inputname = document.createElement("input");

            inputname.value = student.name;

            inputname.classList.add(
                "border",
                "p-2",
                "rounded",
                "w-full",
                "mt-2"
            );


            let inputage = document.createElement("input");

            inputage.value = student.age;

            inputage.type = "number";

            inputage.classList.add(
                "border",
                "p-2",
                "rounded",
                "w-full",
                "mt-2"
            );


            let save = document.createElement("button");

            save.textContent = "Save";

            save.classList.add(
                "bg-green-500",
                "text-white",
                "px-3",
                "py-1",
                "rounded-lg",
                "mt-2"
            );


            div.append(
                inputname,
                inputage,
                save
            );


            save.onclick = () => {

                if (
                    inputname.value === "" ||
                    inputage.value === ""
                ) {
                    return;
                }

                student.name = inputname.value;

                student.age = Number(
                    inputage.value
                );

                showStudents();
            };
        };


        div.append(
            img,
            name,
            age,
            edit,
            removeBtn
        );

        body.append(div);
    });
}


function showTable() {

    body.classList.remove(
        "flex",
        "flex-wrap",
        "gap-4"
    );

    let table = document.createElement("table");

    table.classList.add(
        "w-full",
        "bg-white",
        "rounded-lg",
        "overflow-hidden"
    );


    let header = document.createElement("tr");


    ["Image", "Name", "Age", "Action"].forEach(item => {

        let th = document.createElement("th");

        th.textContent = item;

        th.classList.add(
            "bg-gray-300",
            "p-3",
            "border"
        );

        header.append(th);
    });


    table.append(header);


    students.forEach(student => {

        let tr = document.createElement("tr");

        tr.classList.add(
            "border-b",
            "hover:bg-gray-100"
        );


        let image = document.createElement("td");

        image.classList.add(
            "p-3",
            "border"
        );


        let img = document.createElement("img");

        img.src = student.img;

        img.classList.add(
            "w-10",
            "h-10",
            "rounded-full",
            "object-cover"
        );

        image.append(img);


        let name = document.createElement("td");

        name.textContent = student.name;

        name.classList.add(
            "p-3",
            "border"
        );


        let age = document.createElement("td");

        age.textContent = student.age;

        age.classList.add(
            "p-3",
            "border"
        );


        let action = document.createElement("td");

        action.classList.add(
            "p-3",
            "border"
        );


        let edit = document.createElement("button");

        edit.textContent = "Edit";

        edit.classList.add(
            "bg-blue-500",
            "text-white",
            "px-3",
            "py-1",
            "rounded-lg"
        );


        edit.onclick = () => {

            let inputname = document.createElement("input");

            inputname.value = student.name;

            inputname.classList.add(
                "border",
                "p-2",
                "rounded",
                "w-full"
            );


            let inputage = document.createElement("input");

            inputage.value = student.age;

            inputage.type = "number";

            inputage.classList.add(
                "border",
                "p-2",
                "rounded",
                "w-full",
                "mt-2"
            );


            let save = document.createElement("button");

            save.textContent = "Save";

            save.classList.add(
                "bg-green-500",
                "text-white",
                "px-3",
                "py-1",
                "rounded-lg",
                "mt-2"
            );


            action.innerHTML = "";

            action.append(
                inputname,
                inputage,
                save
            );


            save.onclick = () => {

                if (
                    inputname.value === "" ||
                    inputage.value === ""
                ) {
                    return;
                }

                student.name = inputname.value;

                student.age = Number(
                    inputage.value
                );

                showStudents();
            };
        };


        let removeBtn = document.createElement("button");

        removeBtn.textContent = "Delete";

        removeBtn.classList.add(
            "bg-red-500",
            "text-white",
            "px-3",
            "py-1",
            "ml-[50px]",
            "rounded-lg",
            "mt-2",
            "hover:bg-red-600",
            "hover:scale-105",
            "transition",
            "duration-300",
            "ease-in-out",
            "hover:shadow-lg",
            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-red-500",
            "focus:shadow-md"
        );


        removeBtn.onclick = () => {

            students = students.filter(
                s => s.id !== student.id
            );

            showStudents();
        };


        action.append(
            edit,
            removeBtn
        );

        tr.append(
            image,
            name,
            age,
            action
        );

        table.append(tr);
    });


    body.append(table);
}


showStudents();