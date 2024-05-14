import * as THREE from 'three'
import gsap from 'gsap'
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
const mesh2 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshBasicMaterial({ color: 0x0000ff }))
const mesh3 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x00ff00 }))
scene.add(mesh)
scene.add(mesh2)
scene.add(mesh3)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 8
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// delta: different between current timestamp to previous timestamp
// let time = Date.now()
gsap.to(mesh3.position, { duration: 1, delay: 2, x: 0 })
gsap.to(mesh3.position, { duration: 1, delay: 1, x: 1 })

// Clock
// start at the time Clock is initialized
const Clock = new THREE.Clock()

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })

// Animation 
const tick = () => {
    // Clock
    const elapsedTime = Clock.getElapsedTime()


    // time 
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // time = currentTime


    // update object
    // mesh.rotation.y += deltaTime * 0.001
    mesh.position.y = Math.cos(elapsedTime) * 2
    mesh.position.x = Math.sin(elapsedTime) * 2
    mesh.rotation.y = elapsedTime

    mesh2.position.y = Math.cos(elapsedTime + 0.5) * 2.2 // Slight phase shift and radius increase
    mesh2.position.x = Math.sin(elapsedTime + 0.5) * 2.2
    mesh2.rotation.y = elapsedTime + 0.5
    mesh2.lookAt(mesh.position)
    

    



    // render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
// call function
tick()