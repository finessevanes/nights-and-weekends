import React from 'react'
import { QRCodeSVG } from 'qrcode.react'

// image on the nft
// button to mint

// ** nice to haves **
// time left for sale
// place to see balance in 
// link that takes them to faucet

const TicketContainerStyle = `
rounded-lg
text-white
h-10
w-96
bg-gradient-300
flex
flex-col
`
const MainStubStyle = `
border-b-2
flex
flex-col
h-4/5
text-center
`
const SecondaryStubStyle = `
h-1/5
w-full
flex
justify-end
items-end
pr-2
pb-2

`

const ButtonStyle = `
bg-gradient-200 hover:bg-gradient-100 text-white py-2 px-4 rounded shadow mt-9 w-1/3 self-center
`


const BuyTicket = () => {
  return (
    <>
      <div className='flex self-start flex-col'>
        <div className={TicketContainerStyle}>
          <div className={MainStubStyle}>
            <span className='text-6xl self-start pt-4 pl-4'>🌙 </span>
            <h1 className='text-yellow-400 text-xTitle mt-16'>NIGHTS & WEEKENDS</h1>
            <span className='text-x69 rotate-[57deg] animate-pulse mt-16'>🦄</span>
            <h2 className='flex justify-center h-full items-end text-3xl font-bold mb-2'>SEASON 01</h2>
          </div>
          <div className={SecondaryStubStyle}>
            <QRCodeSVG bgColor='black' fgColor='#060A1F' size='100' value='https://buildspace.so/nights-weekends' />
          </div>
        </div>
        <button className={ButtonStyle}>Mint Ticket</button>
      </div>
    </>
  )
}

export default BuyTicket