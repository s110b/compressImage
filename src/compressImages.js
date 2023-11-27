const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function compressImages(inputPath, outputPath, backupPath) {

    // 检查 input 目录是否存在
    if (!fs.existsSync(inputPath)) {
        console.log(`Input directory does not exist: ${inputPath}`);
        return;
    }

    if (!fs.existsSync(backupPath)) {
        console.log(`backup directory does not exist: ${backupPath}`);
        return;
    }
    if (!fs.existsSync(outputPath)) {
        console.log(`output directory does not exist: ${outputPath}`);
        return;
    }
    // 获取目录中的文件列表
    const files = fs.readdirSync(inputPath);
    // 检查目录是否为空
    if (files.length === 0) {
        console.log(`Input directory is empty: ${inputPath}`);
        return;
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


                // 使用 Docker 运行 Squoosh CLI 压缩图像
                execSync(`docker run --rm -v ${backupPath}:/input -v ${outputPath}:/output   simage squoosh-cli --webp auto /input/${file} -d /output`);
                console.log(`Compressed and backed up: ${file}`);
            } catch (error) {
                console.error(`Failed to process ${file}: ${error.message}`);
            }
        }
    });
    console.log('Image compression and backup completed successfully.');
}

module.exports = compressImages;
