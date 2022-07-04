import React, { useEffect, useState } from 'react'
import { TicketSVG } from './Ticket'
import { ethers } from "ethers"
import nws01 from '../utilities/nws01.json'

const ButtonStyle = `
bg-gradient-200 hover:bg-gradient-250 text-white py-2 px-4 rounded shadow mt-9 w-1/3 self-center
`

const BuyTicket = ({ isChainIdMumbai }) => {
  const [stringToDisplay, setStringToDisplay] = useState('')

  const CONTRACT_ADDRESS = "0x9eBCAcE0c343e89A4ED13A34ABbc3d4106770643"
  useEffect(() => {
    getCurrentId()
  }, [])


  const getCurrentId = async () => {
    try {
      const { ethereum } = window

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, nws01.abi, signer)
        let currentId = await connectedContract.getCurrentId()
        let num = currentId.toNumber()
        let zeros

        if (num < 10) {
          zeros = "00"
        }

        if (num > 9 && num < 100) {
          zeros = "0"
        }

        setStringToDisplay(zeros + num)
      }

    } catch (e) {
      console.log(e)
    }
  }

  const mintTicket = async () => {
    try {
      const { ethereum } = window

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, nws01.abi, signer)


        let nftTxn = await connectedContract.mint()

        console.log("Minting.....")
        await nftTxn.wait()

        console.log(`TRANSACTION: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`)
        getCurrentId()

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
        <TicketSVG stringToDisplay={stringToDisplay}/>
        <button className={ButtonStyle} onClick={mintTicket}>Mint Ticket</button>
      </div>
    </>
  )
}

export default BuyTicket
