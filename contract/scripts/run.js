const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('NWS01NFT');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();

    let txn = await nftContract.mint()
    await txn.wait()

    
    console.log("Contract deployed to:", nftContract.address);
}

const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
  