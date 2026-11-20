let students = [
    {
        id: 1,
        fullName: "Sudays Rasulov",
        age: 13,
        phone: "987448585",
        account: true,
        status: "Active",
        statusDate: "since 10.08.2026",
        avatar: "https://i.pravatar.cc/150?img=12",
        icons: "👤- ↪ 📝"
    },
    {
        id: 2,
        fullName: "Ayub Emomali",
        age: 14,
        phone: "985666901",
        account: true,
        status: "Active",
        statusDate: "since 10.08.2026",
        avatar: "https://i.pravatar.cc/150?img=11",
        icons: "👤- ↪ 📝"
    },
    {
        id: 3,
        fullName: "Khalid Safarov",
        age: 13,
        phone: "715707070",
        account: true,
        status: "Active",
        statusDate: "since 10.08.2026",
        avatar: "https://i.pravatar.cc/150?img=13",
        icons: "👤- ↪ 📝"
    },
    {
        id: 4,
        fullName: "Omina Abdulloeva",
        age: 12,
        phone: "979607575",
        account: false,
        status: "Active",
        statusDate: "since 10.08.2026",
        avatar: "https://i.pravatar.cc/150?img=47",
        icons: "👤- ↪ 📝"
    },
    {
        id: 5,
        fullName: "Umar Saidov",
        age: 13,
        phone: "988624762",
        account: true,
        status: "Transferred",
        statusDate: "10.08.2026 – 15.09.2026",
        avatar: "https://i.pravatar.cc/150?img=68",
        icons: "👤- ↪ 📝"
    }
];

let body = document.querySelector(".body")

let b1 = document.createElement("button");
b1.textContent = "👤+ Add Student";
b1.classList.add(
  "py-2",
  "px-5",
  "bg-[#196F7C]",
  "text-white",
  "rounded-xl",
  "my-5",
  "ml-[760px]",
  "mr-[-15px]",
);
body.append(b1);

let h1a = document.createElement("button");
h1a.textContent = "✏️Edit Student";
h1a.classList.add(
  "py-2",
  "px-5",
  "bg-gray-400",
  "text-white",
  "rounded-xl",
  "my-5",
  "ml-5",
  "mr-[-15px]",
);
body.append(h1a);

let h1b = document.createElement("button");
h1b.textContent = "🗑Remove Student";
h1b.classList.add(
  "py-2",
  "px-5",
  "bg-red-500",
  "text-white",
  "rounded-xl",
  "my-5",
  "ml-5",
  "mr-[-15px]",
);
body.append(h1b);

let table = document.createElement("table");
body.append(table);

let thead = document.createElement("thead");
table.append(thead);

let div = document.createElement("tr");
thead.append(div)
div.classList.add("flex", "items-center", "bg-gray-200", "rounded-t-2xl");

let square = document.createElement("th")
square.classList.add("border", "border-gray-400", "w-5", "h-5", "m-6", "border-[3px]")

let ava = document.createElement("th");
ava.textContent = "AVA";
ava.classList.add("px-[25px]", "w-[70px]");

let p1 = document.createElement("th");
p1.textContent = "FULL NAME";
p1.classList.add("p-5", "w-[190px]");

let p2 = document.createElement("th");
p2.textContent = "AGE";
p2.classList.add("p-5", "w-[120px]");

let p3 = document.createElement("th");
p3.textContent = "PHONE";
p3.classList.add("p-5", "w-[180px]");

let p5 = document.createElement("th");
p5.textContent = "ACCOUNT";
p5.classList.add("p-5", "w-[150px]");

let p6 = document.createElement("th");
p6.textContent = "STATUS";
p6.classList.add("p-5", "w-[250px]");

let p7 = document.createElement("th");
p7.textContent = "ACTION";
p7.classList.add("p-5", "w-[150px]");

div.append(square, ava, p1, p2, p3, p5, p6, p7);

let tbody = document.createElement("tbody");
table.append(tbody);

students.forEach((obj)=>{
    let ctroka = document.createElement("tr");
    ctroka.classList.add("px-6","flex", "items-center", "border-b","border-b-[2px]", "p-[-5]", "hover:bg-gray-100");

    let square1 = document.createElement("td")
    square1.classList.add("border", "border-gray-400", "w-5", "h-5", "m-2", "border-[3px]")

    let avatarContainer = document.createElement("div");
    avatarContainer.classList.add("flex", "items-center", "w-[300px]");
    
    let img = document.createElement("img")
    img.src = obj.avatar
    img.classList.add("w-10", "rounded-3xl", "m-5")

    let Id = document.createElement("h1")
    Id.textContent = obj.id + ". "
    Id.classList.add("text-[15px]", "mx-2")

    let name = document.createElement("h1")
    name.textContent = obj.fullName
    name.classList.add("text-[15px]")
    
    avatarContainer.append(img, Id, name);

    let Age = document.createElement("td")
    Age.textContent = obj.age
    Age.classList.add("text-[15px]", "w-[120px]", "pl-5")

    let numbers = document.createElement("td")
    numbers.textContent = obj.phone
    numbers.classList.add("text-[15px]", "w-[180px]", "pl-5")

    let accaunt = document.createElement("td")
    accaunt.classList.add("text-[15px]", "w-[150px]", "pl-5")
    if(obj.account == true){
        accaunt.textContent = "YES"
    } else {
        accaunt.textContent = "NO"
    }

    let divStatus = document.createElement("td")
    divStatus.classList.add("w-[250px]", "pl-5")
    let set = document.createElement("h1")
    set.textContent = obj.status
    if(obj.status === "Active"){
        set.classList.add("text-[15px]", "text-green-500", "bg-green-200", "px-9", "py-1", "rounded-2xl", "inline-block")
    } else {
        set.classList.add("text-[15px]", "text-white", "bg-[#196F7C]", "px-10", "py-1", "rounded-2xl", "inline-block")
    }
    let sinse = document.createElement("h1")
    sinse.textContent = obj.statusDate
    sinse.classList.add("text-[15px]")
    divStatus.append(set, sinse)

    let jjj = document.createElement("td")
    jjj.textContent = obj.icons
    jjj.classList.add("text-[15px]", "w-[150px]", "pl-5")

    tbody.append(ctroka)
    ctroka.append(square1, avatarContainer, Age, numbers, accaunt, divStatus, jjj)
})