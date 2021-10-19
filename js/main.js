/**** Image Animation ****/

gsap.registerPlugin(ScrollTrigger);
let masks = document.querySelectorAll('.img-animate');
masks.forEach(mask => {
    let image = mask.querySelector('img');
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: mask,
            toggleActions: "restart none none reset",
            //start: "bottom bottom",
        }
    });
    tl.set(mask, {
        autoAlpha: 1
    });
    tl.from(mask, 1.5, {
        xPercent: -100,
        ease: Power2.out
    });
    tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out
    });
})

/* Fade Sections NOT IN USE */
/*
const boxes = gsap.utils.toArray('.fade-element');
boxes.forEach((box, i) => {
    const anim = gsap.fromTo(box, {
        autoAlpha: 0,
        y: 30,
        ease: "power1.easeInOut"
    }, {
        duration: 0.2,
        autoAlpha: 1,
        y: 0,
        ease: "power1.easeInOut"
    });
    ScrollTrigger.create({
        trigger: box,
        animation: anim,
        start: "bottom bottom",
        toggleActions: 'restart none none reset',
        once: true,

    });
});
*/

/**** Text Animation ****/
const boxesWord = gsap.utils.toArray('.line span');
boxesWord.forEach((box, i) => {
    const animWord = gsap.from(box, {
        y: 200,
        ease: "power4.out",
        delay: 0.4,
        skewY: 20,
        stagger: {
            amount: 0.4,
        },
    });
    ScrollTrigger.create({
        trigger: box,
        animation: animWord,
        toggleActions: 'restart none none reset',
        // once: true,
    });
});


/**** Navigation Animation ****/
var fadeInNav = new TimelineMax();
fadeInNav
    .fromTo(".logo, .back-btn", {
        opacity: 0
    }, {
        opacity: 1,
        duration: 0.5,
        ease: "power1.out"
    });



/**** Change Background Colour ****/

gsap.fromTo(".bg-change", {
    backgroundColor: gsap.getProperty("html", "--white")
}, {
    scrollTrigger: {
        trigger: ".bg-dark",
        scrub: true,
        end: "bottom bottom",
    },
    backgroundColor: gsap.getProperty("html", "--blue")
});
gsap.fromTo(".bg-change", {
    backgroundColor: gsap.getProperty("html", "--yellow")
}, {
    scrollTrigger: {
        trigger: ".bg-light",
        scrub: true,
        end: "bottom bottom",
    },
    backgroundColor: gsap.getProperty("html", "--white")
});


/**** Gallery ****/

let sections = gsap.utils.toArray('.gallery .gallery-item')
gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".gallery",
        pin: true,
        start: 'top',
        // markers: true,
        scrub: 1,
        end: () => "+=" + (document.querySelector(".gallery").offsetWidth / 4),
    }
})