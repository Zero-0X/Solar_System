import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerwidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

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
];

const moonsData = [
    {}
]

// PREVIOUS CODE FOR CREATING DOM ELEMENTS (PLANETS) AND APPENDING THEM TO A CONTAINER (DIV)

// const solarSystem = document.getElementById("solar-system");

// function createPlanet(planetData) {
//     const planet = document.createElement("div");
//     planet.className = "planet";
//     planet.style.width = `${planetData.diameter / 20}px`;
//     planet.style.height = `${planetData.diameter / 20}px`;
//     planet.style.backgroundColor = planetData.color;
//     planet.style.position = "absolute";

//     const angle = Math.random() * 360;
//     const x = Math.cos(angle) * planetData.distance;
//     const y = Math.sin(angle) * planetData.distance;

//     planet.style.transform = `translate(${x}px, ${y}px)`;
//     planet.title = planetData.name

//     return planet;
// }

// function createSolarSystem() {
//     planetsData.forEach((planetData) => {
//         const planet = createPlanet(planetData);
//         solarSystem.appendChild(planet);
//     });
// }

// createSolarSystem();

function createPlanet(planetData) {
    const geometry = new THREE.SphereGeometry(planetData.diameter / 100, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: planetData.color });
    const planet = new THREE.Mesh(geometry, material);
    planetData.position.set(planetData.distance * 10, 0, 0);
    planetData.name = planetData.name;
    scene.add(planet);
}

function createOrbit(planetData) {
    const orbitGeometry = new THREE.CircleGeometry(planetData.distance * 10, 64);
    orbitGeometry.vertices.shift();
    const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
    orbit.rotation.x = Math.PI / 2;
    scene.add(orbit);
}

function createMoon(moonData, parentPlanet) {
    const geometry = new THREE.SphereGeometry(moonData.diameter / 100, 32, 32);
    const material = new THREE.MeshBasicMaterial({ map: });
    const moon = new THREE.Mesh(geometry, material);

    const x = moonData.distance * 10;
    const moonPosition = new THREE.Vector3(x, 0, 0);

    parentPlanet.add(moon);

    moon.position.copy(moonPosition);
}

// // Mercury
// function createMercury(planetData) {
//     const geometry = new THREE.SphereGeometry(planetData.diameter / 100, 32, 32);
//     const material = new THREE.MeshBasicMaterial({ color: planetData.color });
//     const planet = new THREE.Mesh(geometry, material);
//     planetData.position.set(planetData.distance * 10, 0, 0);
//     planetData.name = planetData.name;
//     scene.add(planet);
// }

// function createOrbit(planetData) {
//     const orbitGeometry = new THREE.CircleGeometry(planetData.distance * 10, 64);
//     orbitGeometry.vertices.shift();
//     const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
//     const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
//     orbit.rotation.x = Math.PI / 2;
//     scene.add(orbit);
// }

// function animateMercury() {
//     const planets = scene.children.filter((child) => child.name !== 'Mercury');
//     const delta = 0.005;
//     planets.forEach((planet) => {
//         planet.rotation.y += delta;
//     });
// }

// // Venus
// function createVenus(planetData) {
//     const geometry = new THREE.SphereGeometry(planetData.diameter / 100, 32, 32);
//     const material = new THREE.MeshBasicMaterial({ color: planetData.color });
//     const planet = new THREE.Mesh(geometry, material);
//     planetData.position.set(planetData.distance * 10, 0, 0);
//     planetData.name = planetData.name;
//     scene.add(planet);
// }

// function createOrbit(planetData) {
//     const orbitGeometry = new THREE.CircleGeometry(planetData.distance * 10, 64);
//     orbitGeometry.vertices.shift();
//     const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
//     const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
//     orbit.rotation.x = Math.PI / 2;
//     scene.add(orbit);
// }

// function animateVenus() {
//     const planets = scene.children.filter((child) => child.name !== 'Venus');
//     const delta = 0.005;
//     planets.forEach((planet) => {
//         planet.rotation.y += delta;
//     });
// }

// // Earth
// function createEarth(planetData) {
//     const geometry = new THREE.SphereGeometry(planetData.diameter / 100, 32, 32);
//     const material = new THREE.MeshBasicMaterial({ color: planetData.color });
//     const planet = new THREE.Mesh(geometry, material);
//     planetData.position.set(planetData.distance * 10, 0, 0);
//     planetData.name = planetData.name;
//     scene.add(planet);
// }

// function createOrbit(planetData) {
//     const orbitGeometry = new THREE.CircleGeometry(planetData.distance * 10, 64);
//     orbitGeometry.vertices.shift();
//     const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
//     const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
//     orbit.rotation.x = Math.PI / 2;
//     scene.add(orbit);
// }

// function animateEarth() {
//     const planets = scene.children.filter((child) => child.name !== 'Earth');
//     const delta = 0.005;
//     planets.forEach((planet) => {
//         planet.rotation.y += delta;
//     });
// }

// // Mars
// function createMars(planetData) {
//     const geometry = new THREE.SphereGeometry(planetData.diameter / 100, 32, 32);
//     const material = new THREE.MeshBasicMaterial({ color: planetData.color });
//     const planet = new THREE.Mesh(geometry, material);
//     planetData.position.set(planetData.distance * 10, 0, 0);
//     planetData.name = planetData.name;
//     scene.add(planet);
// }

