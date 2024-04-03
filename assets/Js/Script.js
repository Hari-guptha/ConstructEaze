const tiggerpopup = () => {
    const pop = document.getElementById('PopUp');
    const blur = document.getElementById('backgroundBlur');
    pop.style.display = "block";
    blur.style.display = "block";
}


const ClosePopUp = () => {
    const pop = document.getElementById('PopUp');
    const blur = document.getElementById('backgroundBlur');
    pop.style.display = "none";
    blur.style.display = "none";
}
