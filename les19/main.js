let studentData = {
  name: "Амир Каримов",
  class: "6 «Б» класс",
  school: "Школа №12",
  average: 4.4,
  quarter: 3,
  subjects: [
    {
      subject: "Математика",
      teacher: "Назарова З. А.",
      grade: 5,
    },
    {
      subject: "Русский язык",
      teacher: "Саидова М. Р.",
      grade: 4,
    },
    {
      subject: "Английский язык",
      teacher: "Рахимов Ф. Б.",
      grade: 5,
    },
    {
      subject: "История",
      teacher: "Охунов Д. С.",
      grade: 3,
    },
    {
      subject: "Информатика",
      teacher: "Юсупова Н. К.",
      grade: 5,
    },
  ],
};

let body = document.querySelector(".body");
body.classList.add("bg-gray-200");

// header
let head = document.createElement("header");
head.classList.add(
  "bg-blue-700",
  "flex",
  "text-white",
  "py-7",
  "px-2",
  "font-bold",
);

let p = document.createElement("p");
p.textContent = "kundalik";
p.classList.add("text-2xl", "mr-[950px]");

let pa = document.createElement("p");
pa.textContent = "3 четверть • 2025/2026";

body.append(head);
head.append(p, pa);

////card
let Card = document.createElement("div");

let foto = document.createElement("div");
foto.classList.add(
  "bg-blue-300",
  "px-[21px]",
  "py-3",
  "w-[57px]",
  "h-[57px]",
  "rounded-[50px]",
  "m-10",
  "text-blue-800",
  "font-bold",
  "text-[20px]"
);
foto.textContent = "A";

let d = document.createElement("div");
d.classList.add("flex", "bg-white", "m-10", "rounded-3xl");

let d1 = document.createElement("div");
let nam = document.createElement("p");
let clas = document.createElement("p");
let d2 = document.createElement("div");
let d3 = document.createElement("div");
let score = document.createElement("p");
let txtscore = document.createElement("p");

d2.classList.add("p-10", "mr-[550px]");
d3.classList.add("p-10");

score.textContent = studentData.average;
txtscore.textContent = "средний балл";

score.classList.add("text-green-700", "font-bold", "text-4xl");

txtscore.classList.add("text-gray-500");

nam.classList.add("font-bold", "text-3xl");

clas.classList.add("text-gray-500");

nam.textContent = studentData.name;
clas.textContent = studentData.class + " • " + studentData.school;

body.append(Card);
Card.append(d);
d.append(d1, d2, d3);
d1.append(foto);
d2.append(nam, clas);
d3.append(score, txtscore);

///// section 1
let section1 = document.createElement("section");

let subjec = document.createElement("p");
let teach = document.createElement("p");
let itog = document.createElement("p");

subjec.textContent = "Предмет";
teach.textContent = "Учитель";
itog.textContent = "Итог за четверть";

section1.classList.add(
  "bg-gray-300",
  "p-5",
  "rounded-t-3xl",
  "flex",
  "mx-10",
  "text-gray-500",
  "text-[19px]",
  "font-bold",
);

subjec.classList.add("w-[40%]");
teach.classList.add("w-[40%]");
itog.classList.add("w-[20%]");

body.append(section1);
section1.append(subjec, teach, itog);

// section 2
let section2 = document.createElement("section");

section2.classList.add("rounded-b-3xl");

body.append(section2);

studentData.subjects.forEach((each) => {
  let card = document.createElement("div");

  card.classList.add("bg-white", "mx-10", "flex", "px-5", "py-3", "border-b");

  let n = document.createElement("p");
  n.textContent = each.subject;
  n.classList.add("font-bold", "w-[40%]");

  let t = document.createElement("p");
  t.textContent = each.teacher;
  t.classList.add("w-[40%]");

  let g = document.createElement("p");
  g.textContent = each.grade;
  g.classList.add("w-[20%]", "font-bold");

  section2.append(card);
  card.append(n, t, g);
});

////sevction3
let section3 = document.createElement("section");
section3.classList.add("bg-green-200", "m-10", "p-3", "rounded-2xl");
let h1 = document.createElement("h1")
h1.innerHTML="Хорошая четверть! Подтяните <b>историю</b>."
h1.classList.add("text-green-700", "text-[20px]")

body.append(section3)
section3.append(h1)