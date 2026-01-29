import './style.css'
import * as THREE from 'three'
import {addDefaultMeshes} from './addDefaultMeshes'
import { add } from 'three/examples/jsm/libs/tween.module.js';

//three enssentials: scene, camera, renderer
const scene = new THREE.Scene();
//(FOV, Aspect Ratio, Near, Far)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
const renderer = new THREE.WebGLRenderer({ antialias: true });

//const mesh = addDefaultMeshes();
//scene.add(mesh);

//parent varieble
//meshes is the global container
const meshes = {}

init()
function init(){
  //all the setup 
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  camera.position.z = 5;

  //here we populate our meshes container
  //creating a varieble to the meshes container
  meshes.default = addDefaultMeshes();
  meshes.default.position.x = 2;

  //creating the 2nd mesh
  meshes.default2 = addDefaultMeshes();
  meshes.default2.position.x = -2;

  //creating the 3rd mesh
  meshes.default3 = addDefaultMeshes();
  meshes.default3.position.y = 2;

  console.log(meshes.default)

  //add meshes to our scene
  scene.add(meshes.default);
  scene.add(meshes.default2);
  scene.add(meshes.default3);

  animate()
}

function animate(){
  requestAnimationFrame(animate);
  meshes.default.rotation.x += 0.01;
  meshes.default2.rotation.y += 0.01;
  meshes.default3.rotation.z += 0.01;
  renderer.render(scene, camera);
}