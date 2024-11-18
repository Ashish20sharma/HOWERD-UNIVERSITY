var tl = gsap.timeline()
tl.from("#page1 #overlay img", {
    y: 100,
    opacity: 0,
    duration: 1,
})
tl.from("#page1 #overlay h4", {
    y: 100,
    opacity: 0,
    duration: 1,
})

tl.from("#page1 #overlay .button", {
    y: 100,
    opacity: 0,
    duration: 1,
})

tl.from("#page2", {
    opacity: 0,
    duration: 1,
    y: 100,
    delay: 1,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 70%",
        end: "top 90%",
        scrub: 1
    }
})
tl.from("#page2 #left img", {
    opacity: 0,
    duration: 1,
    y: 100,
    scrollTrigger: {
        trigger: "#page2 #left img",
        scroller: "body",
        start: "top 70%",
        end: "top 100%",
        scrub: 1
    }
})
tl.from("#page2 #right h1", {
    opacity: 0,
    duration: 1,
    y: 100,
    scrollTrigger: {
        trigger: "#page2 #right h1",
        scroller: "body",
        start: "top 70%",
        end: "top 100%",
        scrub: 1
    }
})
tl.from("#page2 #right h3", {
    opacity: 0,
    duration: 1,
    y: 100,
    scrollTrigger: {
        trigger: "#page2 #right h3",
        scroller: "body",
        start: "top 90%",
        end: "top 100%",
        scrub: 1
    }
})
tl.from("#page2 #right p", {
    opacity: 0,
    duration: 1,
    y: 100,
    scrollTrigger: {
        trigger: "#page2 #right p",
        scroller: "body",
        start: "top 90%",
        end: "top 100%",
        scrub: 1
    }
})
tl.from("#page3", {
    opacity: 0,
    duration: 1,
    y: 100,
    delay: 1,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 60%",
        end: "top 90%",
        scrub: 1
    }
})
tl.from("#page3 img", {
    opacity: 0,
    scale:0.2,
    duration: 1,
    scrollTrigger: {
        trigger: "#page3 img",
        scroller: "body",
        start: "top 60%",
        end: "top 80%",
        scrub: 1
    }
})
tl.from("#page3 .overlay h1", {
    opacity: 0,
    y:100,
    duration: 1,
    scrollTrigger: {
        trigger: "#page3 .overlay h1",
        scroller: "body",
        start: "top 55%",
        end: "top 90%",
        scrub: 1
    }
})
tl.from("#page4", {
    opacity: 0,
    duration: 1,
    y: 100,
    delay: 1,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 60%",
        end: "top 90%",
        scrub: 1
    }
})
tl.from("#page4 .content h1", {
    opacity: 0,
    duration: 1,
    y: 100,
    delay: 1,
    scrollTrigger: {
        trigger: "#page4 .content h1",
        scroller: "body",
        start: "top 65%",
        end: "top 90%",
        scrub: 1
    }
})
tl.from("#page4 #professor", {
    opacity: 0,
    duration: 1,
    y: 100,
    delay: 1,
    scrollTrigger: {
        trigger: "#page4 #professor",
        scroller: "body",
        start: "top 55%",
        end: "top 90%",
        scrub: 1
    }
})
tl.from("#page5", {
    opacity: 0,
    duration: 1,
    y: 100,
    delay: 1,
    scrollTrigger: {
        trigger: "#page5",
        scroller: "body",
        start: "top 60%",
        end: "top 90%",
        scrub: 1
    }
})
tl.from("#page5 .overlay .left", {
    opacity: 0,
    duration: 1,
    y: 100,
    delay: 1,
    scrollTrigger: {
        trigger: "#page5 .overlay .left",
        scroller: "body",
        start: "top 50%",
        end: "top 90%",
        scrub: 1
    }
})
tl.from("#page5 .overlay .right", {
    opacity: 0,
    duration: 1,
    y: 100,
    delay: 1,
    scrollTrigger: {
        trigger: "#page5 .overlay .right",
        scroller: "body",
        start: "top 40%",
        end: "top 90%",
        scrub: 1
    }
})
tl.from("#page6", {
    opacity: 0,
    duration: 1,
    y: 100,
    delay: 1,
    scrollTrigger: {
        trigger: "#page6",
        scroller: "body",
        start: "top 60%",
        end: "top 90%",
        scrub: 1
    }
})
tl.from("#page6 .contant", {
    opacity: 0,
    duration: 1,
    y: 100,
    delay: 1,
    scrollTrigger: {
        trigger: "#page6 .contant",
        scroller: "body",
        start: "top 40%",
        end: "top 90%",
        scrub: 1
    }
})