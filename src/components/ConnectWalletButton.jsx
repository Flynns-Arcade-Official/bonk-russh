// src/components/ConnectWalletButton.js
import React, { useState } from "react";
import { useWallet } from "../WalletProvider";

const ConnectWalletButton = () => {
  const {
    wallet,
    publicKey,
    connectWallet,
    disconnectWallet,
    signMessage,
    sendTokenTransaction,
    getPoolBalance,
  } = useWallet();
  const [message, setMessage] = useState("");

  const handleSignMessage = async () => {
    if (message) {
      const signedMessage = await signMessage(message);
      console.log("Signed message:", signedMessage);
    } else {
      console.error("Message cannot be empty");
    }
  };

  const handleSendTransaction = async () => {
    let destination = "5xTPL6cLHwFay1Bk5Mez5B7sjtBAmC8EcegSo6Nec18r";
    let amount = 1;
    if (destination && amount) {
      const lamports = parseInt(amount, 10) * 100000;
      // const lamports = parseInt(amount, 10) * 1000000000; // Convert SOL to lamports
      await sendTokenTransaction(destination, lamports);
    } else {
      console.error("Destination and amount cannot be empty");
    }
  };

  const handleGetPoolBalance = async () => {
    console.log("Get pool balance");
    let destination = "5xTPL6cLHwFay1Bk5Mez5B7sjtBAmC8EcegSo6Nec18r";
    await getPoolBalance(destination);
  };

  return (
    <div>
      {publicKey ? (
        <div>
          <p>Connected as {publicKey.toString()}</p>
          <button id="disconnectBtn" onClick={disconnectWallet}>
            Disconnect Wallet
          </button>
          <div>
            <input
              type="text"
              placeholder="Enter message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button id="signMsgBtn" onClick={handleSignMessage}>
              Sign Message
            </button>
          </div>
          <button id="sendTransaction" onClick={handleSendTransaction}>
            sendTransaction
          </button>
        </div>
      ) : (
        <div>
          <button id="connectBtn" onClick={connectWallet}>
            Connect to Phantom Wallet
          </button>
        </div>
      )}
      <button id="getPoolBalance" onClick={handleGetPoolBalance}>
        getPoolBalance
      </button>
    </div>
  );
};

export default ConnectWalletButton;
