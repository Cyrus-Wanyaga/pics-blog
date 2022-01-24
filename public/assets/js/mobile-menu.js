function toggleMenu(instruction) {
    let mobileMenu = document.querySelector(".custom-mobile-nav");
    let body = document.querySelector(".main");
    let isMobile = window.matchMedia("(max-width: 600px)").matches;
    if (instruction === 'open') {
        if(isMobile){
            // body.classList.add("active");
            mobileMenu.classList.add("active");
            $("body").css({'overflow-y': 'hidden', 'position': 'fixed'});
        }
    } else {
        if(isMobile){
            // body.classList.remove("active");
            mobileMenu.classList.remove("active");
            $("body").css({'overflow-y': '', 'position': ''});
        }
    }
}