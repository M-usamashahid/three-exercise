import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/* Loading texture Using native JavaScript */

// const image = new Image()
// const texture = new THREE.Texture(image)
// image.addEventListener('load', () => {
//     texture.needsUpdate = true
// })
// image.src = 'map.jpg'

/* Using TextureLoader */

const loadingManager = new THREE.LoadingManager() // Using the LoadingManager

loadingManager.onStart = () => {
    console.log('loading started')
}
loadingManager.onLoad = () => {
    console.log('loading finished')
}
loadingManager.onProgress = () => {
    console.log('loading progressing')
}
loadingManager.onError = () => {
    console.log('loading error')
}

const textureLoader = new THREE.TextureLoader(loadingManager)
// const texture = textureLoader.load('checkerboard.svg')
// const texture = textureLoader.load('checkerboard.png')
// const texture = textureLoader.load('crop_gravel.jpg')
// const texture = textureLoader.load('wood.jpg')
// const texture = textureLoader.load('wood2.jpg')
// const texture = textureLoader.load('door.jpg')
const texture = textureLoader.load('leather.jpg')
// const texture = textureLoader.load('map.jpg')

// Repeat texture
// texture.wrapS = THREE.RepeatWrapping
// texture.wrapT = THREE.RepeatWrapping
// texture.repeat.x = 2
// texture.repeat.y = 1

//Offset
// texture.offset.x = 0.5
// texture.offset.y = 0.5

// center
// texture.center.x = 0.5
// texture.center.y = 0.5

// Rotation
// texture.rotation = Math.PI * 0.25

//Minification filter
// texture.minFilter = THREE.NearestFilter
// texture.minFilter = THREE.LinearFilter
// texture.minFilter = THREE.NearestMipmapNearestFilter
// texture.minFilter = THREE.LinearMipmapNearestFilter
// texture.minFilter = THREE.LinearMipmapLinearFilter

// Magnification filter
texture.generateMipmaps = false
texture.magFilter = THREE.NearestFilter
// texture.magFilter = THREE.LinearFilter

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
// const geometry = new THREE.SphereGeometry(1, 32, 32)
// const geometry = new THREE.ConeGeometry(1, 1, 32)
// const geometry = new THREE.TorusGeometry(1, 0.35, 32, 100)

const material = new THREE.MeshBasicMaterial({ map: texture })
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
camera.position.z = 2
scene.add(camera)


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