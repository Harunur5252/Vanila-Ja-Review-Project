const setItemElm  = document.querySelector('.setItem')
const cirImgElm  = document.querySelector('.cirImg')
const nameElm  = document.querySelector('.name')
const titleElm  = document.querySelector('.title')
const textElm  = document.querySelector('.text')
const leftIconElm  = document.querySelector('.leftIcon')
const rightIconElm  = document.querySelector('.rightIcon')
const sBtnElm  = document.querySelector('.sBtn')

let currentItem = 0
const reviews = [
    {
      id:1,
      image:"https://pluspng.com/img-png/png-hd-handsome-man-suit-png-image-920.png",
      name:"Harunur Roshid",
      profession:"Web Developer",
      description:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
       id:2,
       image:"https://lechateau.scene7.com/is/image/LeChateau/300773_009_1_320x400.jpg",
       name:"Karim Mia",
       profession:"Android Developer",
       description:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    },
    {
      id:3,
      image:"https://thumbs.dreamstime.com/z/satisfied-business-man-26326961.jpg",
      name:"Rahim Mia",
      profession:"Programmer",
      description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
   },
   {
    id:4,
    image:"https://govinsider.asia/wp-content/uploads/2018/12/Peiling-Chua-1-1024x587.jpg",
    name:"Fatema Khatun",
    profession:"Graphics Designer",
    description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,"
  },
  {
    id:5,
    image:"https://www.lawfirm4immigrants.com/wp-content/uploads/2015/03/indian-woman-software-engineer.jpg",
    name:"Jorna",
    profession:"iI Executive",
    description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,"
  }

]

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




