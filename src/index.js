const core = require('@actions/core');
const compressImages = require('./compressImages');

try {
    // 获取输入参数
    const inputPath = core.getInput('path');
    const outputPath = core.getInput('output-path');
    const backupPath = core.getInput('backup-path');

    // 调用 compressImages 函数
    compressImages(inputPath, outputPath, backupPath);
} catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
}
