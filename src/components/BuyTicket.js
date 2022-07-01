import React from 'react'

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
shadow-lg
flex
flex-col
shadow-white
`
const MainStubStyle = `
flex
flex-col
h-3/4
text-center
p-4
`
const SecondaryStubStyle = `
bg-gradient-350
rounded-lg
h-1/4
rounded-t-none
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
            <span className='text-6xl self-start'>🌙 </span>
            <h1 className='text-yellow-400 mt-12 mb-16 text-xTitle'>NIGHTS & WEEKENDS</h1>
            <span className='text-x69 rotate-[57deg] animate-pulse'>🦄</span>
            <h2 className='flex justify-center h-full items-end text-2xl font-extrabold tracking-widest'>SEASON 01</h2>
          </div>
          <div className={SecondaryStubStyle}>
            <h3 className='text-center pt-6'>Nights and Weekends 🌙 </h3>
          </div>
        </div>
        <button className={ButtonStyle}>Mint Ticket</button>
      </div>
    </>
  )
}

export default BuyTicket