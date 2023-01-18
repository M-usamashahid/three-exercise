import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.x = 0
camera.position.y = 0
scene.add(camera)

/**
 * Axes Helper
 */
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

/**
 * Objects
 */

// Group
const group = new THREE.Group()
group.scale.y = 2

// Rotation
group.rotation.x = Math.PI * 0.25
group.rotation.y = Math.PI * 0.1
group.rotation.z = Math.PI * 1

scene.add(group)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshMatcapMaterial({ color: 0xff0000 })

const cube1 = new THREE.Mesh(geometry, material)

cube1.position.x = - 1.5
group.add(cube1)

const cube2 = new THREE.Mesh(geometry, material)

cube2.position.x = 0
group.add(cube2)

const cube3 = new THREE.Mesh(geometry, material)

cube3.position.x = 1.5
group.add(cube3)

console.log('length of a vector:', cube1.position.length())
console.log('distance from another Vector3', cube1.position.distanceTo(cube2.position))

// /* You can normalize its values 
// (meaning that you will reduce the length of the vector
//      to 1 unit but preserve its direction): */
cube3.position.normalize()

camera.lookAt(group.position)
/**
 * Object
 */

// /* 
// * Position 
// */

// // mesh.position.x = 1
// // mesh.position.y = 1
// // mesh.position.z = 1
// // another way to set position values
// mesh.position.set(1, 1, 1)

// console.log('length of a vector:', mesh.position.length())
// console.log('distance from another Vector3', mesh.position.distanceTo(camera.position))

// /* You can normalize its values 
// (meaning that you will reduce the length of the vector
//      to 1 unit but preserve its direction): */
// mesh.position.normalize()

// /*
// * Scale 
//  */

// mesh.scale.x = 1
// mesh.scale.y = 0.5
// mesh.scale.z = 1

// /*
// * Rotation 
//  */
// // mesh.rotation.reorder('YXZ')
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25
// // mesh.rotation.z = Math.PI * 0.25

// camera.lookAt(mesh.position)


/**
 * Renderer Creation
 */
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)