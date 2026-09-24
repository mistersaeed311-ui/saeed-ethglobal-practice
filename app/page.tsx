"use client";
import { useState } from "react";
export default function Home() {
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState("");
  async function connectWallet() {
  if (typeof window.ethereum !== "undefined") {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(accounts[0]);
    setConnected(true);
  } else {
    alert("MetaMask not found!");
  }
}
function disconnectWallet() {
  setAccount("");
  setConnected(false);
}
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">
        Saeed at ETHGlobal Tokyo 🚀
      </h1>

      <p className="mt-4 text-xl">
        Building my first decentralized application
      </p>
      <p className="mt-2 text-lg">
  Learning React, Git and Web3
</p>

      <button
 onClick={connectWallet}
  className="mt-8 px-6 py-3 rounded-xl bg-white text-black font-semibold"
>
  {connected ? "Wallet Connected ✓" : "Connect Wallet"}
</button>
{account && (
  <p className="mt-4">
    Address: {account.slice(0, 6)}...{account.slice(-4)}
  </p>
)}
{account && (
  <p className="mt-4">
    Address: {account.slice(0, 6)}...{account.slice(-4)}
  </p>
)}
    </main>
  );
}