let users = [
  {
    name: "Jese Leos",
    image:
      "https://avatars.mds.yandex.net/i?id=021007a24e8ebbecae2fa56cce3a2e8d653cc527-4434285-images-thumbs&n=13",
    role: "Administrator",
    status: "Active",
    promote: false,
    rating: 4.7,
    ratingTrend: "up",
    lastLogin: "20 Nov 2022",
  },
  {
    name: "Bonnie Green",
    image:
      "https://avatars.mds.yandex.net/get-yabs_performance/7504070/hat16da6e982bf637d587fc266c3c7dc9a2/huge",
    role: "Viewer",
    status: "Active",
    promote: true,
    rating: 3.9,
    ratingTrend: "down",
    lastLogin: "23 Nov 2022",
  },
  {
    name: "Leslie Livingston",
    image:
      "https://avatars.mds.yandex.net/i?id=e6ad2ee46ad3d9f62bc750280a66a852d4e7a650-8181844-images-thumbs&n=13",
    role: "Moderator",
    status: "Inactive",
    promote: false,
    rating: 4.8,
    ratingTrend: "up",
    lastLogin: "19 Nov 2022",
  },
  {
    name: "Micheal Gough",
    image:
      "https://avatars.mds.yandex.net/i?id=c1db46da4c710b031864dddc0d2425a771adbf70-4767164-images-thumbs&n=13",
    role: "Moderator",
    status: "Active",
    promote: true,
    rating: 5.0,
    ratingTrend: "up",
    lastLogin: "27 Nov 2022",
  },
  {
    name: "Joseph McFall",
    image:
      "https://avatars.mds.yandex.net/i?id=5129f1a2ba693b45cde72f9f08411028402c3536-6262780-images-thumbs&n=13",
    role: "Viewer",
    status: "Active",
    promote: false,
    rating: 4.2,
    ratingTrend: "down",
    lastLogin: "20 Nov 2022",
  },
  {
    name: "Robert Brown",
    image:
      "https://avatars.mds.yandex.net/i?id=b16fb36f4e88b1c019d5d28560c5d077bcc9f413-4566567-images-thumbs&n=13",
    role: "Viewer",
    status: "Inactive",
    promote: false,
    rating: 4.5,
    ratingTrend: "up",
    lastLogin: "20 Nov 2022",
  },
  {
    name: "Karen Nelson",
    image:
      "https://avatars.mds.yandex.net/i?id=2bffe417f47dcfad7a6aad37d46bbdd2bff63918-7755895-images-thumbs&n=13",
    role: "Viewer",
    status: "Inactive",
    promote: false,
    rating: 4.1,
    ratingTrend: "down",
    lastLogin: "18 Nov 2022",
  },
  {
    name: "Helene Engels",
    image:
      "https://avatars.mds.yandex.net/i?id=15a6cabb7f65e9d6b3712f010cc548594acd95f4-5143135-images-thumbs&n=13",
    role: "Moderator",
    status: "Active",
    promote: true,
    rating: 3.8,
    ratingTrend: "down",
    lastLogin: "27 Nov 2022",
  },
  {
    name: "Lana Byrd",
    image:
      "https://avatars.mds.yandex.net/i?id=144dbf616d86e95693a3fa22b5e69d5b19fa0626-5363302-images-thumbs&n=13",
    role: "Viewer",
    status: "Active",
    promote: false,
    rating: 4.8,
    ratingTrend: "up",
    lastLogin: "20 Nov 2022",
  },
  {
    name: "Neil Sims",
    image:
      "https://avatars.mds.yandex.net/i?id=a07a16289343b6dbe46c5aec4c05cc5994632119-11397886-images-thumbs&n=13",
    role: "Moderator",
    status: "Inactive",
    promote: false,
    rating: 5.0,
    ratingTrend: "up",
    lastLogin: "20 Nov 2022",
  },
];

let head = document.querySelector(".head");
head.classList.add("flex");
let div1 = document.createElement("div");
div1.classList.add("flex");

let oxir = document.querySelector(".oxir");

