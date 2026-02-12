import './style.css'
import * as THREE from 'three'
import {addDefaultMeshes, addStandardMeshes} from './addDefaultMeshes'
import {addLight} from './addLight'
import { add } from 'three/examples/jsm/libs/tween.module.js';

//three enssentials: scene, camera, renderer
const scene = new THREE.Scene();
//(FOV, Aspect Ratio, Near, Far)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
const renderer = new THREE.WebGLRenderer({ antialias: true });


//parent varieble
//meshes is the global container
const meshes = {}
const lights = {}

init()
function init(){
  //all the setup 
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  camera.position.z = 5;

  //adding lights
  lights.default = addLight()
  scene.add(lights.default);

  //here we populate our meshes container
  //creating a varieble to the meshes container
  meshes.default = addDefaultMeshes();
  meshes.default.position.x = 2;
  scene.add(meshes.default);

  meshes.standard = addStandardMeshes();
  meshes.standard.position.x = -2;
  scene.add(meshes.standard);

  resize()
  animate()
}

function resize(){
  window.addEventListener('resize', () => {
	renderer.setSize(window.innerWidth, window.innerHeight)
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	})
}

function animate(){
  requestAnimationFrame(animate);
  meshes.default.rotation.x += 0.01;
  meshes.standard.rotation.x += 0.01;
  renderer.render(scene, camera);
}
