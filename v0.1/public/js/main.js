$(document).ready(() => {
    gsap.registerPlugin(ScrollTrigger);

    let panels = gsap.utils.toArray("section");
    let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));
    ScrollTrigger.normalizeScroll(true)
    panels.forEach((panel, i) => {
        ScrollTrigger.create({
            trigger: panel,
            start: () => {
                return panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom"
            },
            pin: true, 
            pinSpacing: false 
        });
    });

    ScrollTrigger.create({
    snap: {
        snapTo: (progress, self) => {
        let panelStarts = tops.map(st => st.start),
            snapScroll = gsap.utils.snap(panelStarts, self.scroll());
        return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
        },
        duration: 0.5
    }
    });

    $('#resume').click(() => {
        downloadElement();
    });
})

function downloadElement() {
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/file/Profile.pdf';
    link.download = "gokul_deep.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    link.remove();
}

function handleDownloadButton(ev){
    const resumeBtn = document.getElementById("resume");
    resumeBtn.style.visibility = window.scrollY > 3 ? "hidden": "visible";
}
window.onscroll=handleDownloadButton;