// function createOrbit(planetData) {
//     const orbitGeometry = new THREE.CircleGeometry(planetData.distance * 10, 64);
//     orbitGeometry.vertices.shift();
//     const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
//     const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
//     orbit.rotation.x = Math.PI / 2;
//     scene.add(orbit);
// }

// function animateMars() {
//     const planets = scene.children.filter((child) => child.name !== 'Mars');
//     const delta = 0.005;
//     planets.forEach((planet) => {
//         planet.rotation.y += delta;
//     });
// }

// // Jupiter
// function createJupiter(planetData) {
//     const geometry = new THREE.SphereGeometry(planetData.diameter / 100, 32, 32);
//     const material = new THREE.MeshBasicMaterial({ color: planetData.color });
//     const planet = new THREE.Mesh(geometry, material);
//     planetData.position.set(planetData.distance * 10, 0, 0);
//     planetData.name = planetData.name;
//     scene.add(planet);
// }

// function createOrbit(planetData) {
//     const orbitGeometry = new THREE.CircleGeometry(planetData.distance * 10, 64);
//     orbitGeometry.vertices.shift();
//     const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
//     const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
//     orbit.rotation.x = Math.PI / 2;
//     scene.add(orbit);
// }

// function animateJupiter() {
//     const planets = scene.children.filter((child) => child.name !== 'Jupiter');
//     const delta = 0.005;
//     planets.forEach((planet) => {
//         planet.rotation.y += delta;
//     });
// }

// // Saturn
// function createSaturn(planetData) {
//     const geometry = new THREE.SphereGeometry(planetData.diameter / 100, 32, 32);
//     const material = new THREE.MeshBasicMaterial({ color: planetData.color });
//     const planet = new THREE.Mesh(geometry, material);
//     planetData.position.set(planetData.distance * 10, 0, 0);
//     planetData.name = planetData.name;
//     scene.add(planet);
// }

// function createOrbit(planetData) {
//     const orbitGeometry = new THREE.CircleGeometry(planetData.distance * 10, 64);
//     orbitGeometry.vertices.shift();
//     const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
//     const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
//     orbit.rotation.x = Math.PI / 2;
//     scene.add(orbit);
// }

// function animateSaturn() {
//     const planets = scene.children.filter((child) => child.name !== 'Saturn');
//     const delta = 0.005;
//     planets.forEach((planet) => {
//         planet.rotation.y += delta;
//     });
// }

// // Uranus
// function createUranus(planetData) {
//     const geometry = new THREE.SphereGeometry(planetData.diameter / 100, 32, 32);
//     const material = new THREE.MeshBasicMaterial({ color: planetData.color });
//     const planet = new THREE.Mesh(geometry, material);
//     planetData.position.set(planetData.distance * 10, 0, 0);
//     planetData.name = planetData.name;
//     scene.add(planet);
// }

// function createOrbit(planetData) {
//     const orbitGeometry = new THREE.CircleGeometry(planetData.distance * 10, 64);
//     orbitGeometry.vertices.shift();
//     const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
//     const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
//     orbit.rotation.x = Math.PI / 2;
//     scene.add(orbit);
// }

// function animateUranus() {
//     const planets = scene.children.filter((child) => child.name !== 'Uranus');
//     const delta = 0.005;
//     planets.forEach((planet) => {
//         planet.rotation.y += delta;
//     });
// }

// // Neptune
// function createNeptune(planetData) {
//     const geometry = new THREE.SphereGeometry(planetData.diameter / 100, 32, 32);
//     const material = new THREE.MeshBasicMaterial({ color: planetData.color });
//     const planet = new THREE.Mesh(geometry, material);
//     planetData.position.set(planetData.distance * 10, 0, 0);
//     planetData.name = planetData.name;
//     scene.add(planet);
// }

// function createOrbit(planetData) {
//     const orbitGeometry = new THREE.CircleGeometry(planetData.distance * 10, 64);
//     orbitGeometry.vertices.shift();
//     const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
//     const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
//     orbit.rotation.x = Math.PI / 2;
//     scene.add(orbit);
// }

// function animateNeptune() {
//     const planets = scene.children.filter((child) => child.name !== 'Neptune');
//     const delta = 0.005;
//     planets.forEach((planet) => {
//         planet.rotation.y += delta;
//     });
// }

// // Pluto
// function createPluto(planetData) {
//     const geometry = new THREE.SphereGeometry(planetData.diameter / 100, 32, 32);
//     const material = new THREE.MeshBasicMaterial({ color: planetData.color });
//     const planet = new THREE.Mesh(geometry, material);
//     planetData.position.set(planetData.distance * 10, 0, 0);
//     planetData.name = planetData.name;
//     scene.add(planet);
// }

// function createOrbit(planetData) {
//     const orbitGeometry = new THREE.CircleGeometry(planetData.distance * 10, 64);
//     orbitGeometry.vertices.shift();
//     const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
//     const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
//     orbit.rotation.x = Math.PI / 2;
//     scene.add(orbit);
// }

// function animatePluto() {
//     const planets = scene.children.filter((child) => child.name !== 'Pluto');
//     const delta = 0.005;
//     planets.forEach((planet) => {
//         planet.rotation.y += delta;
//     });
// }

function animate() {
    requestAnimationFrame(animate);

    scene.children.forEach((child) => {
        if (child.name !== 'Sun') {
            child.rotation.y += 0.005;
        }
    });
    renderer.render(scene, camera);
};

camera.position.set(0, 0, 1000);
camera.lookAt(0, 0, 0);

animate();