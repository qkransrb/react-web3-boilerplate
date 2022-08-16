import React, { useState, useEffect, createContext } from "react";
import Web3 from "web3";

export const Web3Context = createContext(undefined);

const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState(undefined);

  useEffect(() => {
    const connectWeb3 = () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        setWeb3(web3);
      } else {
        return alert("Please install metamask");
      }
    };

    connectWeb3();
  }, []);

  return (
    <Web3Context.Provider value={{ web3 }}>{children}</Web3Context.Provider>
  );
};

export default Web3Provider;
