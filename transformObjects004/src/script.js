import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()



// /**
//  * Objects
//  */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// // position practice
// mesh.position.x = 0.9
// mesh.position.y = -0.6
// mesh.position.z = 1
// // set (x,y,z)
// // mesh.position.set(0.9, -0.6, 1)

// // Scale
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5

// // Rotation
// // Pi make the rotation more accurate as we wished
// // since 2 * PI is a  full circle
// mesh.rotation.reorder('YXZ')
// // so it rotate y then x then z
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25


// group
// a simple gun
const group = new THREE.Group()
group.rotation.x = Math.PI * -0.1
group.scale.z = 0.5
scene.add(group)

const front = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
front.scale.x = 0.5
front.scale.y = 0.8
front.scale.z = 0.6
front.position.y = 0.1
group.add(front)

const back = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
back.scale.x = 0.6
back.scale.z = 0.6
back.position.y = 0.1
back.position.x = 2
group.add(back)

const body = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
body.scale.y = 0.8
body.scale.x = 4
body.position.x = 0.5
body.position.y = 0.8
group.add(body)



//AxesHelper
// const AxesHelper = new THREE.AxesHelper(2)
// scene.add(AxesHelper)

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


// Camera look at the object center
// camera.lookAt(mesh.position)
camera.lookAt(group.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)