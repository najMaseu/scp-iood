import { GameLoopService } from "@application/GameLoop/GameLoopService";
import { onMount } from "solid-js";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";
import { SceneSetup } from "../../three/SceneSetup";

export const Canvas = () => {
  let canvasElement: HTMLCanvasElement;
  onMount(() => {
    const { camera, renderer, scene } = new SceneSetup(canvasElement);
    const { loop, addToLoop } = new GameLoopService();

    // const boxMesh = new THREE.Mesh(
    //   new THREE.BoxGeometry(16, 16, 16),
    //   new THREE.MeshNormalMaterial()
    // );

    // scene.add(boxMesh);

    // const controls = new OrbitControls(camera, renderer.domElement);
    const stats = Stats();
    document.body.appendChild(stats.dom);

    // addToLoop(() => controls.update());
    addToLoop(() => stats.update());
    addToLoop(() => renderer.render(scene, camera));
    // addToLoop(() => {
    //   boxMesh.rotation.x += 0.01;
    //   boxMesh.rotation.y += 0.01;
    // });

    loop();
  });

  return <canvas ref={(el) => (canvasElement = el)} id="threeCanvas" />;
};
