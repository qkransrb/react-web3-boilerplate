import React, { useContext } from "react";
import { Web3Context } from "./providers/Web3Provider";

const App = () => {
  const { web3 } = useContext(Web3Context);

  return (
    <div>
      <h1>App</h1>
    </div>
  );
};

export default App;
