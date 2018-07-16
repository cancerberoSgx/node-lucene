var typeRegex = '[a-zA-Z0-9\\.<>\\?\\$\\[\\]]+';


var classRegex = new RegExp('(?:(public|private|protected) )?((?:(?:static|abstract|final) ?)*)(class|interface) (' + typeRegex + ') (?:extends ((?:' + typeRegex +'),?)+ )?(?:implements ((?:[a-zA-Z0-9\\.<>\\?\\$])+,?)+ )?{([^}]+)}', 'gm');
//                             access modifier              return value             name
var methodRegex = new RegExp('(?:(public|private|protected) )?((?:static|abstract|final) ?)*(?:(' + typeRegex + ') )?([a-zA-Z]+)\\(([^\\)]*)\\)');


var fieldRegex = new RegExp('(?:(public|private|protected) )?((?:(?:static|abstract|final) ?)*)(' + typeRegex + ') ([a-zA-Z0-9]+)');

function trimStr(str) {
  return str.trim();
}

function outputParser(output) {
  var rs = {};
  var or = classRegex.exec(output);

  while(or) {
    var scope = or[1] || 'package';
    var describe = or[2];
    var type = or[3];
    var className = or[4];
    var exts = or[5];
    var impls = or[6];
    var classBody = or[7].split('\n').filter(Boolean).map(trimStr);
    var clz = {
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
      var signature = methodRegex.exec(member);
      if (!signature)  {
        signature = fieldRegex.exec(member);
        if (signature) {
          var scope = signature[1] || 'package';
          var describe = (signature[2] || '').trim();
          var type = signature[3];
          var name = signature[4];
          clz.fields.push({
            name: name,
            scope: scope,
            type: type,
            describe: describe
          });
        }

        return;
      }

      var scope = signature[1] || 'package';
      var describe = (signature[2] || '').trim();
      var retVal = signature[3];
      var name = signature[4];
      var args = signature[5];
      if (retVal == undefined) { // no ret, constructor
        var cons = {
          scope: scope,
          name: name,
          describe: describe,
          args: args ? args.split(',').map(trimStr) : []
        };

        clz.constructors.push(cons);
      }else {
        var m = {
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


const output = `
public class org.apache.lucene.store.RAMDirectory extends org.apache.lucene.store.BaseDirectory implements org.apache.lucene.util.Accountable {
  protected final java.util.Map<java.lang.String, org.apache.lucene.store.RAMFile> fileMap;
    descriptor: Ljava/util/Map;
  protected final java.util.concurrent.atomic.AtomicLong sizeInBytes;
    descriptor: Ljava/util/concurrent/atomic/AtomicLong;
  public org.apache.lucene.store.RAMDirectory();
    descriptor: ()V

  public org.apache.lucene.store.RAMDirectory(org.apache.lucene.store.LockFactory);
    descriptor: (Lorg/apache/lucene/store/LockFactory;)V

  public org.apache.lucene.store.RAMDirectory(org.apache.lucene.store.FSDirectory, org.apache.lucene.store.IOContext) throws java.io.IOException;
    descriptor: (Lorg/apache/lucene/store/FSDirectory;Lorg/apache/lucene/store/IOContext;)V

  public final java.lang.String[] listAll();
    descriptor: ()[Ljava/lang/String;

  public final boolean fileNameExists(java.lang.String);
    descriptor: (Ljava/lang/String;)Z

  public final long fileLength(java.lang.String) throws java.io.IOException;
    descriptor: (Ljava/lang/String;)J

  public final long ramBytesUsed();
    descriptor: ()J

  public java.util.Collection<org.apache.lucene.util.Accountable> getChildResources();
    descriptor: ()Ljava/util/Collection;

  public void deleteFile(java.lang.String) throws java.io.IOException;
    descriptor: (Ljava/lang/String;)V

  public org.apache.lucene.store.IndexOutput createOutput(java.lang.String, org.apache.lucene.store.IOContext) throws java.io.IOException;
    descriptor: (Ljava/lang/String;Lorg/apache/lucene/store/IOContext;)Lorg/apache/lucene/store/IndexOutput;

  public org.apache.lucene.store.IndexOutput createTempOutput(java.lang.String, java.lang.String, org.apache.lucene.store.IOContext) throws java.io.IOException;
    descriptor: (Ljava/lang/String;Ljava/lang/String;Lorg/apache/lucene/store/IOContext;)Lorg/apache/lucene/store/IndexOutput;

  protected org.apache.lucene.store.RAMFile newRAMFile();
    descriptor: ()Lorg/apache/lucene/store/RAMFile;

  public void sync(java.util.Collection<java.lang.String>) throws java.io.IOException;
    descriptor: (Ljava/util/Collection;)V

  public void rename(java.lang.String, java.lang.String) throws java.io.IOException;
    descriptor: (Ljava/lang/String;Ljava/lang/String;)V

  public void syncMetaData() throws java.io.IOException;
    descriptor: ()V

  public org.apache.lucene.store.IndexInput openInput(java.lang.String, org.apache.lucene.store.IOContext) throws java.io.IOException;
    descriptor: (Ljava/lang/String;Lorg/apache/lucene/store/IOContext;)Lorg/apache/lucene/store/IndexInput;

  public void close();
    descriptor: ()V
}

`

require('fs').writeFileSync('parse-javap-output.json', JSON.stringify(outputParser(output), 0, 2))
// console.log(outputParser(output));
