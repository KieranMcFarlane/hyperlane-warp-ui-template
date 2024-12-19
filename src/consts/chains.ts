import { ChainMap, ChainMetadata } from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';

export const chains: ChainMap<ChainMetadata> = {
  ethereum: {
    name: 'ethereum',
    chainId: 1,
    domainId: 1,
    protocol: ProtocolType.Ethereum,
    nativeToken: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      { http: process.env.INFURA_MAINNET_RPC_URL || 'https://rpc.ankr.com/eth' },
    ],
    blockExplorers: [
      {
        name: 'Etherscan',
        url: 'https://etherscan.io',
        apiUrl: 'https://api.etherscan.io/api',
      },
    ],
  },

  base: {
    name: 'base',
    chainId: 8453,
    domainId: 8453,
    protocol: ProtocolType.Ethereum,
    nativeToken: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      { http: process.env.INFURA_MAINNET_RPC_URL || 'https://rpc.ankr.com/base' },
    ],
    blockExplorers: [
      {
        name: 'Basescan',
        url: 'https://basescan.org',
        apiUrl: 'https://api.basescan.org/api',
      },
    ],
  },
};
