// 函数: createHashValue

const crypto = require('crypto');

/**
 * 使用指定的哈希算法生成输入文本的哈希值。
 *
 * @param {string} algorithm - 哈希算法，例如 'sha256'、'sha512'。
 * @param {string} input - 要进行哈希处理的输入文本。
 * @returns {string} - 生成的哈希值，采用十六进制编码。
 */
function createHashValue(algorithm, input) {
    // 创建哈希对象
    const hash = crypto.createHash(algorithm);
    
    // 更新哈希对象，添加输入数据
    hash.update(input);
    
    // 生成哈希值，并以十六进制字符串形式返回
    return hash.digest('hex');
}

// 示例用法：
const algorithm = 'sha256';
const data = '这是要生成哈希值的字符串';

const hashValue = createHashValue(algorithm, data);
console.log(`算法: ${algorithm}`);
console.log(`输入数据: ${data}`);
console.log(`生成的哈希值: ${hashValue}`);