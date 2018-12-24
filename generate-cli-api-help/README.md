# What's this?

Given a TypeScript interface be able to:

 * print given interface describing each property using TS typing info and jsdoc
 * Supports different output formats (markdown, JavaScript string, etc)

 <!-- * a markdown section detailing CLI Usage information
 * a markdown section detailing JavaScript API Usage information  -->

Returned text can be used in different parts of user's program, for example, README.md, showHelp() function of CLI, etc. Ideal for small tools that defines its "Options" object in a TS interface. 

Ideally, projects should use this tool at build time to build the help strings assets. Using the tool dynamically is possible but but take into account that : this project depends on typescript which is big. If user's app aim is to be small (and perhaps support browser) then using the API directly is a bad idea. 

# Usage Node.js API

```sh
npm install --save generate-cli-api-help
```

```ts
import {printHelp} from 'generate-cli-api-help'

const fileWithInterface = 'src/types.ts' // the .ts file containing the Config / Options interface from which to extract the help usage information
const interfaceName = 'MyAwesomeAppOptions' // The name of the interface with usage / config options
const config = {fileWithInterface, interfaceName}
const addMeToYourCode = printHelp(config)
```


# Usage CLI

```sh
npm install -g generate-cli-api-help

generate-cli-api-help --input src/types.ts --interfaceName Options
```



# TODO

 * support inheritance
 
 * move to its own repo 

 * object validation : given a config object and interface validate the input. Validate Optionals. user programs could use us like: 
 
  const args = .... // minimist/yargs like object. 
  
  validate({input: file.ts, interfaceName: 'Config', validate: args})

Validate optionals but also types and non existent properties ?