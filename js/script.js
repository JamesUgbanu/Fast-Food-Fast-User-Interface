
  
class DisplayOrder {
  
    constructor() {
      this.hoverButton = document.querySelectorAll(".menu--item");
     this.events()
    }
  
  events() {
    
     this.showButton();
  }
  
    showButton() {
      this.hoverButton.forEach((e) =>{
        e.addEventListener("mouseover", () => {
          e.children[2].style.display = "block";
        })
        e.addEventListener("mouseleave", () => {
          e.children[2].style.display = "none";
        })
      })
    }
}

var display = new DisplayOrder();
