const fruits = [
  { title: "Арбуз", emoji: "🍉", price: 15, inStock: true },
  { title: "Яблоко", emoji: "🍎", price: 8, inStock: true },
  { title: "Банан", emoji: "🍌", price: 12, inStock: false },
  { title: "Виноград", emoji: "🍇", price: 20, inStock: true },
  { title: "Персик", emoji: "🍑", price: 9, inStock: true },
  { title: "Клубника", emoji: "🍓", price: 25, inStock: false },
];



///////body
const body = document.querySelector(".body")
body.classList.add("bg-green-100", "p-10")





///////section1
const p1a = document.querySelector(".p1a")
const p2a = document.querySelector(".p2a")
let cnt = 0
for(let i = 0; i < fruits.length; i++){
  if(fruits[i].inStock==true){
    cnt++
  }
}
p1a.textContent="🍉 Фруктовая лавка"
p1a.classList.add("text-[35px]", "font-bold", "text-green-600", "pl-10")
p2a.textContent=`Всего фруктов: ${fruits.length}, в наличии: ${cnt}`
p2a.classList.add("text-gray-500", "pl-12")





////////section2
const home = document.querySelector(".home")
const home2 = document.querySelector(".home2")
const s2 = document.querySelector(".s2")
const d1 = document.querySelector(".d1")
const d2 = document.querySelector(".d2")
const d3 = document.querySelector(".d3")
const d4 = document.querySelector(".d4")
const d5 = document.querySelector(".d5")
const d6 = document.querySelector(".d6")
d1.classList.add("bg-white", "h-[200px]", "w-[270px]", "rounded-[20px]", "mr-20", "text-center")
d2.classList.add("bg-white","h-[200px]", "w-[270px]", "rounded-[20px]", "mr-20", "text-center")
d3.classList.add( "w-[270px]","h-[200px]", "rounded-[20px]", "mr-20", "text-center")
d4.classList.add("bg-white","h-[200px]", "w-[270px]", "rounded-[20px]", "mr-20", "text-center")
d5.classList.add("bg-white","h-[200px]", "w-[270px]", "rounded-[20px]", "mr-20", "text-center")
d6.classList.add("w-[270px]", "h-[200px]", "rounded-[20px]", "mr-20", "text-center")
home.classList.add("flex", "p-4")
home2.classList.add("flex", "p-4")
s2.classList.add("pl-10")


const p1 = document.querySelector(".p1")
const p2 = document.querySelector(".p2")
const p3 = document.querySelector(".p3")
const p4 = document.querySelector(".p4")
const p5 = document.querySelector(".p5")
const p6 = document.querySelector(".p6")

const p11 = document.querySelector(".p11")
const p22 = document.querySelector(".p22")
const p33 = document.querySelector(".p33")
const p44 = document.querySelector(".p44")
const p55 = document.querySelector(".p55")
const p66 = document.querySelector(".p66")

const p111 = document.querySelector(".p111")
const p222 = document.querySelector(".p222")
const p333 = document.querySelector(".p333")
const p444 = document.querySelector(".p444")
const p555 = document.querySelector(".p555")
const p666 = document.querySelector(".p666")

const p1111 = document.querySelector(".p1111")
const p2222 = document.querySelector(".p2222")
const p3333 = document.querySelector(".p3333")
const p4444 = document.querySelector(".p4444")
const p5555 = document.querySelector(".p5555")
const p6666 = document.querySelector(".p6666")

//div1
p1.textContent = fruits[0].emoji
p1.classList.add("text-[70px]")
p11.textContent = fruits[0].title
p11.classList.add("font-bold", "text-[20px]") 
p111.textContent = fruits[0].price
p111.textContent="15 сомони/кг"
p111.classList.add("text-gray-500", "text-[12px]") 
p1111.textContent = fruits[0].inStock
for (let i = 0; i < fruits.length; i++) {

    if (fruits[i].inStock == true) {
        p1111.textContent = "❌ нет";
    } else {
        p1111.textContent = "✅ есть";
    }

    p1111.classList.add("text-gray-500", "text-[12px]");
}

