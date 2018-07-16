// // old parsed of javap output - deprecated by javap-json sibling project
// // adapted from  https://github.com/villadora/java-class-parser/blob/master/index.js

// import { JavaAst, ClassDeclaration, Scope, Config } from '../types';

// /**
//  * Returns a simplified AST structure of given javap output. See estreeParser for ast compatible with https://github.com/estree/estree
//  * @param input stdout of running javap program as it is
//  */
// export function parse(input: string): JavaAst  {
//   const rs: {[k: string]: ClassDeclaration} = {};
//   let or = classRegex.exec(input);

//   while(or) {
//     const scope = (or[1] || 'package') as Scope;
//     const modifiers = or[2];
//     const type = or[3] as any;
//     let {name, typeParameters} = parseName(or[4]);
//     // const className = or[4];
//     const exts = or[5];
//     const impls = or[6];
//     const classBody = or[7].split('\n').filter(Boolean).map(trimStr);
//     const clz: ClassDeclaration = {
//       name,
//       type,
//       scope,
//       modifiers: (modifiers || '').trim(),
//       'extends': exts ? exts.split(',').map(trimStr) : [],
//       'implements': impls ? impls.split(',').map(trimStr) : [],
//       constructors: [],
//       fields: [],
//       methods: [],
//       typeParameters
//     };

//     classBody.forEach(function(member) {
//       let signature = methodRegex.exec(member);
//       if (!signature)  {
//         signature = fieldRegex.exec(member);
//         if (signature) {
//           const scope = signature[1] || 'package';
//           const modifiers = (signature[2] || '').trim();
//           const type = signature[3];
//           let {name, typeParameters} = parseName(signature[4]);
          
//           clz.fields.push({
//             name,
//             scope,
//             type,
//             modifiers,
//             typeParameters
//           });
//         }

//         return;
//       }

//       const scope = signature[1] || 'package';
//       const modifiers = (signature[2] || '').trim();
//       const retVal = signature[3];
//       // const name = signature[4];
//       let {name, typeParameters} = parseName(signature[4]);
//       const args = signature[5];
//       if (retVal == undefined) { // no ret, constructor
//         const cons = {
//           scope,
//           name,
//           modifiers,
//           type,
//           typeParameters,
//           args: args ? args.split(',').map(trimStr) : []
//         };

//         clz.constructors.push(cons);
//       }else {

//         const m = {
//           scope: scope,
//           modifiers: modifiers,
//           ret: retVal,
//           type,
//           name,
//           args: args ? args.split(',').map(trimStr) : [],
//           typeParameters
//         };

//         clz.methods.push(m);
//       }
//     });

//     rs[name] = clz;

//     or = classRegex.exec(input);
//   }

//   return rs;
// }

// function parseName(astName: string): {name: string, typeParameters: string}{
//   let name = astName, typeParameters: string
//   if(name.endsWith('>')){
//     //Heads up : typeParameters is just a string like <A, B, B?extends Foo> and not string[] because is hard to parse
//     typeParameters = astName.substring(astName.lastIndexOf('<'), astName.length)
//     name = astName.substring(0,astName.lastIndexOf('<')-1)
//   }
//   return {name, typeParameters}
// }

// const typeRegex = '[a-zA-Z0-9\\.<>\\?\\$\\[\\]]+';

// const classRegex = new RegExp('(?:(public|private|protected) )?((?:(?:static|abstract|final) ?)*)(class|interface) (' + typeRegex + ') (?:extends ((?:' + typeRegex +'),?)+ )?(?:implements ((?:[a-zA-Z0-9\\.<>\\?\\$])+,?)+ )?{([^}]+)}', 'gm');
// //                             access modifier              return value             name
// const methodRegex = new RegExp('(?:(public|private|protected) )?((?:static|abstract|final) ?)*(?:(' + typeRegex + ') )?([a-zA-Z]+)\\(([^\\)]*)\\)');

// const fieldRegex = new RegExp('(?:(public|private|protected) )?((?:(?:static|abstract|final) ?)*)(' + typeRegex + ') ([a-zA-Z0-9]+)');

// function trimStr(str: string): string{
//   return str.trim();
// }