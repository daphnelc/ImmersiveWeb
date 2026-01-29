import './style.css'
import * as THREE from 'three'

export function addDefaultMeshes(){

    //making a cube shape, defining the shape
    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshBasicMaterial({color: 0xff0000});
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
    
}