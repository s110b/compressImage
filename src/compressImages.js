const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function compressImages(inputPath, outputPath, backupPath) {
    if (!fs.existsSync(backupPath)){
        fs.mkdirSync(backupPath, { recursive: true });
    }

    const supportedFormats = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.tiff', '.gif'];

    fs.readdirSync(inputPath).forEach(file => {
        const ext = path.extname(file).toLowerCase();
        if (supportedFormats.includes(ext)) {
            try {
                const inputFile = path.join(inputPath, file);
                const outputFile = path.join(outputPath, file);
                const backupFile = path.join(backupPath, file);

                // 移动原始文件到备份目录
                fs.renameSync(inputFile, backupFile);

                // 使用 Squoosh CLI 压缩图像
                execSync(`npx @squoosh/cli --webp auto  "${backupFile}"  --output-dir "${outputPath}"`);

                console.log(`Compressed and backed up: ${file}`);
            } catch (error) {
                console.error(`Failed to process ${file}: ${error.message}`);
            }
        }
    });
    console.log('Image compression and backup completed successfully.');
}

module.exports = compressImages;