/**
 * This module covers how to encryt text using the crypto APi in node.js ..  We have other
algorithms apart from the 'aes192' am using, you can visit the offical node.js
website for other algorithms https://nodejs.org/api/crypto.html

Author of this module: olohundare Kayode
Date Created: May 16 2019
licese: ISC
 */


// Encrypt text with node js 
const crypto = require('crypto');
const cipher = crypto.createCipher('aes192', 'a password');
let encrypted = '';
cipher.on('readable', () => {
    const data = cipher.read();
    if (data) {
        encrypted += data.toString('hex');
        decrypt(data)
    }
});
cipher.on('end', () => {
    console.log(encrypted)
});
cipher.write('some clear text data');
cipher.end();

// Decrypt text with node js
function decrypt(data) {
    const decipher = crypto.createDecipher('aes192', 'a password');
    let decrypted = '';
    decipher.on('readable', () => {
        const data = decipher.read();
        if (data) decrypted += data.toString('utf8');
    });
    decipher.on('end', () => {
        console.log(decrypted);
    });
    decipher.write(data, 'hex');
    decipher.end();
}
