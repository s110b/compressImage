const compressImages = require('./compressImages'); // 替换为您的 compressImages 文件的实际路径

// 定义测试路径
const inputPath = '../input';   // 替换为您的输入目录路径
const outputPath = '../output'; // 替换为您的输出目录路径
const backupPath = '../backup'; // 替换为您的备份目录路径

// 调用 compressImages 函数
compressImages(inputPath, outputPath, backupPath);
