import React, { useEffect, useState } from "react";
import MyButton from '../components/MyButton'

const HomePage = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [walletConnected, setWalletConnected] = useState(false);

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, []);

  const connectWallet = async () => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
        setWalletConnected(true);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
          setWalletConnected(true);
        } else {
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
          setWalletConnected(true);
        } else {
          setWalletAddress("");
          setWalletConnected(false);
          console.log("Connect to MetaMask using the Connect button");
        }
      });
    } else {
      setWalletAddress("");
      setWalletConnected(false);
      console.log("Please install MetaMask");
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>
        <span>
          {walletAddress && walletAddress.length > 0
            ? `Connected: ${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}`
            : "Connect Wallet"}
        </span>
      </button>
      <div>
      {walletConnected && <MyButton />}
      </div>
    </div>
  );
};

export default HomePage;
