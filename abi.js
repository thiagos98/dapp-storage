const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_cid",
				"type": "string"
			}
		],
		"name": "getData",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "fileName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "fileType",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "exist",
						"type": "bool"
					}
				],
				"internalType": "struct SlowStorage.Data",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_cidIpfs",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_fileName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_fileType",
				"type": "string"
			}
		],
		"name": "storeData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]