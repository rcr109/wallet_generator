// src/walletService.js
const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

// para usar a rede oficial da bitcoin, use: bitcoin.networks.bitcoin
// ATUAL: testnet
const network = bitcoin.networks.testnet;

// o primeiro 1 abaixo indica que é testnet, para mainnet seria 0
const path = `m/49'/1'/0'/0`; 

function createWallet() {
  // criando a mnemonic aleatória para a seed
  const mnemonic = bip39.generateMnemonic();
  const seed = bip39.mnemonicToSeedSync(mnemonic);

  // criando a root key a partir da seed
  const root = bip32.fromSeed(seed, network);

  // derivando a conta a partir da root key - par de chaves (privada e pública)
  const account = root.derivePath(path);
  const node = account.derive(0).derive(0); // primeira chave (index 0)

  // endereço BTC
  const btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
  }).address;

  const wif = node.toWIF();

  return {
    network: 'testnet', // altere para 'mainnet' se trocar a rede
    path,
    address: btcAddress,
    wif,
    mnemonic,
  };
}

module.exports = {
  createWallet,
};
