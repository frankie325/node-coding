// 函数: asymmetricEncrypt
// 函数: asymmetricDecrypt

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

/**
 * 生成 RSA 密钥对并保存到文件系统。
 *
 * @param {number} [keySize=2048] - 密钥的大小（以位为单位）。
 * @param {string} [publicKeyPath='keys/public.pem'] - 公钥的保存路径。
 * @param {string} [privateKeyPath='keys/private.pem'] - 私钥的保存路径。
 */
function generateKeyPair(keySize = 2048, publicKeyPath = 'keys/public.pem', privateKeyPath = 'keys/private.pem') {
    // 生成密钥对
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: keySize,
        publicKeyEncoding: {
            type: 'pkcs1',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs1',
            format: 'pem'
        }
    });

    // 创建保存密钥的目录（如果不存在）
    const dir = path.dirname(publicKeyPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    // 将公钥和私钥写入文件
    fs.writeFileSync(publicKeyPath, publicKey);
    fs.writeFileSync(privateKeyPath, privateKey);

    console.log('RSA 密钥对已生成并保存：');
    console.log('公钥路径:', publicKeyPath);
    console.log('私钥路径:', privateKeyPath);
}

/**
 * 使用公钥进行非对称加密。
 *
 * @param {string} publicKeyPath - 公钥文件的路径。
 * @param {string} plaintext - 要加密的明文。
 * @returns {string} - 加密后的密文，采用 base64 编码。
 */
function asymmetricEncrypt(publicKeyPath, plaintext) {
    // 读取公钥
    const publicKey = fs.readFileSync(publicKeyPath, 'utf8');

    // 使用公钥加密数据
    const encryptedBuffer = crypto.publicEncrypt(publicKey, Buffer.from(plaintext, 'utf8'));

    return encryptedBuffer.toString('base64');
}

/**
 * 使用私钥进行非对称解密。
 *
 * @param {string} privateKeyPath - 私钥文件的路径。
 * @param {string} ciphertext - 要解密的密文，采用 base64 编码。
 * @returns {string} - 解密后的明文。
 */
function asymmetricDecrypt(privateKeyPath, ciphertext) {
    // 读取私钥
    const privateKey = fs.readFileSync(privateKeyPath, 'utf8');

    // 使用私钥解密数据
    const decryptedBuffer = crypto.privateDecrypt(privateKey, Buffer.from(ciphertext, 'base64'));

    return decryptedBuffer.toString('utf8');
}

// 示例用法：



// 定义公钥和私钥的路径
const publicKeyPath = path.resolve(__dirname, 'keys/public.pem');
const privateKeyPath = path.resolve(__dirname, 'keys/private.pem');

// 生成 RSA 密钥对（仅需运行一次）
generateKeyPair(2048, publicKeyPath, privateKeyPath);

// 要加密的消息
const message = '这是要进行非对称加密和解密的消息';

// 加密
const encryptedMessage = asymmetricEncrypt(publicKeyPath, message);
console.log('加密后的消息:', encryptedMessage);

// 解密
const decryptedMessage = asymmetricDecrypt(privateKeyPath, encryptedMessage);
console.log('解密后的消息:', decryptedMessage);