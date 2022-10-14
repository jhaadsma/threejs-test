import { Clock } from '../../node_modules/three/build/three.module.js';

const clock = new Clock();

class Loop {
	constructor(camera, scene, renderer) {
		this.camera = camera;
		this.scene = scene;
		this.renderer = renderer;
		this.updatables = [];
	}

	start() {
		this.renderer.setAnimationLoop(() => {
			//tell every animated object to tick forward one frame
			this.tick();
			//render a frame
			this.renderer.render(this.scene, this.camera);
		});
	}

	stop() {
		this.renderer.setAnimationLoop(null);
	}
	tick() {

		//only call the getDelta function once per frame
		const delta = clock.getDelta();
		for (const object of this.updatables) {
			object.tick(delta);
		}
		//code to update animation will go here
	}
}

export { Loop };