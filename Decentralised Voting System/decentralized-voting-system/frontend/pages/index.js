import { useEffect, useState } from "react";
import { ethers } from "ethers";
import VotingABI from "../contracts/Voting.json";

const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

export default function Home() {
  const [proposals, setProposals] = useState([]);
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      setAccount(await signer.getAddress());

      const contract = new ethers.Contract(
        contractAddress,
        VotingABI.abi,
        signer
      );
      const proposalsList = await contract.getProposals();
      setProposals(proposalsList);
    } else {
      alert("Please install MetaMask!");
    }
  };

  const vote = async (proposalId) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      contractAddress,
      VotingABI.abi,
      signer
    );
    await contract.vote(proposalId);
    window.location.reload();
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div className="p-4">
      <button onClick={connectWallet} className="bg-blue-500 text-white p-2">
        Connect Wallet
      </button>
      <h1 className="text-2xl">Voting Proposals</h1>
      <ul>
        {proposals.map((proposal, index) => (
          <li key={index}>
            <span>
              {proposal.name} - {proposal.voteCount} Votes
            </span>
            <button
              onClick={() => vote(proposal.id)}
              className="bg-green-500 text-white p-2 ml-2"
            >
              Vote
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
