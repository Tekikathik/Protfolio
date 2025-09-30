let t1=gsap.timeline();
gsap.from(".main",{
  duration: 1,
  y: 20,
  opacity: 0,
  stagger: 0.5
})
gsap.from(".main div",{
  duration: 1,
  y: -20,
  opacity: 0,
  stagger: 0.5
})
t1.from("main", {
  x: -1200,
  duration: 1.5,
  scale: 0.5,
  opacity: 0.1,
});
t1.from("main .contact",{
  duration: 0.5,
  y: -20,
  opacity: 0,
})
t1.from("main .contact div",{
  duration: 0.5,
  y: -20,
  opacity: 0,
  stagger: 0.5
})
t1.from("main p", {
  duration: 0.5,
  y: 20,
  opacity: 0,
  stagger: 0.5   // correct property
});

// var path="M 10 100 Q 250 100 490 100"

// // var finalpath="M 10 100 Q 250 100 490 100"

// var string=document.querySelector(".tree");

// string.addEventListener("mousemove",function(dets){
//   path=`M 10 100 Q 500 ${dets.y} 990 100`
//   gsap.to("svg path",{
//     attr:{d:path}
//   });
// });
// var string = document.querySelector(".tree");
// string.addEventListener("mousemove", function(dets){
//   console.log(dets);
//   console.log("move");
// });


