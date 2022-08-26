/mode strict/

/*PARA OCULTAR EL NAVBAR*/
function doc(element) {
  return document.querySelector(element);
}

const nav = doc("nav");
const none = doc(".menu");

const mq = window.matchMedia("(max-width: 912px)")

mq.addEventListener("change", ()=>{
  if(mq.matches){
    nav.addEventListener("mouseenter", ()=>{
        nav.style.height = "100%";
        setTimeout(()=> none.style.display = "initial",200)
    })

    nav.addEventListener("mouseleave", ()=>{
        nav.style.height = "78px";
        none.style.display = "none"   
    })  
  }

  else{
    nav.addEventListener("mouseleave", ()=>{
        nav.style.height = "100%";
        none.style.display = "initial"   
    })
  }

})
/*END NAVBAR COLLAPSE*/

/*const menuLinks = document.querySelectorAll(`.list a[href^="#"]`);
const menu = document.querySelector(".menu")
menuLinks.forEach(menuLink =>{
    menuLink.addEventListener("click", function(){
        menu.classList.remove(".menu_opened")
    })
})
*/







/*
let interval = 2000;



const btns = document.querySelectorAll(".con-social-btns button");


    item.addEventListener("mouseenter", (evt)=>{
    const bg = evt.target.querySelector(".bg");
    const i = evt.target.querySelector("i .bi");
    bg.style.transition = "all .15s ease";
    i.style.transition = "all .15s ease";

    setTimeout(()=>{             
        bg.style.transition = "";
        i.style.transition = "";
    }, 150);
})

    item.addEventListener("mousemove", (evt) => {
    const x = evt.layerX - 60;
    const y = evt.layerY - 60;
    const bg = evt.target.querySelector(".bg");
    const i = evt.target.querySelector("i .bi");
    bg.style.transform = `translate(${x/8}px, ${y/8}px)`;
    i.style.transform = `translate(${x/4}px,${y/4}px)`;
})

    item.addEventListener("mouseleave", (evt)=>{
	const bg = evt.target.querySelector(".bg");
	const i = evt.target.querySelector("i .bi");
	bg.style.transition = "all .25s ease";
	i.style.transition = "all .25s ease";
	bg.style.transform = `translate{${0}px,${0}px}`
	i.style.transform = `translate{${0}px,${0}px}`;

	setTimeout(()=>{             
   		bg.style.transition = "";
   		i.style.transition = ""
    },250);
})


btns.forEach((item)=> {
})

*/
