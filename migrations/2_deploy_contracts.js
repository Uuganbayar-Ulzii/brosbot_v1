const SwapRouter02 = artifacts.require("SwapRouter02");

const _factoryV2 = '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f';
const factoryV3 = '0x1f98431c8ad98523631ae4a59f267346ea31f984';
const _positionManager = '0xc36442b4a4522e871399cd717abdd847ab11fe88';
const _WETH9 = '0xd0a1e359811322d97991e03f863a0c30c2cf029c';

module.exports = function (deployer) {
  deployer.deploy(SwapRouter02, _factoryV2, factoryV3, _positionManager, _WETH9);
};