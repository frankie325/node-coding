const crypto = require('crypto');

/**
 * 使用对称加密算法加密文本。
 *
 * @param {string} algorithm - 加密算法，例如 'aes-256-cbc'。
 * @param {Buffer} key - 加密密钥。长度应与所选算法相匹配。
 * @param {Buffer} iv - 初始化向量。长度应与所选算法相匹配。
 * @param {string} plaintext - 要加密的明文。
 * @returns {string} - 加密后的文本，采用十六进制编码。
 */
function symmetricEncrypt(algorithm, key, iv, plaintext) {
    // 创建加密器对象
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    
    // 更新加密器，处理明文
    let encrypted = cipher.update(plaintext, 'utf8', 'hex');
    
    // 获取最终加密数据
    encrypted += cipher.final('hex');
    
    return encrypted;
}

/**
 * 使用对称加密算法解密文本。
 *
 * @param {string} algorithm - 解密算法，应与加密时使用的算法相同。
 * @param {Buffer} key - 解密密钥，应与加密时使用的密钥相同。
 * @param {Buffer} iv - 初始化向量，应与加密时使用的初始化向量相同。
 * @param {string} ciphertext - 要解密的密文，采用十六进制编码。
 * @returns {string} - 解密后的明文。
 */
function symmetricDecrypt(algorithm, key, iv, ciphertext) {
    // 创建解密器对象
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    
    // 更新解密器，处理密文
    let decrypted = decipher.update(ciphertext, 'hex', 'utf8');
    
    // 获取最终解密数据
    decrypted += decipher.final('utf8');
    
    return decrypted;
}

// 示例用法：
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // 256 位密钥
const iv = crypto.randomBytes(16);  // 128 位初始化向量
const message = '这是要加密和解密的消息';

// 加密
const encryptedMessage = symmetricEncrypt(algorithm, key, iv, message);
console.log('加密后的消息:', encryptedMessage);

// 解密
const decryptedMessage = symmetricDecrypt(algorithm, key, iv, encryptedMessage);
console.log('解密后的消息:', decryptedMessage);

