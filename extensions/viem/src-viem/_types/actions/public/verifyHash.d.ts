import type { Client } from '../../clients/createClient.js'
import type { Transport } from '../../clients/transports/createTransport.js'
import type { Chain } from '../../types/chain.js'
import type { ByteArray, Hex } from '../../types/misc.js'
import { type CallParameters } from './call.js'
import type { Address } from 'abitype'
export type VerifyHashParameters = Pick<
	CallParameters,
	'blockNumber' | 'blockTag'
> & {
	/** The address that signed the original message. */
	address: Address
	/** The hash to be verified. */
	hash: Hex
	/** The signature that was generated by signing the message with the address's private key. */
	signature: Hex | ByteArray
}
export type VerifyHashReturnType = boolean
/**
 * Verifies a message hash on chain using ERC-6492.
 *
 * @param client - Client to use.
 * @param parameters - {@link VerifyHashParameters}
 * @returns Whether or not the signature is valid. {@link VerifyHashReturnType}
 */
export declare function verifyHash<TChain extends Chain | undefined>(
	client: Client<Transport, TChain>,
	{ address, hash, signature, ...callRequest }: VerifyHashParameters,
): Promise<VerifyHashReturnType>
//# sourceMappingURL=verifyHash.d.ts.map
