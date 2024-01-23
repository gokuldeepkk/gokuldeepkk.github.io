$(document).ready(() => {
    const content = new SplitType('.content');
    let tl = gsap.timeline({repeat: 0});
    // tl.set(".seperator", { opacity: 0 })
    tl.to(".char", {y:0, stagger: 0.05, delay:0.2,duration: 0.1 })
    tl.fromTo(".seperator", { opacity: 0 }, { duration: 0.75, opacity: 1,color: "DE847B" })
    tl.from(".large-text", { y: 0, duration: 0.5 })
    tl.to(".large-text", { backgroundColor: "#B95C50", color: "#3B0404", duration: 0.5 })
    // tl.fromTo('#menu', { x: -100 }, { x: 0, duration: 0.5 })
})