window.addEventListener("scroll", () => {

    // const scrollPX = window.scrollY

    // console.log(scrollPX);

    const premium = document.querySelector(".premium");
    const ubicacion =premium.getBoundingClientRect();

    if(ubicacion.top < 784){
        console.log("El elemento ya esta visible");
    } else{
        console.log("Aún no, da más scroll");
    }
    
})