////buttons
let b1 = document.createElement("button");
b1.textContent = "+ Add new user";
b1.classList.add(
  "py-2",
  "px-5",
  "bg-blue-500",
  "text-white",
  "rounded-xl",
  "my-5",
  "ml-5",
  "mr-[600px]",
);
head.append(b1);

let h1 = document.createElement("h1");
h1.textContent = "Suspend all";
h1.classList.add(
  "bg-gray-100",
  "border",
  "border-gray-400",
  "my-5",
  "rondedr-3xl",
  "p-2",
);
div1.append(h1);
let h1a = document.createElement("h1");
h1a.textContent = "Archive all";
h1a.classList.add(
  "bg-gray-100",
  "border",
  "border-gray-400",
  "my-5",
  "rondedr-3xl",
  "p-2",
);
div1.append(h1a);
let h1b = document.createElement("h1");
h1b.textContent = "Delete all";
h1b.classList.add(
  "bg-gray-100",
  "border",
  "border-gray-400",
  "my-5",
  "rondedr-3xl",
  "p-2",
);
div1.append(h1b);

head.append(div1);

///head
let div = document.querySelector(".div");
div.classList.add("flex", "text-gray-400");
let p1 = document.createElement("p");
p1.textContent = "USER";
p1.classList.add("p-5", "pr-[100px]", "pl-20");
let p2 = document.createElement("p");
p2.textContent = "USER ROLE";
p2.classList.add("p-5", "pr-[100px]", "pl-[70px]");
let p3 = document.createElement("p");
p3.textContent = "STATUS";
p3.classList.add("p-5", "pr-[50px]");
let p5 = document.createElement("p");
p5.textContent = "PROMOTE";
p5.classList.add("p-5", "pr-[50px]");
let p6 = document.createElement("p");
p6.textContent = "RATING";
p6.classList.add("p-5", "pr-[50px]");
let p7 = document.createElement("p");
p7.textContent = "LAST LOGIN";
p7.classList.add("p-5", "pr-[50px]");
div.append(p1, p2, p3, p5, p6, p7);

users.forEach((obj) => {
  let ctroka = document.createElement("div");
  ctroka.classList.add("m-7", "flex", "items-center");

  let img = document.createElement("img");
  img.src = obj.image;
  img.classList.add("w-10", "rounded-[20px]", "my-3");

  let name = document.createElement("h1");
  name.textContent = obj.name;
  name.classList.add("mx-5", "font-bold");

  let rol = document.createElement("h1");
  rol.textContent = obj.role;

  if (obj.role === "Administrator") {
    rol.classList.add(
      "text-blue-500",
      "bg-blue-200",
      "rounded-xl",
      "px-3",
      "pt-1",
      "my-4",
      "mx-5",
      "ml-[90px]"
    );
  } else if (obj.role === "Viewer") {
    rol.classList.add(
      "text-gray-500",
      "bg-gray-200",
      "rounded-xl",
      "px-3",
      "pt-1",
      "my-4",
      "mx-5",
      "ml-[65px]"
    );
  } else if (obj.role === "Moderator") {
    rol.classList.add(
      "text-purple-500",
      "bg-purple-300",
      "rounded-xl",
      "px-3",
      "pt-1",
      "my-4",
      "mx-5",
      "ml-[50px]"
    );
  }

  let vceti = document.createElement("h1");
  vceti.textContent = obj.status;
  vceti.classList.add("pl-[80px]")
  if (obj.status === "Active") {
    vceti.textContent = "🟢 " + obj.status;
  } else if (obj.status === "Inactive") {
    vceti.textContent = "🔴 " + obj.status;
  }

  let icons = document.createElement("img")
  icons.textContent=obj.socialProfile

  let mote = document.createElement("div")
  mote.textContent = obj.promote
  if(obj.promote==true){
    mote.classList.add("w-10", "text-blue-400", "bg-blue-400", "rounded-3xl", "mx-[90px]")
  }
  else{
    mote.classList.add("w-10", "text-gray-200", "bg-gray-200", "rounded-3xl", "mx-[90px]")
  }

  ctroka.append(img, name, rol, vceti, mote);
  oxir.append(ctroka);
});