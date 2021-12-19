const main = async () => {
    const bitciContractFactory = await hre.ethers.getContractFactory('bitciGameContract');
    const bitciContract = await bitciContractFactory.deploy(
      ["Patriots", "Eagles", "Lions"],    // Names
    ["https://i.imgur.com/W32WeHW.png", // Images
    "https://i.imgur.com/Eex0c1Z.png", 
    "https://i.imgur.com/dvRIBFA.png"],
    [300, 200, 100],                    // HP 
    [100, 50, 25],                      // Attack damage 
    "Buccaneers", // Boss name
    "https://i.imgur.com/6UHyOW9.png", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );

    await bitciContract.deployed();
    console.log("Contract deployed to:", bitciContract.address);

    // let txn;
    // // We only have three characters.
    // // an NFT w/ the character at index 2 of our array.
    // txn = await bitciContract.mintCharacterNFT(2);
    // await txn.wait();

    // // NFT for Boss
    // let txn_Boss;
    // txn_Boss = await bitciContract.mintCharacterNFT(2);
    // await txn_Boss.wait();

    // txn_Boss = await bitciContract.attackBoss();
    // await txn_Boss.wait();

    // txn_Boss = await bitciContract.attackBoss();
    // await txn_Boss.wait();
    
    // // Get the value of the NFT's URI.
    // let returnedTokenUri = await bitciContract.tokenURI(1);
    // console.log("Token URI:", returnedTokenUri);
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