// Demoplanet .js
import React, { useEffect, useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { time } from "three/tsl";
let introfunyction;


gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

ScrollTrigger.defaults({ markers: { startColor: "white", endColor: "white" } });
const Demoplanet = () => {
  const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
//   let smoother = ScrollSmoother.create({
//   smooth: 1.2,
//   // effects: false,
//   // normalizeScroll: true
// });
  const mountRef = useRef(null);
  let currentplanet;
  let scrolypos;
  let cu=useRef()
let timel=useRef()
let psoref=useRef()
let cameraref=useRef()
let prgressref=useRef(0)

let radius=8

let planet1pos=new THREE.Vector3(0,0,4)
let planet2pos=new THREE.Vector3(radius,0,0)
let planet3pos=new THREE.Vector3(-radius,0,0)



  useLayoutEffect(() => {
    
    let planets = [];
    let progrss=0;




    let scrolling = false;
    let planetgroup = new THREE.Group();
    // 1. Set up scene, camera, renderer
    planetgroup.position.y=-1
    const scene = new THREE.Scene();
    scene.add(planetgroup);
    // planetgroup.rotation.x = Math.PI / 2;
    let i = Math.PI / 2;
    // setInterval(() => {
    // planetgroup.rotation.z+=Math.PI/2
    //     i+=Math.PI/2

    // }, 10000);

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    cameraref.current=camera
    camera.position.z = 6;
// camera.position.y=2
    //gs

    //gs

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setClearColor("#041640",1)

// => change it to
// renderer.setClearColorHex( 0xffffff, 1 );
    mountRef.current.appendChild(renderer.domElement);

    // 2. Create a blue cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const cube1 = new THREE.Mesh(geometry, material);
    scene.add(cube1);
    cube1.name = "front";
    cube1.scale.set(2,2,2)
    planets.push(cube1);
    planetgroup.add(cube1);




















const axesHelper = new THREE.AxesHelper( 50 );
scene.add( axesHelper );
    ///2
    const geometry2 = new THREE.BoxGeometry();
    const material2 = new THREE.MeshBasicMaterial({ color: "red" });
    const cube2 = new THREE.Mesh(geometry2, material2);
    scene.add(cube2);
    cube2.name = "right";

    planetgroup.add(cube2);

    planets.push(cube2);

    ///3
    const geometry3 = new THREE.BoxGeometry();
    const material3 = new THREE.MeshBasicMaterial({ color: "orange" });
    const cube3 = new THREE.Mesh(geometry3, material3);
    scene.add(cube3);
    cube3.name = "left";

    planetgroup.add(cube3);

    planets.push(cube3);
    

    // 3. Animation loop
    var clock = new THREE.Clock();
    var time = 0;
    // var radius = 6;
    let di1 = new THREE.Vector3();
    let di2 = new THREE.Vector3();
    let di3 = new THREE.Vector3();
    let di4 = new THREE.Vector3();


    //
  timel.current=gsap.timeline({defaults:{duration:2,ease:"power1",onUpdate:()=>{ 
  // currentplanet.position.lerp(currentplanet.position,0.2)
    
    camera.position.y=-(currentplanet.position.z)}}})

    //     ScrollTrigger.create({
    //   trigger:".mai",
    //   scroller:"body",
    //   start:"top top",
    //   end:"bottom bottom",
    // scrub: 0.3, // smooth scroll linking,

    //   markers:{startColor:"white",endColor:"yellow"},
    //   onUpdate:(se)=>{

    //     progrss=se.progress
    //     console.log(se.progress,"oooooooo")
    //   }
    //   ,animation:timel.current
    // })

    window.addEventListener("scroll", (evv) => {
scrolling=true


    });

    let pso=[]
   psoref.current=pso;

    //addstar

function  addstar(){

  const geometry = new THREE.BufferGeometry();
  const getRandomParticelPos = (particleCount) => {
  const arr = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    arr[i] = (Math.random() - 0.5) * 30;
  }
  return arr;
};
  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(getRandomParticelPos(3500), 3)
);



const material = new THREE.PointsMaterial({
    size: 0.05,
    color: "white" // remove it if you want white points.
});

let starmesh=new THREE.Points(geometry,material)
scene.add(starmesh)
return starmesh
}
 let starmmesh=addstar()

    //addstar

// mouse
let mouseX = 0;
let mouseY = 0;
document.addEventListener("click", (event) => {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(pointer, camera);

  if (planets.length > 0) {
    const intersects = raycaster.intersectObjects(planets);

    for (let i = 0; i < intersects.length; i++) {
let planet=intersects[i].object


if (planet.name=="left" ||  planet.name=="right") {
  
  introfunyction()
}
     
    }
  }
});


    let rotate=0


//loo


cube1.position.copy(planet1pos)
cube2.position.copy(planet2pos)
cube3.position.copy(planet3pos)



function incr(){


for (let i = 0; i < planets.length; i++) {
  
  const planet = planets[i];
  console.log(planet.name,"ise ")
if (planet.position.z==4) {
  
  // planet.position.copy(new THREE.Vector3(-4,0,0))


gsap.to(planet.position,{
  x:-radius,duration:0.4,y:0,z:0,onComplete:()=>{
    planet.name="left"
  planet.scale.set(1,1,1)

  }
})
  
  

}else if (planet.position.x==radius) {
  console.log(planet,"ist the left ")
// planet.position.copy(new THREE.Vector3(0,0,4))
gsap.to(planet.position,{
  z:4,duration:0.4,x:0,y:0,onComplete:()=>{
    planet.name="front"
  planet.scale.set(2,2,2)
  }

})
  
  
}else if (planet.position.x==-radius) {
  console.log(planet,"ist the right ")

  // planet.position.copy(new THREE.Vector3(4,0,0))

  gsap.to(planet.position,{
  x:radius,duration:0.4,y:0,z:0,
  onComplete:()=>{
    planet.name="left"
  planet.scale.set(1,1,1)

  }
})
  
}
}
}
introfunyction
=incr;




//lo





















    const animate = () => {
      let t=clock.getElapsedTime()
    starmmesh.rotation.x = t * 0.05;
    starmmesh.rotation.y = t * 0.05;
    
       if (timel.current) {
        timel.current.seek(progrss*timel.current.duration())
    }
  

      requestAnimationFrame(animate);
      // cube1.getWorldDirection(di1)
      // cube2.getWorldDirection(di2)
      // cube3.getWorldDirection(di3)
      // cube4.getWorldDirection(di4)

      // console.log(di1,"di222",di2,"dii3",di3,"dii4",di4)
  

      if (currentplanet) {
    









        // console.log(currentplanet.name, "currentpla");
        // camera.lookAt(currentplanet.position.clone())
      }

      renderer.render(scene, camera);
    };
    animate();

    // 4. Handle resize
    const handleResize = () => {
      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
    };
    window.addEventListener("resize", handleResize);

    // 5. Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      //   mountRef.current.removeChild(renderer.domElement);
    };
  });

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "100vh", overflow: "hidden" }}
    />
  );
};

export default Demoplanet;

let exportinro=()=>introfunyction
export {exportinro}