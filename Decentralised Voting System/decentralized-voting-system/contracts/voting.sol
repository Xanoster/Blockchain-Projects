// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Proposal {
        uint id;
        string name;
        uint voteCount;
    }

    mapping(address => bool) public voters;
    Proposal[] public proposals;
    address public owner;

    event ProposalAdded(uint proposalId, string name);
    event Voted(uint proposalId, address voter);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addProposal(string memory name) public onlyOwner {
        proposals.push(Proposal({
            id: proposals.length,
            name: name,
            voteCount: 0
        }));
        emit ProposalAdded(proposals.length - 1, name);
    }

    function vote(uint proposalId) public {
        require(!voters[msg.sender], "You have already voted");
        require(proposalId < proposals.length, "Invalid proposal id");
        
        proposals[proposalId].voteCount++;
        voters[msg.sender] = true;
        emit Voted(proposalId, msg.sender);
    }

    function getProposals() public view returns (Proposal[] memory) {
        return proposals;
    }
}
