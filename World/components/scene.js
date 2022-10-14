import { Color, Scene } from '../../node_modules/three/build/three.module.js';

function createScene() {
	const scene = new Scene();

	scene.background = new Color('gainsboro');

	return scene;
}

export { createScene }