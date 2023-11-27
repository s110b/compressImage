const core = require('@actions/core');
const compressImages = require('./compressImages');

try {
    // 获取输入参数
    // const inputPath = core.getInput('input');
    // const outputPath = core.getInput('output');
    // const backupPath = core.getInput('backup');

    const inputPath = process.env.INPUT;
    const outputPath = process.env.OUTPUT;
    const backupPath = process.env.BACKUP;

    console.log(`Input Path: ${inputPath}`);
    console.log(`Output Path: ${outputPath}`);
    console.log(`Backup Path: ${backupPath}`);

    // 调用 compressImages 函数
    // 调用 compressImages 函数
    compressImages(inputPath, outputPath, backupPath);
} catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
}
