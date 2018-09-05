var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function (hex) {
    return new Buffer(hex, 'hex');
};

exports.livenet = {
    name: 'livenet',
    magic: hex('6470f6a6'),
    addressVersion: 30,
    privKeyVersion: 131,
    P2SHVersion: 33,
    hkeyPublicVersion: 0x14d2ff12,
    hkeyPrivateVersion: 0x14d24f7e,
    genesisBlock: {
        hash: hex('000000d280fd2dcad5c440a9e444a599a9074e15fa3588921f5a81e192e358f7'),
        merkle_root: hex('bc9d7507709a1941c27f8e426c1ab5bfb1c14579c09a8052be1658997b778966'),
        height: 0,
        nonce: 3752795,
        version: 1,
        prev_hash: buffertools.fill(new Buffer(32), 0),
        timestamp: 1533081600,
        bits: 0x1e0fffff
    },
    dnsSeeds: [
        'seeds.dstra.io'
    ],
    defaultClientPort: 5269
};

exports.mainnet = exports.livenet;

exports.testnet = {
    name: 'testnet',
    magic: hex('35c4003e'),
    addressVersion: 65,
    privKeyVersion: 239,
    P2SHVersion: 68,
    hkeyPublicVersion: 0x226aca94,
    hkeyPrivateVersion: 0x226a884d,
    genesisBlock: {
        hash: hex('0000028367375e6fb20021f98f870248c0946fc053bb8c9d01231f57620fd35e'),
        merkle_root: hex('bc9d7507709a1941c27f8e426c1ab5bfb1c14579c09a8052be1658997b778966'),
        height: 0,
        nonce: 232612,
        version: 1,
        prev_hash: buffertools.fill(new Buffer(32), 0),
        timestamp: 1533081601,
        bits: 0x1e0fffff
    },
    dnsSeeds: [
        'seeds-testnet.dstra.io'
    ],
    defaultClientPort: 15269
};
