import { AmbientLight, GridHelper, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
//@ts-ignore
import mapLol from `/assets/3d/Map/scene.gltf`;

export class SceneSetup {
  private _scene: Scene;

  private _camera: PerspectiveCamera;

  private _renderer: WebGLRenderer;

  private _ambientLight: AmbientLight;

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

    this.ambientLight = new AmbientLight(0xffffff, 0.5);

    this.camera.position.z = 0.1;
    this.camera.position.y =0.1;
    this.camera.position.x =0.1;

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.ambientLight.castShadow = true;
    this.scene.add(this.ambientLight);

    window.addEventListener("resize", () => this.onWindowResize(), false);
    this.loadAsset();




    const gridHelper = new GridHelper( 100, 100 );
    this.scene.add( gridHelper );


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

      gltf.scene.position.z = 15

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

  public get ambientLight(): AmbientLight {
    return this._ambientLight;
  }

  private set ambientLight(value: AmbientLight) {
    this._ambientLight = value;
  }
}
