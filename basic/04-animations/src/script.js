import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshMatcapMaterial({ color: 0xff0000 })
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
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

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

// Option 1 With Library gsap

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
gsap.to(mesh.position, { duration: 1, delay: 2, x: -2 })
gsap.to(mesh.position, { duration: 1, delay: 3, x: 0 })

// Option 2 calculate time with native JS

/* let time = Date.now()
 */

// Option 3 Three.js built in clock function

/* const clock = new THREE.Clock()
 */
const animate = () => {

    // Time
    // Option 2 calculate time with native JS

    /*  const currentTime = Date.now()
     const deltaTime = currentTime - time
     time = currentTime */

    // Option 3 Three.js built in clock function

    /* const elapsedTime = clock.getElapsedTime() */

    // Update objects
    /* mesh.rotation.y += deltaTime * 0.001 */

    /*  mesh.rotation.y = elapsedTime
     mesh.position.x = Math.cos(elapsedTime)
     mesh.position.y = Math.sin(elapsedTime) */

    /* camera.position.x = Math.cos(elapsedTime)
    camera.position.y = Math.sin(elapsedTime)
    camera.lookAt(mesh.position) */

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(animate)
}

animate()