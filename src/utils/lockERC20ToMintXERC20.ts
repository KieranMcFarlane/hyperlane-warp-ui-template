import { ethers } from 'ethers';

/**
 * Locks ERC20 tokens in a lockbox and mints xERC20 tokens.
 * @param lockboxAddress The lockbox contract address.
 * @param amount The amount of ERC20 tokens to lock.
 * @param signer The ethers.js signer for transaction signing.
 */
export async function lockERC20ToMintXERC20(
  lockboxAddress: string,
  amount: bigint,
  signer: ethers.Signer,
) {
  const LOCKBOX_ABI = [
    {
      inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
      name: 'deposit',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ];

  const lockboxContract = new ethers.Contract(lockboxAddress, LOCKBOX_ABI, signer);

  const depositTx = await lockboxContract.deposit(amount);
  return depositTx.wait();
}
