import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import * as dat from 'lil-gui'

// Canvas
const canvas = document.querySelector('canvas.webgl')

const parameters = {
    color: 0xff0000,
    spin: () => {
        gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + Math.PI * 2 })
    }
}

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: parameters.color })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

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
/* PerspectiveCamera */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 1000)
camera.position.z = 3
// camera.lookAt(mesh.position)
scene.add(camera)

/**
 * Debug
 */
const gui = new dat.GUI()

// gui.add(mesh.position, 'y', - 3, 3, 0.01)
gui
    .add(mesh.position, 'y')
    .min(- 3)
    .max(3)
    .step(0.01)
    .name('elevation')

gui.add(mesh, 'visible')
gui.add(material, 'wireframe')
gui
    .addColor(parameters, 'color')
    .onChange(() => {
        material.color.set(parameters.color)
    })
gui.add(parameters, 'spin')

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.update()

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

/**
 * Animate
 */


const animate = () => {

    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(animate)
}

animate()
