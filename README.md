# benlIP

[![dWebShield-Official](https://img.shields.io/badge/DWEB-Official-brightgreen.svg)](https://https://github.com/benchlab/dweb)[![dWebShield-Auth](https://img.shields.io/badge/DWEB-Auth-brightgreen.svg)](https://https://github.com/benchlab/dweb)[![build status](http://img.shields.io/travis/benchos/benlip.svg?style=flat)](http://travis-ci.org/benchos/benlip)
<br>
[![dWebShield](https://github.com/benchlab/dweb-shields/blob/master/shields/dweb-protocol-shield.svg)](https://github.com/benchlab/dweb)

Retrieves the local network address of a benOS-powered computer.

## Table of Contents

- [Background](#background)
- [Installation](#installation)
- [Usage](#usage)
- [Related Projects](#related-projects)
- [Why Decentralized Internet](#why-the-internet-must-have-a-decentralized-alternative)
- [Bench On The dWeb](#bench-on-the-dweb)
- [License](#license)
- [Copyright](#license)

## Background
Used for retrieving IPV4 and IPV6 addresses that are associated with a benOS-powered computer or server. This package is mainly used in benWebOS. 

## Installation

### Install As A Library
```
npm i --save benlip
```
```
yarn add benlip
```

### Install As A Command CLI

```
npm i -g benlip
```

## Usage

### Usage In Applications 

```js
var bOSAddr = require('benlip')

console.log(bOSAddr())      
console.log(bOSAddr.ipv6()) 

```
### Usage As Command CLI

```shell
# benlip 
# 192.168.1.97
```

## Related Projects
- [benOS](https://github.com/benchOS/benOS) - benOS (Unix)
- [benWebOS](https://github.com/benchlab/benWebOS) - benWebOS (Javascript OS)
- [dPack](https://github.com/distributedweb/dpack) - dPack CLI
- [P2PDNSr](https://github.com/distributedweb/p2pdnsr) - dWeb's P2PDNS Revelator
- [dweb-multicast](https://github.com/distributedweb/dweb-multicast) - dWeb Multicast Library

## Why The Internet Must Have A Decentralized Alternative
Today, the internet is more censored than ever and it's only getting worse. Our mission with the [dWeb Protocol](https://github.com/benchlab/dweb) was to create a truly powerful P2P protocol, around [benOS](https://github.com/benchlab/benos), [dBrowser](https://github.com/benchlab/dbrowser) and many of benOS' underlying libraries to bring the most powerful P2P products to life. In the last few months, by rebuilding P2P technologies that have existed since the early 2000s, we have built a powerful suite of decentralized libraries for benOS and the Bench Network, that will only improve over time. But we also brought new ideas to life, like:

- [dDrive](https://github.com/distributedweb/ddrive)
- [dExplorer](https://github.com/distributedweb/dexplorer)
- [dDatabase](https://github.com/distributedweb/ddatabase)
- [dSites](https://github.com/distributedweb/dsites)
- [dPack](https://github.com/distributedweb/dpack) 
- [benFS](https://github.com/benchOS/benfs)
- [DCDN](https://github.com/distributedweb/dcdn)
- [Rocketainer](https://github.com/distributedweb/rocketainer) 
- [RocketOS](https://github.com/distributedweb/rocketos) 
- [dNames](https://github.com/distributedweb/dnames) 
- [P2PDNS](https://github.com/distributedweb/p2pdns) 
- [dWebFS](https://github.com/distributedweb/dwebfs) 
- [dWebDB](https://github.com/distributedweb/dwebdb) 
- [MeteorIDE](https://github.com/distributedweb/meteorIDE) 
- [Kepler](https://github.com/benchlab/kepler) 
- [Neutron](https://github.com/benchlab/neutron) 
- [Designate](https://github.com/benchlab/designate) 
- [Nova](https://github.com/benchlab/nova) 

and more! These were the protocols and libraries that we needed to create a completely decentralized operating system, where everything was distributed, protected and people were once again in control of their data. benOS is made up of over 1100+ different libraries that we are releasing on a day-by-day basis as we move them to a stable/production state. While financial support is great for this open source project, we need developers who want to be some of the first to build the `dApps` and `dSites` of the future. We have to take back what our forefathers originally designed for freedom, by making our code the law, instead of releasing weak and highly centralized applications where law cannot be applied because the code lacks the foundation to implement a legal framework for itself. Join us for a truly historic journey on the [BenchLabs Telegram](https://t.me/benchlabs). See you there. 

### Bench On The dWeb
[dweb://bench.dnames.io](dweb://bench.dnames.io) // dNames Short Link 
[dweb://3EDAE09848B77401445B7739CAFCE442DDE1752AED63025A1F94E6A86D7E9F04](dweb://3EDAE09848B77401445B7739CAFCE442DDE1752AED63025A1F94E6A86D7E9F04) // dWeb Key Link 

In order to make the links above clickable or to view these links period, you will need [dBrowser](https://github.com/benchlab/dbrowser) (Available for Mac OSX, Linux, Windows and soon to be available on iOS/Android)

#### "The Code Is The Law" - Stan Larimer - Godfather of BitShares.

## License
[MIT](LICENSE.md)

## Copyright 
Copyright (c) 2018 Bench Computer, Inc. All rights reserved. 
