
document.addEventListener("DOMContentLoaded", () => {
    gsap.fromTo("#cat_header", {
        opacity: 0,
        y: 50,
        rotationX: 90,
        transformOrigin: "bottom center",
    }, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.3,
        delay: 0.3,
        ease: "power3.out",
    });

    gsap.to("#cat_p", {
        opacity: 1,
        y: -20,
        duration: 1.25,
        delay: 1.2,
        ease: "power1.out",
    });
})