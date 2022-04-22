

/* Header styling*/

const icons = document.querySelector(".icons")
const linksList = document.querySelector("ul.links-list")
const linksContainer = document.querySelector(".links-container")
const arrow = document.querySelector(".arrow")


/*Scroll links*/
const links = document.querySelectorAll("ul.links-list a");





icons.addEventListener("click",(e)=>{
    let linksListHeight = linksList.getBoundingClientRect().height;
    let linksContainerHeight = linksContainer.getBoundingClientRect().height;
        if(linksContainerHeight === 0){
            linksContainer.style.height = `${linksListHeight}px`;
            icons.classList.remove("span-width");
            arrow.classList.add("show")
        }else{
            linksContainer.style.height = `0`;
            icons.classList.add("span-width");
            arrow.classList.remove("show")
        }
})

document.body.addEventListener("click",(e)=>{
    let linksContainerHeight = linksContainer.getBoundingClientRect().height;
    if(linksContainerHeight !== 0){
        linksContainer.style.height = `0`;
        icons.classList.add("span-width");
            arrow.classList.remove("show")
    }
})

/* Scroll Smothely*/


links.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        let section = document.querySelector(link.getAttribute("href"))
        window.scrollTo({
            top:section.getBoundingClientRect().top,
            left:0,
            behavior:"smooth"
        })
    })
})

/*Defined Year */

const year = document.querySelector(".year")

const date = new Date().getFullYear()

year.textContent = date




