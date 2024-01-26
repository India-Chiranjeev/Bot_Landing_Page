const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function skew(){
    window.addEventListener("mousemove", function(dets){

    });
}

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from('#nav' , {
        y: '-10',
        opacity: 0,
        duration: 0.95,
        ease: Expo.easeInOut
    })
    .to('.sub' , {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: .2
    })
}


function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

circleMouseFollower();
firstPageAnim();