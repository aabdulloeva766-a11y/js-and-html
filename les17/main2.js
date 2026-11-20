let students = [
    {
        name: 'Amina',
        age: 13,
        image: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    {
        name: 'SundayS',
        age: 13,
        image: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    {
        name: 'Khalid',
        age: 14,
        image: 'https://www.w3schools.com/howto/img_avatar.png'
    }
]

let box = document.querySelector('.box')

box.classList.add(
    'flex',
    'gap-4',
    'flex-wrap',
    'p-4',
    'bg-gray-100',
    'rounded-lg'
)

let inpName = document.querySelector('.inpName')
let inpAge = document.querySelector('.inpAge')
let inpImage = document.querySelector('.inpImage')

let btnAdd = document.querySelector('.btnAdd')
let btnDelete = document.querySelector('.btnRemove')

btnAdd.classList.add(
    'bg-blue-500',
    'text-white',
    'px-4',
    'py-2',
    'rounded-lg',
    'hover:bg-blue-600',
    'transition-colors',
    'duration-300',
    'cursor-pointer',
    'hover:scale-105',
    'transform'
)

btnDelete.classList.add(
    'bg-red-500',
    'text-white',
    'px-4',
    'py-2',
    'rounded-lg',
    'hover:bg-red-600',
    'transition-colors',
    'duration-300',
    'cursor-pointer',
    'hover:scale-105',
    'transform'
)

btnAdd.onclick = () => {
    let newUser = {
        name: inpName.value,
        age: inpAge.value,
        image: inpImage.value
    }

    students.push(newUser)

    showStudents()
}

btnDelete.onclick = () => {
    students = students.filter(elem => elem.name.toLowerCase() !== inpName.value.toLowerCase())

    showStudents()
}

function showStudents() {
    box.innerHTML = ''

    students.forEach((elem, index) => {
        let div = document.createElement('div')

        div.classList.add(
            'bg-white',
            'border',
            'p-4',
            'rounded-2xl',
            'shadow-md',
            'flex',
            'flex-col',
            'items-center',
            'w-40'
        )

        let name = document.createElement('h3')
        let age = document.createElement('p')
        let image = document.createElement('img')

        name.innerHTML = elem.name
        age.innerHTML = elem.age
        image.src = elem.image
        image.width = 100

        image.classList.add(
            'rounded-3xl',
            'w-24',
            'h-24',
            'object-cover'
        )

        div.append(image, name, age)
        box.append(div)
    })
}

showStudents()