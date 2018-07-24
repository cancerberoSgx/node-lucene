import { join } from 'path';

const Jasmine = require('jasmine')

var jasmineRunner = new Jasmine();

// var specs;

// if (args.specs)
// {
// 	specs = _.map(args.specs.split(','), function (spec) {return path.join(__dirname, spec)} );
// }
// else
// {
// 	specs = glob(path.join(__dirname, '*-spec.js'));
// }

jasmineRunner.specFiles = [join(__dirname, 'interfaces.test')];
jasmineRunner.execute();


