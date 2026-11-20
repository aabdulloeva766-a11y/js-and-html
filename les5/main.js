// card
const body = document.querySelector("body");
const card = document.querySelector(".card");
body.classList.add("flex", "justify-center");
card.classList.add('bg-white', "p-6", "rounded-3xl", "m-10");


// title
const title = document.querySelector(".title")
title.textContent="📚BookShelf"
title.classList.add("text-teal-500", "text-3xl", "py-5", 'font-bold')



// subtitle
const subtitle = document.querySelector(".subtitle")
subtitle.textContent=("Читательский билет: Мадина, клуб <<Сова>>")
subtitle.classList.add()



// reading
const read = document.querySelector(".reading")
read.innerHTML=("Сейчас читаю: <b>Маленький принц</b>")
read.classList.add()


// reading
const reaadd = document.querySelector(".reaadd")
reaadd.textContent=("Антуан де Сент-Экзюпери · 96 стр.")
reaadd.classList.add()



// progress
const progress = document.querySelector(".progress")
progress.textContent=("📖 Прочитано: 40%")
progress.classList.add("bg-orange-200", "rounded", "my-5", "text-orange-500", "p-2")



//member
const member = document.querySelector(".member")
member.textContent=("🎫 Участник клуба: скидка 10% в магазине")
member.classList.add('text-teal-500', 'font-bold')


//n1
const n1 = document.querySelector(".n1")
n1.textContent=("📕 Сказки")
n1.classList.add()



//n2
const n2 = document.querySelector(".n2")
n2.textContent=("📕 Фантастика")
n2.classList.add()



//n3
const n3 = document.querySelector(".n3")
n3.textContent=("📕 Детективы")
n3.classList.add()



//n4
const n4 = document.querySelector(".n4")
n4.textContent=("📕 Приключения")
n4.classList.add()



//pages
const pages = document.querySelector('.pages')
pages.textContent=("📄 350")
pages.classList.add('py-5')



//b1
const b1 = document.querySelector(".b1")
b1.innerHTML=("1. Маленький принц — Экзюпери ⭐️      <b>5</b>")
b1.classList.add('bg-teal-100', 'py-1', 'rounded-xl')

//b2
const b2 = document.querySelector(".b2")
b2.innerHTML=("2. Незнайка на Луне — Носов — <b>3</b>")
b2.classList.add('bg-gray-200', 'py-1', 'rounded-xl')

//b3
const b3 = document.querySelector(".b3")
b3.innerHTML=("3. Гарри Поттер — Роулинг ⭐️ <b>4</b>")
b3.classList.add('bg-teal-100', 'py-1', 'rounded-xl')

//b4
const b4 = document.querySelector(".b4")
b4.innerHTML=("4. Робинзон Крузо — Дефо — <b>2</b>")
b4.classList.add('bg-gray-200', 'py-1', 'rounded-xl')



//total
const tot = document.querySelector('.total')
tot.textContent=('Всего книг: 4, средняя оценка: 3.5')
tot.classList.add('py-5', 'text-gray-600')
