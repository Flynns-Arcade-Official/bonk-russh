import { useState } from "react";
import "./App.css";
import ConnectWalletButton from "./components/ConnectWalletButton";

function App() {
  return (
    <div>
      <ConnectWalletButton />
      <div className="">
        {/* <iframe
          src="https://raydium.io/swap?outputMint=DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"
          title="swap token"
        ></iframe> */}
      </div>
    </div>
  );
}

export default App;
