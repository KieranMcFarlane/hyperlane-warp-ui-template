import { TokenConnectionType, TokenStandard, WarpCoreConfig } from '@hyperlane-xyz/sdk';

/**
 * Warp route configuration for SANSHU tokens.
 */
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      name: 'SANSHU!',
      symbol: 'SANSHU',
      decimals: 18,
      chainName: 'ethereum', // Matches chains.ts (lowercase)
      addressOrDenom: '0x0026dFbd8DBb6f8D0c88303CC1B1596409Fda542', // ERC20 Token Address
      standard: TokenStandard.ERC20,
      collateralAddressOrDenom: '0x66341702c7ab62adb0f57fae5f01203236122407', // Lockbox Address
      connections: [
        {
          type: TokenConnectionType.Hyperlane,
          token: '0x57DE0aEBCE3471839A40aa0c298602a002B2216b', // xERC20 Token Address
        },
      ],
    },
  ],
  options: {
    localFeeConstants: [
      {
        origin: 'ethereum',       // Matches chains.ts (lowercase)
        destination: 'base',      // Matches chains.ts (lowercase)
        amount: '100000000000000000', // 0.1 ETH
        addressOrDenom: '0x66341702c7ab62adb0f57fae5f01203236122407', // Fee Token or Lockbox Address
      },
    ],
  },
};
