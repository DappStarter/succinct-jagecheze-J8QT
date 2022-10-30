require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict prison sugar spot tower ring remember equip guess climb sure slice'; 
let testAccounts = [
"0xcacf96a4a0fda9a92b8b5e6b82b4bb6fcc9f4791007b74fb055c218a2e56d5d1",
"0x412421ab245530d2ac47b8d76878c67058e884155360c79626dc708645d7c56b",
"0x7a81d7d850904672d68f79f1cfdd13d8680022a8e8afeabf928b423b0e0324fc",
"0x323111e51455a98caf3b4875ad26eeee2eb3a14f2adb910d1027c5f28adaac7f",
"0x938df76d9a36cc569fdde8a6d298a7c5c957177dbe6b83dbe6e205e00099d479",
"0xd869d28856ad2085f3cd0f9f37a4f89e9dc4814b8e1f998d70ee3246a7b55000",
"0x4c57ecd83a58ad3b6cf64d625dae286d2f67a0a3a8292e523cac51d4f3db3789",
"0xce2ce6c47e114d01c123af356e74dc26be66f1a0f5171dd6b53be67bd57b7589",
"0x018f59843d5b8ac54b4f07985f91f0ed523d271ae7260e47654b4198b37ac928",
"0xd6770e9c616678bc18d18a489e510965e610f2776ca32bb0e80a7c94b006236b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

