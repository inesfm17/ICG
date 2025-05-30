export function createMockupWallFrames(sceneGraph) {
    console.log("✅ mockups.js carregado");

    const textureLoader = new THREE.TextureLoader();

    textureLoader.load('mockup1.png', (texture) => {
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const plane = new THREE.Mesh(new THREE.PlaneGeometry(6, 6), material);
        plane.position.set(0, 3, -20); // Atrás do avatar
        sceneGraph.add(plane);
    }, undefined, (err) => {
        console.error("❌ Erro ao carregar imagem:", err);
    });
}
