document.addEventListener("DOMContentLoaded",()=>{

    const hero = document.querySelector("#hero")

    window.addEventListener("scroll",(e)=>{
        let distance = window.scrollY
        hero.style.opacity = 1-(distance/500)
        hero.style.filter = `blur(${distance}px)`

    })

})