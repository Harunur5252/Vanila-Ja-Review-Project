

const setItemElm  = document.querySelector('.setItem')
const cirImgElm  = document.querySelector('.cirImg')
const nameElm  = document.querySelector('.name')
const titleElm  = document.querySelector('.title')
const textElm  = document.querySelector('.text')
const leftIconElm  = document.querySelector('.leftIcon')
const rightIconElm  = document.querySelector('.rightIcon')
const sBtnElm  = document.querySelector('.sBtn')

let currentItem = 0
let reviews = []
async function getData(){
  const res = await fetch('http://localhost:3000/reviews')
  return await res.json()
}


getData().then(elm=>{
  elm.forEach(item => {
    reviews.push(item)
  });
}).catch(err=>{
   console.log(new Error(err))
})

function showPerson(item){
  const elm = reviews[item]
  cirImgElm.src=elm.image   
  nameElm.textContent=elm.name
  titleElm.textContent=elm.profession
  textElm.textContent=elm.description
}

window.addEventListener('DOMContentLoaded',()=>{
  showPerson(currentItem)
})

rightIconElm.addEventListener('click',(e)=>{
  
  currentItem++
  if(currentItem>reviews.length-1){
    currentItem = 0
  }
  
    showPerson(currentItem)
})

leftIconElm.addEventListener('click',(e)=>{
  currentItem--
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  
    showPerson(currentItem)
})

sBtnElm.addEventListener('click',()=>{
  currentItem = Math.floor(Math.random() * reviews.length)
  showPerson(currentItem)
})




