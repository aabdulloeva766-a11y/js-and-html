let body = document.querySelector(".body")
let b = document.querySelector(".div")
let b1 = document.querySelector(".div1")
let p = document.createElement("p")
let cnt = 0
p.classList.add("px-10")
body.append(p)
b.onclick= () =>{
    p.textContent=cnt
    cnt--
    if(p==0){
        cnt==0
    }
}
b1.onclick= () =>{
    cnt++
    p.textContent=cnt
}