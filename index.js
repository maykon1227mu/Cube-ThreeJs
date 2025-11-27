import * as TRHEE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";

const w = window.innerWidth;
const h = window.innerHeight;
const scene = new TRHEE.Scene();
const camera = new TRHEE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 5;
const renderer = new TRHEE.WebGLRenderer();
renderer.setSize(w, h);
renderer.toneMapping = TRHEE.ACESFilmicToneMapping;
renderer.outputColorSpace = TRHEE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

const geo = new TRHEE.BoxGeometry();
const mat = new TRHEE.MeshStandardMaterial({ 
    color: 0xffff00,
});
const cube = new TRHEE.Mesh(geo, mat);
scene.add(cube);

const hemiLight = new TRHEE.HemisphereLight(0xffffff, 0x000000, 1.1);
scene.add(hemiLight);

function animate( t = 0) {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.02;
    renderer.render(scene, camera);
    controls.update();
}
animate();