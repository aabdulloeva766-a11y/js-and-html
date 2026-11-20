let uslugi = [
    {
        name: "Скидки",
        image: "https://storage.alifshop.tj/media/images/settings/16/menu-1769166159836.png"
    },
    {
        name: "Бренды",
        image: "https://storage.alifshop.tj/media/images/settings/16/menu-1769166179104.png"
    },
    {
        name: "Супермаркет",
        image: "https://storage.alifshop.tj/media/images/settings/16/menu-1776920478299.png"
    },
    {
        name: "Смартфоны",
        image: "https://storage.alifshop.tj/media/images/settings/16/menu-1769166203441.png"
    },
    {
        name: "Парфюмерия",
        image: "https://storage.alifshop.tj/media/images/settings/16/menu-1787029059197.png"
    },
    {
        name: "Ювелирные",
        image: "https://storage.alifshop.tj/media/images/settings/16/menu-1787029066925.png"
    },
    {
        name: "Бытовая",
        image: "https://storage.alifshop.tj/media/images/settings/16/menu-1769166215527.png"
    },
    {
        name: "Наушники",
        image: "https://storage.alifshop.tj/media/images/settings/16/menu-1769166238378.png"
    },
    {
        name: "Компьютерная",
        image: "https://storage.alifshop.tj/media/images/settings/16/menu-1769166248120.png"
    },
    {
        name: "Мелкая бытовая",
        image: "https://storage.alifshop.tj/media/images/settings/16/menu-1769166263312.png"
    },
    {
        name: "Туры",
        image: "https://storage.alifshop.tj/media/images/settings/16/menu-1769166272843.png"
    },
    {
        name: "Спорт и хобби",
        image: "https://storage.alifshop.tj/media/images/settings/16/menu-1769166289614.png"
    },
    {
        name: "Одежда и обувь",
        image: "https://storage.alifshop.tj/media/images/settings/16/menu-1769166314001.png"
    },
    {
        name: "Продукты питания",
        image: "https://storage.alifshop.tj/media/images/settings/16/menu-1769166324212.png"
    },
    {
        name: "Бытовая химия",
        image: "https://storage.alifshop.tj/media/images/settings/16/menu-1771918705779.png"
    },
    {
        name: "Гигиена",
        image: "https://storage.alifshop.tj/media/images/settings/16/menu-1775819049940.png"
    },
    {
        name: "Книги",
        image: "https://storage.alifshop.tj/media/images/settings/16/menu-1769166334097.png"
    }
    
];

let category = document.querySelector(".category");
category.classList.add("bg-white","rounded-xl", "p-[20px]")

let katalog = document.createElement("h2");
katalog.textContent = "Каталог";
katalog.classList.add("font-bold", "text-[35px]")


category.append(katalog);

let empty  = document.createElement("div");
empty.classList.add("grid", "grid-cols-6", "gap-10","p-4");
category.append(empty);




uslugi.forEach((obj)=>{
    
    let card  = document.createElement("div");
    card.classList.add("m-auto", "group")

    let divigray = document.createElement("div");
    divigray.classList.add("rounded-xl", "p-[16px]","bg-gray-200", "group-hover:bg-yellow-300", "flex","items-center","justify-center", "mb-[10px]", "h-[120px]", "w-[120px]")
    
    let surat = document.createElement("img");
    surat.src = obj.image;
    surat.classList.add("w-[60px]")

     divigray.append(surat);
    
    let nom = document.createElement("h1");
    nom.textContent = obj.name;
    nom.classList.add("text-center" ,"w-27", "truncate", "group-hover:text-yellow-400")
    
    card.append(divigray);
    card.append(nom);

    empty.append(card);
})
