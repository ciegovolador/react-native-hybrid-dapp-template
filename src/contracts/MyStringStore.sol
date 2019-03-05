pragma solidity ^0.5.0;

contract MyStringStore {
  string public myString = "Hello World Mauro";

  function set(string memory x) public {
    myString = x;
  }
}