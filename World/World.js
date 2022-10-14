import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';
import { loadHuman } from './components/humans/human.js';

import { createControls } from './systems/controls.js'
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

//Module scoped variables
let camera;
let renderer;
let scene;
let loop;
//let controls;

class World {
	constructor(container) {
		camera = createCamera();
		scene = createScene();
		renderer = createRenderer();
		container.append(renderer.domElement);

 		
 		const controls = createControls(camera, renderer.domElement);

		loop = new Loop(camera, scene, renderer);
		//container.append(renderer.domElement);

		const { mainLight } = createLights();
		
		

		scene.add(mainLight);



		const resizer = new Resizer(container, camera, renderer);
		
	}

	async init() {
		const { human } = await loadHuman();

		scene.add(human);
	}

	render() {
		renderer.render(scene, camera);
	}

	start() {
		loop.start();
	}

	stop() {
		loop.stop();
	}
}

export { World };