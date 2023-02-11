import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

export const network = (process.env.NEXT_PUBLIC_SOLANA_NETWORK ||
  WalletAdapterNetwork.Devnet) as WalletAdapterNetwork;
// const network = WalletAdapterNetwork.Devnet;
export const rpcHost =
  process.env.NEXT_PUBLIC_RPC_HOST || clusterApiUrl(network);

export const candyMachineId = new PublicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_ID ||
    "79zdZZeh6MPpXrT2qMtk2eoa21q86MeZcDJD2vK2fLM2"
);
export const defaultGuardGroup =
  process.env.NEXT_PUBLIC_DEFAULT_GUARD_GROUP || undefined; // undefined means default



export const whitelistedWallets = [
  "8FQKXpAezQQPSR45hQgx5thFbkbu7zAs1LjvW6tw9a1y",
  "Fix6Uf4xiq4ezN8dHgzGTP8Y568sJzPzKhz5jK4fGRh4",
  "C7iwZseBNwcP1MSg6RBwESdXvfkhFrimQoMvqnFcoRR9",
  "AUTb8mpmV9ZEYrXMkAB15fsH43EbF6XsUFy5ab6PMJZ3"

];
