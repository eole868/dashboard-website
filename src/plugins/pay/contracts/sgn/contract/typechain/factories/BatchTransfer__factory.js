"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BatchTransfer__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_liquidityBridge",
                type: "address"
            },
            {
                internalType: "address",
                name: "_msgBus",
                type: "address"
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            },
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_receiver",
                type: "address"
            },
            {
                internalType: "address",
                name: "_token",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            },
            {
                internalType: "uint64",
                name: "_dstChainId",
                type: "uint64"
            },
            {
                internalType: "uint32",
                name: "_maxSlippage",
                type: "uint32"
            },
            {
                internalType: "address[]",
                name: "_accounts",
                type: "address[]"
            },
            {
                internalType: "uint256[]",
                name: "_amounts",
                type: "uint256[]"
            },
        ],
        name: "batchTransfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_sender",
                type: "address"
            },
            {
                internalType: "uint64",
                name: "_srcChainId",
                type: "uint64"
            },
            {
                internalType: "bytes",
                name: "_message",
                type: "bytes"
            },
        ],
        name: "executeMessage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_sender",
                type: "address"
            },
            {
                internalType: "address",
                name: "_token",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            },
            {
                internalType: "uint64",
                name: "_srcChainId",
                type: "uint64"
            },
            {
                internalType: "bytes",
                name: "_message",
                type: "bytes"
            },
        ],
        name: "executeMessageWithTransfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_sender",
                type: "address"
            },
            {
                internalType: "address",
                name: "_token",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            },
            {
                internalType: "uint64",
                name: "_srcChainId",
                type: "uint64"
            },
            {
                internalType: "bytes",
                name: "_message",
                type: "bytes"
            },
        ],
        name: "executeMessageWithTransferFallback",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "liquidityBridge",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "msgBus",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "pegBridge",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "pegVault",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_addr",
                type: "address"
            },
        ],
        name: "setLiquidityBridge",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_addr",
                type: "address"
            },
        ],
        name: "setMsgBus",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_addr",
                type: "address"
            },
        ],
        name: "setPegBridge",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_addr",
                type: "address"
            },
        ],
        name: "setPegVault",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_token",
                type: "address"
            },
            {
                internalType: "enum MsgSenderApp.BridgeType",
                name: "bt",
                type: "uint8"
            },
        ],
        name: "setTokenBridgeType",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint64",
                name: "",
                type: "uint64"
            },
        ],
        name: "status",
        outputs: [
            {
                internalType: "bytes32",
                name: "h",
                type: "bytes32"
            },
            {
                internalType: "enum BatchTransfer.TransferStatus",
                name: "status",
                type: "uint8"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        name: "tokenBridgeTypes",
        outputs: [
            {
                internalType: "enum MsgSenderApp.BridgeType",
                name: "",
                type: "uint8"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address"
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
var _bytecode = "0x60806040523480156200001157600080fd5b5060405162002076380380620020768339810160408190526200003491620000de565b6200003f3362000071565b600280546001600160a01b039384166001600160a01b0319918216179091556001805492909316911617905562000116565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b0381168114620000d957600080fd5b919050565b60008060408385031215620000f257600080fd5b620000fd83620000c1565b91506200010d60208401620000c1565b90509250929050565b611f5080620001266000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c806382980dc4116100b2578063d8257d1711610081578063f00f39ce11610066578063f00f39ce146102b0578063f2fde38b146102c3578063f4a12414146102d657600080fd5b8063d8257d171461028a578063dfa2dbaf1461029d57600080fd5b806382980dc4146102405780638da5cb5b146102535780639b05a77514610264578063ce35dd9a1461027757600080fd5b80633f0bbc4c11610109578063588be02b116100ee578063588be02b146101fa578063715018a61461020d5780637de805881461021557600080fd5b80633f0bbc4c146101d457806344f653eb146101e757600080fd5b806303cbfe661461013b5780631599d2651461015057806320bff8931461016357806328c9c35e146101a4575b600080fd5b61014e610149366004611656565b6102e9565b005b61014e61015e366004611769565b61036a565b61018d6101713660046117cb565b6007602052600090815260409020805460019091015460ff1682565b60405161019b929190611812565b60405180910390f35b6101c76101b2366004611656565b60056020526000908152604090205460ff1681565b60405161019b9190611826565b61014e6101e2366004611840565b6104dc565b61014e6101f5366004611656565b610574565b61014e610208366004611656565b6105f0565b61014e61066c565b600154610228906001600160a01b031681565b6040516001600160a01b03909116815260200161019b565b600254610228906001600160a01b031681565b6000546001600160a01b0316610228565b61014e610272366004611656565b6106d2565b61014e61028536600461187d565b61074e565b600454610228906001600160a01b031681565b600354610228906001600160a01b031681565b61014e6102be36600461187d565b6108f1565b61014e6102d1366004611656565b6109d6565b61014e6102e4366004611948565b610ab8565b6000546001600160a01b031633146103485760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b031633146103c45760405162461bcd60e51b815260206004820152601960248201527f63616c6c6572206973206e6f74206d6573736167652062757300000000000000604482015260640161033f565b6000818060200190518101906103da9190611a17565b6040516bffffffffffffffffffffffff19606087901b1660208201526001600160c01b031960c086901b166034820152909150603c0160408051601f198184030181529181528151602092830120835167ffffffffffffffff16600090815260079093529120541461048e5760405162461bcd60e51b815260206004820152600f60248201527f696e76616c6964206d6573736167650000000000000000000000000000000000604482015260640161033f565b602080820151825167ffffffffffffffff1660009081526007909252604090912060019081018054909160ff19909116908360028111156104d1576104d16117e8565b021790555050505050565b6000546001600160a01b031633146105365760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161033f565b6001600160a01b0382166000908152600560205260409020805482919060ff1916600183600381111561056b5761056b6117e8565b02179055505050565b6000546001600160a01b031633146105ce5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161033f565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b0316331461064a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161033f565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146106c65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161033f565b6106d06000610d3b565b565b6000546001600160a01b0316331461072c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161033f565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b031633146107a85760405162461bcd60e51b815260206004820152601960248201527f63616c6c6572206973206e6f74206d6573736167652062757300000000000000604482015260640161033f565b6000818060200190518101906107be9190611b19565b90506000805b82602001515181101561086657610829836020015182815181106107ea576107ea611c2c565b60200260200101518460400151838151811061080857610808611c2c565b6020026020010151896001600160a01b0316610d8b9092919063ffffffff16565b8260400151818151811061083f5761083f611c2c565b6020026020010151826108529190611c58565b91508061085e81611c70565b9150506107c4565b5060006108738287611c8b565b905081861115610897576060830151610897906001600160a01b0389169083610d8b565b60408051808201909152835167ffffffffffffffff16815260009060208101600190526040516108ca9190602001611ca2565b60405160208183030381529060405290506108e6898783610e20565b505050505050505050565b6001546001600160a01b0316331461094b5760405162461bcd60e51b815260206004820152601960248201527f63616c6c6572206973206e6f74206d6573736167652062757300000000000000604482015260640161033f565b6000818060200190518101906109619190611b19565b606081015190915061097e906001600160a01b0387169086610d8b565b60408051808201909152815167ffffffffffffffff16815260009060208101600290526040516109b19190602001611ca2565b60405160208183030381529060405290506109cd878583610e20565b50505050505050565b6000546001600160a01b03163314610a305760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161033f565b6001600160a01b038116610aac5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161033f565b610ab581610d3b565b50565b333214610b075760405162461bcd60e51b815260206004820152600760248201527f4e6f7420454f4100000000000000000000000000000000000000000000000000604482015260640161033f565b6000805b82811015610b4b57838382818110610b2557610b25611c2c565b9050602002013582610b379190611c58565b915080610b4381611c70565b915050610b0b565b506006805460019190600090610b6c90849067ffffffffffffffff16611cce565b92506101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060405180604001604052808b89604051602001610bda92919060609290921b6bffffffffffffffffffffffff1916825260c01b6001600160c01b0319166014820152601c0190565b60408051808303601f1901815291815281516020928301208352600092820183905260065467ffffffffffffffff16835260078252909120825181559082015160018083018054909160ff1990911690836002811115610c3c57610c3c6117e8565b0217905550610c599150506001600160a01b038a1633308b610e82565b6040805160808101825260065467ffffffffffffffff16815281516020878102828101820190945287825260009381840192918a918a91829190850190849080828437600092019190915250505090825250604080516020878102828101820190935287825292830192909188918891829185019084908082843760009201919091525050509082525033602091820152604051610cf8929101611d35565b6040516020818303038152906040529050610d2e8b8b8b8b600660009054906101000a900467ffffffffffffffff168c87610ec0565b5050505050505050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040516001600160a01b038316602482015260448101829052610e1b90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261130a565b505050565b600154604051634f9e72ad60e11b81526001600160a01b0390911690639f3ce55a90610e5490869086908690600401611e33565b600060405180830381600087803b158015610e6e57600080fd5b505af11580156109cd573d6000803e3d6000fd5b6040516001600160a01b0380851660248301528316604482015260648101829052610eba9085906323b872dd60e01b90608401610db7565b50505050565b6001600160a01b03861660009081526005602052604081205460ff1690806001836003811115610ef257610ef26117e8565b141561102e576002546001600160a01b039081169250610f15908a16838a6113ef565b60025460405163a5977fbb60e01b81526001600160a01b038c811660048301528b81166024830152604482018b905267ffffffffffffffff808b1660648401528916608483015263ffffffff881660a48301529091169063a5977fbb9060c401600060405180830381600087803b158015610f8f57600080fd5b505af1158015610fa3573d6000803e3d6000fd5b50506040516bffffffffffffffffffffffff1930606090811b821660208401528e811b821660348401528d901b166048820152605c81018b90526001600160c01b031960c08b811b8216607c8401528a811b8216608484015246901b16608c82015260940191506110119050565b604051602081830303815290604052805190602001209050611294565b6002836003811115611042576110426117e8565b141561115157600480546040516308d18d8960e21b81526001600160a01b038c811693820193909352602481018b905267ffffffffffffffff808b1660448301528d841660648301528916608482015291169250829063234636249060a401600060405180830381600087803b1580156110bb57600080fd5b505af11580156110cf573d6000803e3d6000fd5b50505050308989898d8a466040516020016110119796959493929190606097881b6bffffffffffffffffffffffff19908116825296881b87166014820152602881019590955260c093841b6001600160c01b031990811660488701529290961b909416605084015292811b831660648301529290921b16606c82015260740190565b6003836003811115611165576111656117e8565b141561124c57600354604051636f3c863f60e11b81526001600160a01b038b81166004830152602482018b90528c8116604483015267ffffffffffffffff891660648301529091169250829063de790c7e90608401600060405180830381600087803b1580156111d457600080fd5b505af11580156111e8573d6000803e3d6000fd5b50506040516bffffffffffffffffffffffff1930606090811b821660208401528d811b82166034840152604883018d90528e901b1660688201526001600160c01b031960c08a811b8216607c84015246901b166084820152608c0191506110119050565b60405162461bcd60e51b815260206004820152601a60248201527f62726964676520746f6b656e206e6f7420737570706f72746564000000000000604482015260640161033f565b600154604051634289fbb360e01b81526001600160a01b0390911690634289fbb3906112cc908d908b90879087908b90600401611e6e565b600060405180830381600087803b1580156112e657600080fd5b505af11580156112fa573d6000803e3d6000fd5b5050505050505050505050505050565b600061135f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166114b09092919063ffffffff16565b805190915015610e1b578080602001905181019061137d9190611eb0565b610e1b5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161033f565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e9060440160206040518083038186803b15801561143b57600080fd5b505afa15801561144f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114739190611ed2565b61147d9190611c58565b6040516001600160a01b038516602482015260448101829052909150610eba90859063095ea7b360e01b90606401610db7565b60606114bf84846000856114c9565b90505b9392505050565b6060824710156115415760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161033f565b843b61158f5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161033f565b600080866001600160a01b031685876040516115ab9190611eeb565b60006040518083038185875af1925050503d80600081146115e8576040519150601f19603f3d011682016040523d82523d6000602084013e6115ed565b606091505b50915091506115fd828286611608565b979650505050505050565b606083156116175750816114c2565b8251156116275782518084602001fd5b8160405162461bcd60e51b815260040161033f9190611f07565b6001600160a01b0381168114610ab557600080fd5b60006020828403121561166857600080fd5b81356114c281611641565b67ffffffffffffffff81168114610ab557600080fd5b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156116c2576116c2611689565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156116f1576116f1611689565b604052919050565b600082601f83011261170a57600080fd5b813567ffffffffffffffff81111561172457611724611689565b611737601f8201601f19166020016116c8565b81815284602083860101111561174c57600080fd5b816020850160208301376000918101602001919091529392505050565b60008060006060848603121561177e57600080fd5b833561178981611641565b9250602084013561179981611673565b9150604084013567ffffffffffffffff8111156117b557600080fd5b6117c1868287016116f9565b9150509250925092565b6000602082840312156117dd57600080fd5b81356114c281611673565b634e487b7160e01b600052602160045260246000fd5b6003811061180e5761180e6117e8565b9052565b828152604081016114c260208301846117fe565b602081016004831061183a5761183a6117e8565b91905290565b6000806040838503121561185357600080fd5b823561185e81611641565b915060208301356004811061187257600080fd5b809150509250929050565b600080600080600060a0868803121561189557600080fd5b85356118a081611641565b945060208601356118b081611641565b93506040860135925060608601356118c781611673565b9150608086013567ffffffffffffffff8111156118e357600080fd5b6118ef888289016116f9565b9150509295509295909350565b60008083601f84011261190e57600080fd5b50813567ffffffffffffffff81111561192657600080fd5b6020830191508360208260051b850101111561194157600080fd5b9250929050565b600080600080600080600080600060e08a8c03121561196657600080fd5b893561197181611641565b985060208a013561198181611641565b975060408a0135965060608a013561199881611673565b955060808a013563ffffffff811681146119b157600080fd5b945060a08a013567ffffffffffffffff808211156119ce57600080fd5b6119da8d838e016118fc565b909650945060c08c01359150808211156119f357600080fd5b50611a008c828d016118fc565b915080935050809150509295985092959850929598565b600060408284031215611a2957600080fd5b6040516040810181811067ffffffffffffffff82111715611a4c57611a4c611689565b6040528251611a5a81611673565b8152602083015160038110611a6e57600080fd5b60208201529392505050565b600067ffffffffffffffff821115611a9457611a94611689565b5060051b60200190565b8051611aa981611641565b919050565b600082601f830112611abf57600080fd5b81516020611ad4611acf83611a7a565b6116c8565b82815260059290921b84018101918181019086841115611af357600080fd5b8286015b84811015611b0e5780518352918301918301611af7565b509695505050505050565b60006020808385031215611b2c57600080fd5b825167ffffffffffffffff80821115611b4457600080fd5b9084019060808287031215611b5857600080fd5b611b6061169f565b8251611b6b81611673565b81528284015182811115611b7e57600080fd5b8301601f81018813611b8f57600080fd5b8051611b9d611acf82611a7a565b81815260059190911b8201860190868101908a831115611bbc57600080fd5b928701925b82841015611be3578351611bd481611641565b82529287019290870190611bc1565b8088860152505050506040830151935081841115611c0057600080fd5b611c0c87858501611aae565b6040820152611c1d60608401611a9e565b60608201529695505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115611c6b57611c6b611c42565b500190565b6000600019821415611c8457611c84611c42565b5060010190565b600082821015611c9d57611c9d611c42565b500390565b815167ffffffffffffffff1681526020808301516040830191611cc7908401826117fe565b5092915050565b600067ffffffffffffffff808316818516808303821115611cf157611cf1611c42565b01949350505050565b600081518084526020808501945080840160005b83811015611d2a57815187529582019590820190600101611d0e565b509495945050505050565b6020808252825167ffffffffffffffff16828201528281015160806040840152805160a0840181905260009291820190839060c08601905b80831015611d965783516001600160a01b03168252928401926001929092019190840190611d6d565b506040870151868203601f190160608801529350611db48185611cfa565b93505050506060840151611dd360808501826001600160a01b03169052565b509392505050565b60005b83811015611df6578181015183820152602001611dde565b83811115610eba5750506000910152565b60008151808452611e1f816020860160208601611ddb565b601f01601f19169290920160200192915050565b6001600160a01b038416815267ffffffffffffffff83166020820152606060408201526000611e656060830184611e07565b95945050505050565b60006001600160a01b03808816835267ffffffffffffffff8716602084015280861660408401525083606083015260a060808301526115fd60a0830184611e07565b600060208284031215611ec257600080fd5b815180151581146114c257600080fd5b600060208284031215611ee457600080fd5b5051919050565b60008251611efd818460208701611ddb565b9190910192915050565b6020815260006114c26020830184611e0756fea26469706673582212201ad09fa7dbdc8f5329b0d8291577e150d0ebd8b6fe19eb5c53f9e2183501448264736f6c63430008090033";
var BatchTransfer__factory = /** @class */ (function (_super) {
    __extends(BatchTransfer__factory, _super);
    function BatchTransfer__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    BatchTransfer__factory.prototype.deploy = function (_liquidityBridge, _msgBus, overrides) {
        return _super.prototype.deploy.call(this, _liquidityBridge, _msgBus, overrides || {});
    };
    BatchTransfer__factory.prototype.getDeployTransaction = function (_liquidityBridge, _msgBus, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _liquidityBridge, _msgBus, overrides || {});
    };
    BatchTransfer__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    BatchTransfer__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    BatchTransfer__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    BatchTransfer__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    BatchTransfer__factory.bytecode = _bytecode;
    BatchTransfer__factory.abi = _abi;
    return BatchTransfer__factory;
}(ethers_1.ContractFactory));
exports.BatchTransfer__factory = BatchTransfer__factory;
