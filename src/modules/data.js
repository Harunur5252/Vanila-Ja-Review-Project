import ui from "./ui"
import "regenerator-runtime/runtime";

class ReviewData{
    currentItem = 0
    reviews=[]
  
    async getData(){
      const res = await fetch('http://localhost:3000/reviews')
      return await res.json()
    }
    apiData(){
      this.getData().then(elm=>{
        this.reviews.push(...elm)
      }).catch(err=>{
         console.log(new Error(err))
      })
    }
    getRightIconData(){
      this.currentItem++
      if(this.currentItem>this.reviews.length-1){
        this.currentItem = 0
      }
      ui.showPerson(this.currentItem)
    }
    getLeftIconData(){
      this.currentItem--
      if (this.currentItem < 0) {
        this.currentItem = this.reviews.length - 1;
      }
      ui.showPerson(this.currentItem)
    }
    getRandomValue(){
      const randomValue = Math.floor(Math.random() * this.reviews.length)
      ui.showPerson(randomValue)
    }
    domLoaded(){
      ui.showPerson(this.currentItem)
    }
}
const data = new ReviewData()
data.apiData()
export default data