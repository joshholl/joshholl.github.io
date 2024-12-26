const { createECDH } = require('crypto');
const fs = require('fs')
const path = require('path');

const mergePath = (baseDir) => (subPath) => path.join(baseDir, subPath)
const mkLinks = (dir) => {
    return fs.readdirSync(dir)
    .map(mergePath(dir))
    .filter((filePath) => !fs.lstatSync(filePath).isDirectory())
    .map((filePath) => path.basename(filePath))
    .map((fileName) => "{{ relref . \"" + fileName +"\"}}")
    .join("\n");
}
const createIndex = (dir) => {
    const fileName = dir.split('/').pop()
    const text = `---\ntitle: ${fileName}\n---\n\n\{\{% children sort="title" %\}\}`
    fs.writeFileSync(path.join(dir, "_index.md"), text)
}
const readAllFolder = (dirMain) => {
    const readDirMain = fs.readdirSync(dirMain);
  
    const directories = readDirMain
        .map(mergePath(dirMain))
        .filter((filePath) => fs.lstatSync(filePath).isDirectory());

    directories.forEach((dir) => {
        const files = fs.readdirSync(dir).map(mergePath(dir))
        if(files.find((file) => file.endsWith("/_index.md"))) {
            console.log(`${dir} has an index`)
        } else {
            createIndex(dir)
        }
        readAllFolder(dir)
    })

  };

  readAllFolder('content')