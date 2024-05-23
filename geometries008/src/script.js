import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 )
const material = new THREE.MeshBasicMaterial({ 
    color: 0xff0000,
    wireframe: true
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// // triangle
// const positionArray = new Float32Array([
//     0, 0, 0, // three (x, y, z) for one vertice
//     0, 1, 0, // three for one vertice
//     1, 0, 0,  // three for one vertice

// ])

// // cover array to three js buffer attribute
// // covert three floats into a vertix
// const positionsAttribute = new THREE.BufferAttribute(positionArray, 3)

// // create a geometry
// const triGeo = new THREE.BufferGeometry()
// triGeo.setAttribute('position', positionsAttribute)
// const triMaterial = new THREE.MeshBasicMaterial({
//     color: 0x00ff00
// })
// const triMesh = new THREE.Mesh(triGeo, triMaterial)
// scene.add(triMesh)


// 50 triangles
const count = 50
const triGeo = new THREE.BufferGeometry()
const positionsArray = new Float32Array(count * 3 * 3) // 50 triangles, 3 vertices, 3 coordinates
for(let i = 0; i < count * 3 * 3; i++) {
    positionsArray[i] = (Math.random() - 0.5) * 4
}
const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3)
triGeo.setAttribute('position', positionsAttribute)
const triMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true
})
const triMesh = new THREE.Mesh(triGeo, triMaterial)
scene.add(triMesh)

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1))
})

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()