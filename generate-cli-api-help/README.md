given a TypeScript interface it will generate: 

 * a function printing usage CLI Usage information
 * a markdown section detailing CLI Usage information
 * a markdown section detailing JavaScript API Usage information 

Usage: 

```ts
import {printHelp} from 'generate-cli-api-help'

const fileWithInterface = 'src/types.ts' // the .ts file containing the Config / Options interface from which to extract the help usage information
const interfaceName = 'MyAwesomeAppOptions' // The name of the interface with usage / config options

const config = {fileWithInterface, interfaceName}

const addMeToYourCode = printHelp(config)


```