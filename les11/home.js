const users = [
  {
    id: 1,
    image: "https://via.placeholder.com/150", 
    name: "Michael Holz",
    dateCreated: "04/10/2013",
    role: "Administrator", 
    status: "Active",
    socialProfile: [
      { icon: "fab fa-facebook-f", url: "https://facebook.com" },
      { icon: "fab fa-github", url: "https://github.com" }
    ]
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    name: "Paula Wilson",
    dateCreated: "05/08/2014",
    role: "Viewer",
    status: "Active",
    socialProfile: [
      { icon: "fab fa-facebook-f", url: "https://facebook.com" }
    ]
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    name: "Antonio Moreno",
    dateCreated: "11/05/2015",
    role: "Moderator",
    status: "Suspended",
    socialProfile: [
      { icon: "fab fa-github", url: "https://github.com" }
    ]
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    name: "Mary Saveley",
    dateCreated: "06/09/2016",
    role: "Viewer",
    status: "Active",
    socialProfile: [
      { icon: "fab fa-twitter", url: "https://twitter.com" }
    ]
  },
  {
    id: 5,
    image: "https://via.placeholder.com/150",
    name: "Martin Sommer",
    dateCreated: "12/08/2017",
    role: "Moderator",
    status: "Inactive",
    socialProfile: [
      { icon: "fab fa-google", url: "https://google.com" }
    ]
  }
]

let div = document.querySelector(".div");
div.classList.add("flex", "text-gray-400", "items-center", "border-b");

let p1 = document.createElement("p");
p1.textContent = "Name";
p1.classList.add("p-5", "pr-[100px]", "pl-20");

let p2 = document.createElement("p");
p2.textContent = "Date Created"; 
p2.classList.add("p-5", "pr-[100px]", "pl-[70px]");

let p3 = document.createElement("p");
p3.textContent = "Role";
p3.classList.add("p-5", "pr-[60px]");

let p5 = document.createElement("p");
p5.textContent = "Status";
p5.classList.add("p-5", "pr-[50px]");



div.append(p1, p2, p3, p5);


const oxir = document.querySelector(".oxir")

users.forEach((obj) => {
  let ctroka = document.createElement("div");
  ctroka.classList.add("m-6", "flex", "items-center", "border-b", "pb-4");

  let img = document.createElement("img");
  img.src = obj.image;
  img.classList.add("w-10", "h-10", "object-cover", "rounded-full", "my-3");

  let name = document.createElement("h1");
  name.textContent = obj.name;
  name.classList.add("mx-5", "font-bold", "w-[150px]");

  let dateCreated = document.createElement("h1");
  dateCreated.textContent = obj.dateCreated;
  dateCreated.classList.add("mx-5", "text-gray-600", "w-[120px]");


  let rol = document.createElement("h1");
  rol.textContent = obj.role;
  rol.classList.add("px-3", "pt-1", "pb-1", "rounded-xl", "text-center", "w-[130px]");

  if (obj.role === "Administrator") {
    rol.classList.add("text-blue-500", "bg-blue-200");
  } else if (obj.role === "Viewer") {
    rol.classList.add("text-gray-500", "bg-gray-200");
  } else if (obj.role === "Moderator") {
    rol.classList.add("text-purple-500", "bg-purple-300");
  }


  let vceti = document.createElement("h1");
  vceti.textContent = obj.status;
  vceti.classList.add("mx-5", "w-[100px]");

  if (obj.status === "Active") {
    vceti.textContent = "🟢 " + obj.status;
  } else if (obj.status === "Inactive" || obj.status === "Suspended") {
    vceti.textContent = "🔴 " + obj.status;
  }

  let icons = document.createElement("div");
  icons.classList.add("flex", "gap-2", "mx-5");




  ctroka.append(img, name, dateCreated, rol, vceti, icons);
  oxir.append(ctroka);
});