const tl = gsap.timeline({defaults:{duration:0.75,ease: "power3.out"}})


//Stars
tl.fromTo('.box1',{x:'100%',opacity:0},{x:'-96px', opacity:1,duration: .9, ease: "back.out(1.7)"},'<30%')
tl.fromTo('.box2',{x:'100%',opacity:0},{x:'-48px', opacity:1,duration: .9, ease: "back.out(1.7)"},'<30%')
tl.fromTo('.box3',{x:'100%',opacity:0},{x:0, opacity:1,duration: .9, ease: "back.out(1.7)"},'<30%')



//Titles
gsap.fromTo('.social__title',{x:'-100%',opacity:0},{x:0,opacity:1,duration: .9, ease: "back.out(1.7)"},'<20%')
gsap.fromTo('.social__subtitle',{x:'-100%',opacity:0},{x:0,opacity:1,duration: .9, ease: "back.out(1.7)"},'<30%')



//Cards
tl.fromTo('.card1',{y:'100%',opacity:0},{y:0,opacity:1,duration:.9, ease:"back.out(1.7)"},'<30%')
tl.fromTo('.card2',{y:'100%',opacity:0},{y:'18px',opacity:1,duration:.9, ease:"back.out(1.7)"},'<30%')
tl.fromTo('.card3',{y:'100%',opacity:0},{y:'36px',opacity:1,duration:.9, ease:"back.out(1.7)"},'<30%')