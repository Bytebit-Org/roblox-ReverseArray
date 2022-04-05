# Reverse Array
<p align="center">
  <a href="https://github.com/Bytebit-Org/roblox-ReverseArray/actions">
      <img src="https://github.com/Bytebit-Org/roblox-ReverseArray/workflows/CI/badge.svg" alt="CI status" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-blue.svg" alt="PRs Welcome" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
  </a>
  <a href="https://discord.gg/QEz3v8y">
    <img src="https://img.shields.io/badge/discord-join-7289DA.svg?logo=discord&longCache=true&style=flat" alt="Discord server" />
  </a>
</p>

Reverse Array is a simple function that just reverses any array given to it.

## Installation
### roblox-ts
Simply install to your [roblox-ts](https://roblox-ts.com/) project as follows:
```
npm i @rbxts/reverse-array
```

### Wally
[Wally](https://github.com/UpliftGames/wally/) users can install this package by adding the following line to their `Wally.toml` under `[dependencies]`:
```
ReverseArray = "bytebit/reverse-array@1.0.3"
```

Then just run `wally install`.

### From model file
Model files are uploaded to every release as `.rbxmx` files. You can download the file from the [Releases page](https://github.com/Bytebit-Org/roblox-ReverseArray/releases) and load it into your project however you see fit.

### From model asset
New versions of the asset are uploaded with every release. The asset can be added to your Roblox Inventory and then inserted into your Place via Toolbox by getting it [here.](https://www.roblox.com/library/1234567890/Reverse-Array-Package)

## Documentation
Documentation can be found [here](https://github.com/Bytebit-Org/roblox-ReverseArray/tree/master/docs), is included in the TypeScript files directly, and was generated using [TypeDoc](https://typedoc.org/).

## Example
In this example, an array is created, each value printed, a reversed array created, and then each of its values are printed

<details>
  <summary>roblox-ts example</summary>

  ```ts
  import { reverseArray } from "@rbxts/reverse-array";

  const forwardArray = [1, 2, 3, 4];
  for (const value of forwardArray) {
    print(value)
  }

  const backwardArray = reverseArray(forwardArray);
  for (const value of backwardArray) {
    print(value)
  }
  ```
</details>

<details>
  <summary>Luau example</summary>

  ```lua
  local reverseArray = require(path.to.modules["reverse-array"]).reverseArray

  local forwardArray = [1, 2, 3, 4]
  for _, value in ipairs(forwardArray)
    print(value)
  end

  local backwardArray = reverseArray(forwardArray)
  for _, value in ipairs(backwardArray)
    print(value)
  end
  ```
</details>
