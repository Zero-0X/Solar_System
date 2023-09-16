import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerwidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(15, 32, 16);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sphere = new THREE.Mesh(geometry, material); scene.add(sphere);


const planetsData = [
    { name: "Sun", diameter: 1392700, distance: 0, color: "yellow" },
    { name: "Mercury", diameter: 4879, distance: 57.9, color: "grey" },
    { name: "Venus", diameter: 12104, distance: 108.2, color: "orange" },
    { name: "Earth", diameter: 12756, distance: 194.6, color: "blue" },
    { name: "Mars", diameter: 6792, distance: 228, color: "red" },
    { name: "Jupiter", diameter: 142984, distance: 778.5, color: "green" },
    { name: "Saturn", diameter: 129536, distance: 1432, color: "beige" },
    { name: "Uarnus", diameter: 51118, distance: 2867, color: "violet" },
    { name: "Neptune", diameter: 49528, distance: 4515, color: "indigo" },
]

const solarSystem = document.getElementById("solar-system");

function createPlanet(planetData) {
    const planet = document.createElement("div");
    planet.className = "planet";
    planet.style.width = `${planetData.diameter / 20}px`;
    planet.style.height = `${planetData.diameter / 20}px`;
    planet.style.backgroundColor = planetData.color;
    planet.style.position = "absolute";

    const angle = Math.random() * 360;
    const x = Math.cos(angle) * planetData.distance;
    const y = Math.sin(angle) * planetData.distance;

    planet.style.transform = `translate(${x}px, ${y}px)`;
    planet.title = planetData.name

    return planet;
}

function createSolarSystem() {
    planetsData.forEach((planetData) => {
        const planet = createPlanet(planetData);
        solarSystem.appendChild(planet);
    });
}

createSolarSystem();