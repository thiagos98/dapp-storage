// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;


contract SlowStorage {

    struct Data {
        string fileName;
        string fileType;
        bool exist;
    }

    mapping (string => Data) dataBase;

    function storeData(string memory _cidIpfs, string memory _fileName, string memory _fileType) public {
        require(dataBase[_cidIpfs].exist == false, "[E1] This hash already exists in contract.");
        Data memory currentData = Data({
            fileName: _fileName,
            fileType: _fileType,
            exist: true
        });

         dataBase[_cidIpfs] = currentData;
    }

    function getData(string memory _cid) public view returns (Data memory) {
        return dataBase[_cid];
    }
}