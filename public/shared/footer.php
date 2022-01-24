<?php
?>
<script rel="script" src="assets/js/mobile-menu.js"></script>
<script rel="script" src="assets/js/unsplash-api.js"></script>
<script>
    $(document).ready(function (){
        let path = location.pathname;
        let navLinks = document.querySelectorAll(".link-items a");
        navLinks.forEach(function (el){
            if(el.href.indexOf(path) !== -1){
                el.classList.add("active");
            }
        });
    });
</script>
<script>
    let swiffy;
    let sliderElement;

    $(document).ready(function () {
        swiffy = window.swiffyslider;
        sliderElement = document.querySelectorAll(".swiffy-slider");
    });

    $(document).ready(function () {
        sliderElement.forEach(function (el) {
            $(".right-arrow").click(function () {
                swiffy.slide(el, true);
            });
            $(".left-arrow").click(function () {
                swiffy.slide(el, false);
            })
        });
    });
</script>
<script rel="script" src="assets/js/anim.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.3.0/color-thief.umd.js"></script>
