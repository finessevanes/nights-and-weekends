import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import BuyTicket from './components/BuyTicket';

const ButtonStyle = `
bg-gradient-200 hover:bg-gradient-250 text-white py-2 px-4 rounded shadow
`
function App() {
  const [currentAccount, setCurrentAccount] = useState()
  const [ isChainIdMumbai, setIsChainIdMumbai ] = useState(false);

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      }

      let chainId = await ethereum.request({ method: 'eth_chainId' });
      const mumbaiChainId = '0x13881'

      if (chainId === mumbaiChainId) {
        setIsChainIdMumbai(true)
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        setCurrentAccount(account);

      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function connectWallet() {
    try {
      const { ethereum } = window
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className=''>
      <Navbar currentAccount={currentAccount} />
      <div className='flex justify-center items-center h-screen'>
        {
          currentAccount ? (
            <BuyTicket isChainIdMumbai={isChainIdMumbai} />
          ) : (
            <button className={ButtonStyle} onClick={connectWallet}>
              Connect Wallet
            </button>
          )
        }
      </div>
    </div>
  );
}

export default App;
