
import { World } from './World/World.js'

// main function
async function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // create a new world
  const world = new World(container);

  //complete async tasks
  await world.init();
  //start the animation loop
  world.start();
}

// call main to start app
main().catch((err) => {
  console.error(err);
});



//** below is a reminder so i dont get screwed up with imports
//} from './node_modules/three/build/three.module.js';

