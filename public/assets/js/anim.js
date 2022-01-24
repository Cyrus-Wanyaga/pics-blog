function display_text(image) {
    const imageDiv = $('[data-attr=' + image + '');
    const imageOverlay = imageDiv[0].getElementsByClassName("image-overlay")[0];
    const thePicture = imageDiv[0].getElementsByClassName("the-image")[0];
    const imageText = imageDiv[0].getElementsByClassName("image-text")[0];
    let colorThief = new ColorThief();
    // if (thePicture.complete) {
    //     console.log("Setting the picture ... ");
    //     const colorsArray = colorThief.getColor(thePicture);
    //     imageOverlay.style.backgroundColor = "rgba(" + colorsArray[0] + "," + colorsArray[1] + "," + colorsArray[2] + "," + "0.5" + ")";
    // } else {
    //     thePicture.addEventListener('load', function () {
    //         const colorsArray = colorThief.getColor(thePicture);
    //         imageOverlay.style.backgroundColor = "rgba(" + colorsArray[0] + "," + colorsArray[1] + "," + colorsArray[2] + "0.5" + ")";
    //     });
    // }
    if (!imageOverlay.classList.contains("active")) {
        imageText.classList.add("active");
        imageDiv[0].classList.add("active");
        imageOverlay.classList.add("active");
        thePicture.classList.add("active");
    }
}

function close_text(image) {
    const imageDiv = $('[data-attr=' + image + '');
    const imageOverlay = imageDiv[0].getElementsByClassName("image-overlay")[0];
    const thePicture = imageDiv[0].getElementsByClassName("the-image")[0];
    const closeIcon = imageDiv[0].getElementsByClassName("icon-up")[0];
    const imageText = imageDiv[0].getElementsByClassName("image-text")[0];
    if (imageOverlay.classList.contains("active")) {
        closeIcon.classList.add("active");
        const closeOverlay = () => {
            imageOverlay.classList.remove("active");
        };
        closeOverlay();
        imageText.classList.remove("active");
        thePicture.classList.remove("active");
        setTimeout(() => {
            closeIcon.classList.remove("active");
            imageDiv[0].classList.remove("active");
        }, 1000);
    }
}
