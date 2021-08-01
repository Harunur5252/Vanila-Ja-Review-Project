import data from "./data"

class UI{
    selectors(){
      const setItemElm  = document.querySelector('.setItem')
      const cirImgElm  = document.querySelector('.cirImg')
      const nameElm  = document.querySelector('.name')
      const titleElm  = document.querySelector('.title')
      const textElm  = document.querySelector('.text')
      const leftIconElm  = document.querySelector('.leftIcon')
      const rightIconElm  = document.querySelector('.rightIcon')
      const sBtnElm  = document.querySelector('.sBtn')
      return {
        setItemElm,cirImgElm,nameElm,titleElm,textElm,leftIconElm,rightIconElm,sBtnElm
      }
    }
    showPerson(item){
        const {cirImgElm,nameElm,titleElm,textElm} = this.selectors()
        const elm = data.reviews[item]
        
        cirImgElm.src=elm.image   
        nameElm.textContent=elm.name
        titleElm.textContent=elm.profession
        textElm.textContent=elm.description
    }
    loadAllEventListener(){
        const {rightIconElm,leftIconElm,sBtnElm} = this.selectors()
        window.addEventListener('DOMContentLoaded',()=>data.domLoaded())
        rightIconElm.addEventListener('click',()=>data.getRightIconData())
        leftIconElm.addEventListener('click',()=>data.getLeftIconData())
        sBtnElm.addEventListener('click',()=>data.getRandomValue())
    }
}
  
const ui = new UI()
export default ui