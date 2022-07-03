import React from 'react'
import { QRCodeSVG } from 'qrcode.react'
import ticket from './Ticket.svg'
import { ethers } from "ethers"
import nws01 from '../utilities/nws01.json'


// button to mint

// ** nice to haves **
// time left for sale
// place to see balance in 
// link that takes them to faucet


const ButtonStyle = `
bg-gradient-200 hover:bg-gradient-100 text-white py-2 px-4 rounded shadow mt-9 w-1/3 self-center
`


const BuyTicket = ({ isChainIdMumbai }) => {

  const mintTicket = async () => {
    const CONTRACT_ADDRESS = "0x395758a3447e1ce3CA24b2c5497a0257FEc30f9f";

    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, nws01.abi, signer);

        let nftTxn = await connectedContract.mint();

        console.log("Minting.....")
        await nftTxn.wait();

        console.log(`TRANSACTION: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);

      } else {
        return
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='flex self-start flex-col'>
        <img src={ticket} alt="nft ticket" />
        <button className={ButtonStyle} onClick={mintTicket}>Mint Ticket</button>
      </div>
    </>
  )
}

export default BuyTicket
