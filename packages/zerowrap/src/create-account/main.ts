/**
 * Creates and initializes a kernel account, sends a user operation, and waits for its receipt.
 * 
 * This function performs the following steps:
 * 1. Creates an ECDSA validator for the account.
 * 2. Creates a kernel account with the validator.
 * 3. Sets up a kernel client with a paymaster for sponsoring transactions.
 * 4. Sends a user operation (an empty transaction to the zero address).
 * 5. Waits for the user operation receipt.
 * 
 * @async
 * @function main
 * @returns {Promise<void>} A promise that resolves when the user operation is completed.
 * @throws {Error} If any step in the process fails.
 */

// import "dotenv/config"
// import {
//   createKernelAccount,
//   createZeroDevPaymasterClient,
//   createKernelAccountClient,
// } from "@zerodev/sdk"
// import { signerToEcdsaValidator } from "@zerodev/ecdsa-validator"
// import { ENTRYPOINT_ADDRESS_V07, bundlerActions } from "permissionless"
// import { http, Hex, createPublicClient, zeroAddress } from "viem"
// import { privateKeyToAccount } from "viem/accounts"
// import { sepolia } from "viem/chains"
// import { KERNEL_V3_1 } from "@zerodev/sdk/constants";

// if (
//   !process.env.BUNDLER_RPC ||
//   !process.env.PAYMASTER_RPC ||
//   !process.env.PRIVATE_KEY
// ) {
//   throw new Error("BUNDLER_RPC or PAYMASTER_RPC or PRIVATE_KEY is not set")
// }

// const chain = sepolia
// const publicClient = createPublicClient({
//   transport: http(process.env.BUNDLER_RPC),
//   chain
// })

// const signer = privateKeyToAccount(process.env.PRIVATE_KEY as Hex)
// const entryPoint = ENTRYPOINT_ADDRESS_V07
// const kernelVersion = KERNEL_V3_1

export const main = async () => {
  // const ecdsaValidator = await signerToEcdsaValidator(publicClient, {
  //   signer,
  //   entryPoint,
  //   kernelVersion,
  // })

  // const account = await createKernelAccount(publicClient, {
  //   plugins: {
  //     sudo: ecdsaValidator,
  //   },
  //   entryPoint,
  //   kernelVersion,
  // })
  // console.log("My account:", account.address)

  // const kernelClient = createKernelAccountClient({
  //   account,
  //   entryPoint,
  //   chain,
  //   bundlerTransport: http(process.env.BUNDLER_RPC),
  //   middleware: {
  //     sponsorUserOperation: async ({ userOperation }) => {
  //       const paymasterClient = createZeroDevPaymasterClient({
  //         chain,
  //         transport: http(process.env.PAYMASTER_RPC),
  //         entryPoint,
  //       })
  //       return paymasterClient.sponsorUserOperation({
  //         userOperation,
  //         entryPoint,
  //       })
  //     },
  //   },
  // })

  // const userOpHash = await kernelClient.sendUserOperation({
  //   userOperation: {
  //     callData: await account.encodeCallData({
  //       to: zeroAddress,
  //       value: BigInt(0),
  //       data: "0x",
  //     }),
  //   },
  // })

  // console.log("userOp hash:", userOpHash)

  // const bundlerClient = kernelClient.extend(bundlerActions(entryPoint))
  // const _receipt = await bundlerClient.waitForUserOperationReceipt({
  //   hash: userOpHash,
  // })

  // console.log("userOp completed")
}

// main()