const fileSystem = require('fs');
const filePath = require('path');

const directoryPath = filePath.join(__dirname, 'Logs');

if (fileSystem.existsSync(directoryPath)) {
    const logFiles = fileSystem.readdirSync(directoryPath);
    logFiles.slice(0, 10).forEach(file => {
        fileSystem.unlinkSync(filePath.join(directoryPath, file));
        console.log(`delete files...${file}`);
    });
    
    fileSystem.rmdirSync(directoryPath);
}
