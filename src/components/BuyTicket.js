import React from 'react'
import { QRCodeSVG } from 'qrcode.react'
import ticket from './Ticket.svg'


// button to mint

// ** nice to haves **
// time left for sale
// place to see balance in 
// link that takes them to faucet


const ButtonStyle = `
bg-gradient-200 hover:bg-gradient-100 text-white py-2 px-4 rounded shadow mt-9 w-1/3 self-center
`


const BuyTicket = () => {
  return (
    <>
      <div className='flex self-start flex-col'>
        <img src={ticket} alt="SVG logo image"/>
        <button className={ButtonStyle}>Mint Ticket</button>
      </div>
    </>
  )
}

export default BuyTicket
