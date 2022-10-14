import { 
	DirectionalLight,
	AmbientLight,
	HemisphereLight,
 } from '../../node_modules/three/build/three.module.js';

function createLights() {
	//create ambient light
	
	//create the directional light
	const mainLight = new DirectionalLight('white', 8); 
	//create hemisphere light

	//move the light
	mainLight.position.set(10,7,7);


	return { mainLight };
}

export { createLights };