//div2
p2.textContent = fruits[1].emoji
p2.classList.add("text-[70px]")
p22.textContent = fruits[1].title
p22.classList.add("font-bold", "text-[20px]") 
p222.textContent = fruits[1].price
p222.textContent="8 сомони/кг"
p222.classList.add("text-gray-500", "text-[12px]") 
p2222.textContent = fruits[1].inStock
for (let i = 0; i < fruits.length; i++) {

    if (fruits[i].inStock == true) {
        p2222.textContent = "❌ нет";
    } else {
        p2222.textContent = "✅ есть";
    }

    p2222.classList.add("text-gray-500", "text-[12px]");
}

//div3
p3.textContent = fruits[2].emoji
p3.classList.add("text-[70px]")
p33.textContent = fruits[2].title
p33.classList.add("font-bold", "text-[20px]") 
p333.textContent = fruits[2].price
p333.textContent="12 сомони/кг"
p333.classList.add("text-gray-500", "text-[12px]") 
p3333.textContent = fruits[2].inStock
for (let i = 0; i < fruits.length; i++) {

    if (fruits[i].inStock == false) {
        p3333.textContent = "❌ нет";
        d3.classList.add("bg-gray-200")
    } else {
        p3333.textContent = "✅ есть";
    }

    p3333.classList.add("text-gray-500", "text-[12px]");
}





//div4
p4.textContent = fruits[3].emoji
p4.classList.add("text-[70px]")
p44.textContent = fruits[3].title
p44.classList.add("font-bold", "text-[20px]") 
p444.textContent = fruits[3].price
p444.textContent="20 сомони/кг"
p444.classList.add("text-gray-500", "text-[12px]") 
p4444.textContent = fruits[3].inStock
for (let i = 0; i < fruits.length; i++) {

    if (fruits[i].inStock == true) {
        p4444.textContent = "❌ нет";
    } else {
        p4444.textContent = "✅ есть";
    }

    p4444.classList.add("text-gray-500", "text-[12px]");
}





//div5
p5.textContent = fruits[4].emoji
p5.classList.add("text-[70px]")
p55.textContent = fruits[4].title
p55.classList.add("font-bold", "text-[20px]") 
p555.textContent = fruits[4].price
p555.textContent="9 сомони/кг"
p555.classList.add("text-gray-500", "text-[12px]") 
p5555.textContent = fruits[4].inStock
for (let i = 0; i < fruits.length; i++) {

    if (fruits[i].inStock == true) {
        p5555.textContent = "❌ нет";
    } else {
        p5555.textContent = "✅ есть";
    }

    p5555.classList.add("text-gray-500", "text-[12px]");
}






//div6
p6.textContent = fruits[5].emoji
p6.classList.add("text-[70px]")
p66.textContent = fruits[5].title
p66.classList.add("font-bold", "text-[20px]") 
p666.textContent = fruits[5].price
p666.textContent="25 сомони/кг"
p666.classList.add("text-gray-500", "text-[12px]") 
for (let i = 0; i < fruits.length; i++) {
  p6666.textContent = fruits[5].inStock

    if (fruits[i].inStock == false) {
        p6666.textContent = "❌ нет";
        d6.classList.add("bg-gray-200")
    } else {
        p6666.textContent = "✅ есть";
    }

    p6666.classList.add("text-gray-500", "text-[12px]");
}







/////////section3
const pbb = document.querySelector(".pbb")
const span1 = document.querySelector(".span1")
const span2 = document.querySelector(".span2")

pbb.textContent="🔥 Хиты до 10 сомони"
pbb.classList.add("font-bold", "text-[27px]", "pl-10", "py-7")

span1.textContent="🍎 Яблоко — 8"
span1.classList.add("text-[17px]", "font-bold", "ml-11", "bg-yellow-200", "rounded-[19px]", "p-2")

span2.textContent="🍑 Персик — 9"
span2.classList.add("text-[17px]", "font-bold", "ml-5", "bg-yellow-200", "rounded-[19px]", "p-2")



//////////section4
const h1a = document.querySelector(".h1a")
h1a.textContent="🛒 Корзина «по 1 кг каждого»: 52 сомони"
h1a.classList.add("text-[25px]", "my-9", "mx-10", "bg-green-600", "text-white", "font-bold", "p-2", "rounded-[7px]")