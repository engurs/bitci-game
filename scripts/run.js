const main = async () => {
    const bitciContractFactory = await hre.ethers.getContractFactory('bitciGameContract');
    const bitciContract = await bitciContractFactory.deploy(
      ["Patriots", "Eagles", "Lions"],    // Names
    ["https://i.imgur.com/W32WeHW.png", // Images
    "https://i.imgur.com/Eex0c1Z.png", 
    "https://i.imgur.com/dvRIBFA.png"],
    [300, 200, 100],                    // HP 
    [100, 50, 25]                       // Attack damage 
  );



    await bitciContract.deployed();
    console.log("Contract deployed to:", bitciContract.address);
  };
  
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