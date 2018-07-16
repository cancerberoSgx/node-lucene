// adapted from  https://github.com/villadora/java-class-parser/blob/master/index.js

import { JavaAst, ClassDeclaration, Scope } from './types';

export function parse(output: string): JavaAst  {
  const rs: {[k: string]: ClassDeclaration} = {};
  let or = classRegex.exec(output);

  while(or) {
    const scope = (or[1] || 'package') as Scope;
    const describe = or[2];
    const type = or[3];
    const className = or[4];
    const exts = or[5];
    const impls = or[6];
    const classBody = or[7].split('\n').filter(Boolean).map(trimStr);
    const clz: ClassDeclaration = {
      name: className,
      type: type,
      scope: scope,
      describe: (describe || '').trim(),
      'extends': exts ? exts.split(',').map(trimStr) : [],
      'implements': impls ? impls.split(',').map(trimStr) : [],
      constructors: [],
      fields: [],
      methods: []
    };

    classBody.forEach(function(member) {
      let signature = methodRegex.exec(member);
      if (!signature)  {
        signature = fieldRegex.exec(member);
        if (signature) {
          const scope = signature[1] || 'package';
          const describe = (signature[2] || '').trim();
          const type = signature[3];
          const name = signature[4];
          clz.fields.push({
            name: name,
            scope: scope,
            type: type,
            describe: describe
          });
        }

        return;
      }

      const scope = signature[1] || 'package';
      const describe = (signature[2] || '').trim();
      const retVal = signature[3];
      const name = signature[4];
      const args = signature[5];
      if (retVal == undefined) { // no ret, constructor
        const cons = {
          scope: scope,
          name: name,
          describe: describe,
          args: args ? args.split(',').map(trimStr) : []
        };

        clz.constructors.push(cons);
      }else {
        const m = {
          scope: scope,
          describe: describe,
          ret: retVal,
          name: name,
          args: args ? args.split(',').map(trimStr) : []
        };

        clz.methods.push(m);
      }
    });

    rs[className] = clz;

    or = classRegex.exec(output);
  }

  return rs;
}

const typeRegex = '[a-zA-Z0-9\\.<>\\?\\$\\[\\]]+';

const classRegex = new RegExp('(?:(public|private|protected) )?((?:(?:static|abstract|final) ?)*)(class|interface) (' + typeRegex + ') (?:extends ((?:' + typeRegex +'),?)+ )?(?:implements ((?:[a-zA-Z0-9\\.<>\\?\\$])+,?)+ )?{([^}]+)}', 'gm');
//                             access modifier              return value             name
const methodRegex = new RegExp('(?:(public|private|protected) )?((?:static|abstract|final) ?)*(?:(' + typeRegex + ') )?([a-zA-Z]+)\\(([^\\)]*)\\)');

const fieldRegex = new RegExp('(?:(public|private|protected) )?((?:(?:static|abstract|final) ?)*)(' + typeRegex + ') ([a-zA-Z0-9]+)');

function trimStr(str: string): string{
  return str.trim();
}