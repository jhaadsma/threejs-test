import { GLTFLoader } from '../../../node_modules/three/examples/jsm/loaders/GLTFLoader.js'

import { setupModel } from './setupModels.js';

async function loadHuman() {
	const loader = new GLTFLoader();

	const humanData = await loader.loadAsync('../../../images/testman.glb');

	console.log('human load', humanData);

	const human = setupModel(humanData);
	human.position.set(0, 0, 0);

	return { human };
}

export { loadHuman };