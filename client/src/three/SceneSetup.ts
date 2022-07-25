import {
  GridHelper,
  PerspectiveCamera,
  Scene,
  SpotLight,
  WebGLRenderer,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
//@ts-ignore
import mapLol from "/assets/3d/Map/scene.gltf";

export class SceneSetup {
  private _scene: Scene;

  private _camera: PerspectiveCamera;

  private _renderer: WebGLRenderer;

  private _spotLight: SpotLight;

  constructor(canvasElement: HTMLCanvasElement) {
    this.scene = new Scene();

    this.camera = new PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    this.renderer = new WebGLRenderer({
      canvas: canvasElement,
      antialias: true,
    });

    this.spotLight = new SpotLight(0xffffff, 10);
    this.spotLight.angle = 2;

    this.camera.position.z = 5;
    this.camera.position.y = 5;
    this.camera.position.x = 5;

    this.camera.rotation.y = -200;
    this.camera.rotation.x = 99;

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.spotLight.castShadow = true;
    this.scene.add(this.spotLight);

    window.addEventListener("resize", () => this.onWindowResize(), false);
    this.loadAsset();

    const gridHelper = new GridHelper(100, 100);
    this.scene.add(gridHelper);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  loadAsset() {
    const loader = new GLTFLoader();
    loader.load(mapLol, (gltf) => {
      gltf.scene.traverse((object) => {
        object.castShadow = true;
      });

      gltf.scene.position.z = 15;

      this.scene.add(gltf.scene);
    });
  }

  public get scene(): Scene {
    return this._scene;
  }

  private set scene(value: Scene) {
    this._scene = value;
  }

  public get camera(): PerspectiveCamera {
    return this._camera;
  }

  private set camera(value: PerspectiveCamera) {
    this._camera = value;
  }

  public get renderer(): WebGLRenderer {
    return this._renderer;
  }

  private set renderer(value: WebGLRenderer) {
    this._renderer = value;
  }

  public get spotLight(): SpotLight {
    return this._spotLight;
  }

  private set spotLight(value: SpotLight) {
    this._spotLight = value;
  }
}
