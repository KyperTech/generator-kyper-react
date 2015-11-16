/** Matter Singleton
 */

import {merge} from 'lodash';
import Matter from 'kyper-matter';

//Default configuration options
let defaultOptions = {
};

let instance = null;
class MatterInstance {
	constructor(appName, options) {
		if (!instance) {
      instance = new Matter(appName, options);
    }
		return instance;
	}
}

//Create singleton instance of Matter using project name
let matter = new MatterInstance('<% name %>', defaultOptions);

export default matter;
