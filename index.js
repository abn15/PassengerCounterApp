let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let childEl = document.getElementById("child-el")
let adultEl = document.getElementById("adult-el")
let count = 0
let total =0
let child = 0
let adult = 0
let countStr = ""

increment = () => {
    count += 1
    total+=1
    countEl.innerText = count
    totalEl.innerText = total
}

save = () => {
    countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent=0
    count =0
}
childincrement = () => {
    child += 1
    childEl.innerText = child
}

adultincrement = () =>{
    adult+= 1
    adultEl.innerText = adult
}

reset = () =>{
    count = 0
    total =0
    child = 0
    adult = 0
    countEl.innerText = count
    totalEl.innerText = total
    adultEl.innerText = adult
    childEl.innerText = child
    countStr = ""
    saveEl.textContent = countStr
}
