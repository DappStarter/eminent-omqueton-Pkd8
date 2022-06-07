require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth sad purchase install close bridge tape'; 
let testAccounts = [
"0x939b450234cc491866309ab70922ec625fb63ed38b0c1cfb32a3375bd1726f6f",
"0xc6542947007fc1107b26b0466deb4f35ed1c54d558dc22a4b1d93769a9750237",
"0xc6d6aa6a6cb1d69ad196b387b007964072b6a92233288b5fb3740e44e11e1fcd",
"0xb155c82526513f7616fd80bf8c06a2afaf87ef0ed30ad056b138b2e23966d805",
"0xf7cddc5329592b5b9ad6f4d75cc86dc76d09ce6b70eb532d678f6379a419682c",
"0xb9dcb7ec86e7d26147ad60017d33eea74d8cc115c9a1ab1872544da585136ece",
"0xb2d70d036ad86cdeffa03a266e35abe5843d3917757b6a014c99e89adce560fa",
"0xb01998685401320a92a2251dfc3042feb578205ecd046ac66a4775f2102f4d01",
"0xf9d8abfb5b1660970c3a03186753bfd33e5972296183aa0f2053a89d89f419f3",
"0x1dd8ca4b0f028822269437f676a163b489af0c65c3b3d141ec9d8bb5f0f59f09"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

