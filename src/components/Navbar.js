

const Navbar = ({ currentAccount }) => {
    return (
        <div className='flex justify-end'>
            {currentAccount && (
                <div className='text-gradient-300 font-bold bg-white border-gradient-200 border-2 rounded-lg py-2 px-3 m-3 '>{`${currentAccount.slice(0, 4)}...${currentAccount.slice(38)}`}</div>
            )}
        </div>
    )
}

export default Navbar