const fileSystem = require('fs');
const filePath = require('path');

const directoryPath = filePath.join(__dirname, 'Logs');

if (!fileSystem.existsSync(directoryPath)) {
    fileSystem.mkdirSync(directoryPath);
}

process.chdir(directoryPath);

for (let index = 0; index <= 9; index++) {
    const logFileName = `log${index}.txt`;
    fileSystem.writeFileSync(logFileName, `This is log file number ${index}`);
    console.log(logFileName);
}
