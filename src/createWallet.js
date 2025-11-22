// src/createWallet.js
const { createWallet } = require('./walletService');

const wallet = createWallet();

console.log("Carteira criada com sucesso!");
console.log("Rede: ", wallet.network);
console.log("Path: ", wallet.path);
console.log("Endereço BTC: ", wallet.address);
console.log("Chave Privada WIF: ", wallet.wif);
console.log("Mnemonic: ", wallet.mnemonic);
