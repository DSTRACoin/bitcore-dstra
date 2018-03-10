var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('2e5b65aa'),
  addressVersion: 35,
  privKeyVersion: 131,
  P2SHVersion: 95,
  hkeyPublicVersion: 0x0,
  hkeyPrivateVersion: 0x0,
  genesisBlock: {
    hash: hex('0000070d58e60579407f5682045004f1b6d799ef48321b2e4aa58f90cb822abe'),
    merkle_root: hex('717459517b3907013d606a6b8ccd6d5fd91c6b436526c833b1b97cf92df8c008'),
    height: 0,
    nonce: 255154,
    version: 7,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1519862400,
    bits: 0x1e0fffff,
  },
  dnsSeeds: [
    'seeds.dstra.io'
  ],
  defaultClientPort: 5169
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('a97402e4'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('00004806d0cc080e062d72212ef759e511118a6cf0735b09eda698f69f954aa3'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
