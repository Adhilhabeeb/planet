// Demoplanet .js
import React, { useEffect, useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { time } from "three/tsl";


gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

ScrollTrigger.defaults({ markers: { startColor: "white", endColor: "white" } });
const Demoplanet = () => {
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
useEffect(() => {
cameraref.current.position.y= (-cu.current.position.clone().z )+1

//  alert(currentplanet)
 console.log(cu.current,"curr",cameraref.current,"i",psoref.current)


gsap.fromTo(cu.current.position,
    
    {
        x:psoref.current[0].x,y:psoref.current[0].y,z:psoref.current[0].z,
        
       
    },
    {
    x:1,duration:1,
    z:10
    ,scrollTrigger:{
        scrub:1,
        trigger:".page1",
        markers:true,
        start:"50% 40%",
        end:"bottom 10%" ,
    
      
    },
onComplete: ()=>{
},
      onUpdate:(ee)=>{
    //    console.log(progress,"eeeeee")

   
cameraref.current.position.y= (-cu.current.position.clone().z )+0.5


      //  cameraref.current.position.y=-(cu.current.position.z)


       
cameraref.current.updateMatrixWorld()
cameraref.current.updateMatrix()
// camera.lookAt(currentplanet.position)
// camera.position.y=camera.position.y+0.4

   

    }
  ,onReverseComplete:()=>{


// camera.lookAt(currentplanet.position.clone())
  }
})


gsap.fromTo(cu.current.position,
    
    {
        x:1,
      
        z:cu.current.position.clone().z,


        
       
    },
    {
    x:-2,duration:1
  
    ,scrollTrigger:{
        scrub:1,
        trigger:".page2",
        markers:{startColor:"yellow",endColor:"white"},
        start:"50% 40%",
        end:"bottom 10%" ,
      
    },
onComplete: ()=>{
},
      onUpdate:(ee)=>{
    //    console.log(progress,"eeeeee")

   


      //  cameraref.current.position.y=-(cu.current.position.z)
       
cameraref.current.updateMatrixWorld()
cameraref.current.updateMatrix()
// camera.lookAt(currentplanet.position)
// camera.position.y=camera.position.y+0.4

   

    }
  ,onReverseComplete:()=>{
// camera.position.y=1
// camera.position.z=6
// camera.lookAt(currentplanet.position.clone())
  }
})



// if (timel.current) {
//   console.log(timel,"timel")
//      let tl=timel.current


// tl.to(cu.current.position,{z:7,x:2},1)
// tl.to(cu.current.position,{x:-2},4)
// }
 
}, [cu.current,cameraref.current,psoref.current,timel.current])






  useLayoutEffect(() => {
    
    let planets = [];
    let progrss=0;




    let scrolling = false;
    let planetgroup = new THREE.Group();
    // 1. Set up scene, camera, renderer
    const scene = new THREE.Scene();
    scene.add(planetgroup);
    planetgroup.rotation.x = Math.PI / 2;
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
    renderer.setClearColor("white",0.4)

// => change it to
// renderer.setClearColorHex( 0xffffff, 1 );
    mountRef.current.appendChild(renderer.domElement);

    // 2. Create a blue cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const cube1 = new THREE.Mesh(geometry, material);
    // scene.add(cube1);
    cube1.name = "cube1";
    
    planets.push(cube1);
    planetgroup.add(cube1);
const axesHelper = new THREE.AxesHelper( 50 );
scene.add( axesHelper );
    ///2
    const geometry2 = new THREE.BoxGeometry();
    const material2 = new THREE.MeshBasicMaterial({ color: "red" });
    const cube2 = new THREE.Mesh(geometry2, material2);
    // scene.add(cube2);
    cube2.name = "cube2";

    planetgroup.add(cube2);

    planets.push(cube2);

    ///3
    const geometry3 = new THREE.BoxGeometry();
    const material3 = new THREE.MeshBasicMaterial({ color: "orange" });
    const cube3 = new THREE.Mesh(geometry3, material3);
    // scene.add(cube3);
    cube3.name = "cube3";

    planetgroup.add(cube3);

    planets.push(cube3);
    ///4
    const geometry4 = new THREE.BoxGeometry();
    const material4 = new THREE.MeshBasicMaterial({ color: "yellow" });
    const cube4 = new THREE.Mesh(geometry4, material4);
    // scene.add(cube4);
    cube4.name = "cube4";

    planets.push(cube4);
    planetgroup.add(cube4);

    // 3. Animation loop
    var clock = new THREE.Clock();
    var time = 0;
    var radius = 4;
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
    arr[i] = (Math.random() - 0.5) * 10;
  }
  return arr;
};
  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(getRandomParticelPos(350), 3)
);



const material = new THREE.PointsMaterial({
    size: 0.05,
    color: "red" // remove it if you want white points.
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
// document.addEventListener("mousemove", (e) => {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
// });

    let rotate=0
    const animate = () => {
      
    
       if (timel.current) {
        timel.current.seek(progrss*timel.current.duration())
    }
        time = clock.getElapsedTime() * 0.1 * Math.PI;
 starmmesh.rotation.x = time * 0.5;
    starmmesh.rotation.y = time * 0.5;
      requestAnimationFrame(animate);
      // cube1.getWorldDirection(di1)
      // cube2.getWorldDirection(di2)
      // cube3.getWorldDirection(di3)
      // cube4.getWorldDirection(di4)

      // console.log(di1,"di222",di2,"dii3",di3,"dii4",di4)
      if (!scrolling) {

        planets.forEach((c, ndx) => {
          let clonepl = c.clone();
          c.position.set(
            Math.cos(  Math.PI * 0.5 * ndx) * radius,
            Math.sin(rotate + Math.PI * 0.5 * ndx) * radius,
     0
          );
  
        //   console.log("cooo", c.position, "And", c.name);
          if (c.position.x > radius - 0.1) {
           

          }
          if (c.position.y == radius) {
            // console.log("cccpposoosos",c.name)
       c.rotation.z+=0.001
            currentplanet = c;
            cu.current=c;
  pso[0]=c.position.clone()
  // -(cu.current.position.z)
  camera.position.setY(-(c.position.z-0.5))
          }
        });
      }

      if (currentplanet  && scrolling) {

if (pso.length>0) 

    {



        let progress;




    }


      
//         gsap.to(currentplanet.position, {
//           x: 1,
//           z: 8,
//      duration:1.5,
//           scrollTrigger: {
//             trigger: ".page1",
//             scroller: "body",
//             start:"top center",end:" center end",
//             markers: true,
//             scrub:2,
//        onUpdate:()=>{

       
// // camera.position.x = currentplanet.position.x;
// //     camera.position.y = currentplanet.position.y + 2; // Adjust for desired camera height
// //     camera.position.z = currentplanet.position.z + 5; // Adjust for desired camera distance
//     // Optionally, update the camera's lookAt target
//     // camera.lookAt(currentplanet.position);
// camera.position.y=-currentplanet.position.z

//         // console.log(currentplanet.position,"ppooi")
//        }
//           }
//         });






}

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
