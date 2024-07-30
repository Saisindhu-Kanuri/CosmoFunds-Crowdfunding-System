//Crowd Funding MARKETPLACE
//export const CrowdFundingAddress="0x5FbDB2315678afecb367f032d93F642f64180aa3  ";
import crowdFunding from "./CrowdFunding.json";

// Smart contract details
export const CrowdFundingAddress = "0x4aDC3bcEa759FDd6219F936c15De478762A57484";
export const CrowdFundingABI = crowdFunding.abi;

// Network configurations
const networks = {
    localhost: {
        chainId: `0x${Number(31337).toString(16)}`,
        chainName: "localhost",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: ["HTTP://127.0.0.1:7545"], // Ensure this matches your Ganache RPC URL
        blockExplorerUrls: [],
    },
};

// Function to switch network
const changeNetwork = async ({ networkName }) => {
    try {
        const network = networks[networkName];
        if (!network) throw new Error("Network not found");

        await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [{
                chainId: network.chainId,
                chainName: network.chainName,
                nativeCurrency: network.nativeCurrency,
                rpcUrls: network.rpcUrls,
                blockExplorerUrls: network.blockExplorerUrls,
            }],
        });
    } catch (error) {
        console.error("Failed to switch network:", error);
    }
};

// Exported function to handle network switch
export const handleNetworkSwitch = async () => {
    const networkName = "localhost";
    await changeNetwork({ networkName });
};
