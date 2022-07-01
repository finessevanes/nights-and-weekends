import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

const ButtonStyle = `
bg-gradient_medium hover:bg-gradient_light text-white py-2 px-4 rounded shadow
`
function App() {
  const [currentAccount, setCurrentAccount] = useState()

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

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
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
          !currentAccount && (
            <button class={ButtonStyle} onClick={connectWallet}>
              Connect Wallet
            </button>
          )
        }
      </div>
    </div>

  );
}

export default App;
