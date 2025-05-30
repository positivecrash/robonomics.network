---
title: Otaberu - Open-Source Tool to Manage P2P Networks for Edge Devices and Robotics
date: 2024-10-19
published: true
locale: 'en'
tags: ['Announcements']
cover_image: ./images/otaberu-part-1/cover.png
description: "The rapid growth in device numbers creates new challenges for availability and security. A more efficient solution is needed for secure device communication that addresses SSH-based PKI limitations. Robot-agent Otaberu offers this solution, enabling a custom PKI for robots using modern libP2P standards and protocols to resolve these issues."
abstract: "The rapid growth in device numbers creates new challenges for availability and security. A more efficient solution is needed for secure device communication that addresses SSH-based PKI limitations. Robot-agent Otaberu offers this solution, enabling a custom PKI for robots using modern libP2P standards and protocols to resolve these issues."
---

At the dawn of the computer era, multiple people used a single computer. Now, the number of devices around us is proliferating, and it's common for each person to have two, three, or more devices. Companies own hundreds or thousands of devices that form fleets, and soon, most people will have fleets of devices the size of small businesses today. As a result, there is a growing need for simple yet effective tools to secure communication between these devices, surpassing the limitations of traditional methods like SSH.

We are introducing [otaberu](https://github.com/airalab/otaberu) - an open-source tool designed to facilitate peer-to-peer (P2P) networking for edge devices and robotics. This tool focuses on accessibility, enabling seamless connection of robots and edge devices locally or globally without the need for extensive network configuration. Released under the MIT license, this tool provides the security and transparency developers of important physical infrastructure projects really need. Whether you are managing a small robotics lab or a fleet of millions, this P2P solution is designed to adapt to your requirements. It enables global communication using built-in Public Key Infrastructure (PKI), allowing effortless switching between local and global operations without manual reconfiguration. The core protocol used in this tool has been tested in some of the largest distributed systems, ensuring robustness and reliability. The tool is well-suited for a range of use cases, including CI/CD automation, software deployments, and efficient configuration updates for large-scale robot fleets. This post will delve into the technical specifics and explore potential applications.

https://www.youtube.com/watch?v=2ZKs4cWMLTE

*This short video demonstration shows possibilities of otaberu in case of Boston Dynamics Spot*

## Key features

### Access management

There are three common methods of access control for computers. The first - using passwords - is characteristic of unskilled users. It is the weakest in terms of security. The second - authorization by cryptographic key - is typically used by IT specialists in most organizations. It already requires some system administration skills from users for issuing, storing, and ensuring the security of these keys because they are usually stored on the hard drive. And finally, the most secure method is authorization through certificates. Usually, maintaining such a system requires additional services that need configuration. It is the most complex method, requires high qualifications, and is mainly used by large IT companies like Facebook, Amazon, Netflix, for whom maintaining IT infrastructure is directly related to the value they bring to their customers.

Otaberu aims to provide ordinary developers with the highest level of protection without deploying complex secret management services and deep networking knowledge. The tool enables the creation of a CA (Certificate Authority) analog based on the cryptographic keys of the robot fleet owner. The role of CA in otaberu is played by the owner - the first and key role in the set of otaberu functions. The owner possesses a single configuration file for their robot fleet, through which access management is carried out. There, the owner lists all their robots, their keys and metadata, and users authorized to connect to them. Our team has also developed a command-line utility called rn-cli to create and edit the configuration file using a terminal interface. The ability to launch a terminal interface is especially significant for devices without a graphical display, like remote or single-board computers with limited resources.

<rb-image zoom src="./images/otaberu-part-1/otaberu-tui-1.png" alt="Otaberu TUI Users Interface" />  

*Terminal User Interface - Users*

<rb-image zoom src="./images/otaberu-part-1/otaberu-tui-2.png" alt="Otaberu TUI Robots Interface" />  

*Terminal User Interface - Robots*

### Network **Accessibility**

In the article [Secure Robotics Remote Control: Robonomics Solution](https://robonomics.network/blog/secure-robotics-remote-control-via-web3/), we first touched upon the aspect of secure connection to robots, the problems that arise in the form of NAT, and what the Web3 world can offer in this regard, where we briefly mentioned the libP2P library.

In general, libP2P is not exactly a library, as it is usually called. Its nature is twofold. On one hand, libP2P represents a so-called network stack or set of specifications. In this regard, it is more similar to the Internet rather than any specific software project.

The legendary classic of the open source movement, creator of ZeroMQ Peter Hintjens, wrote in his book "Social Architecture": 

> The innovative nature of the Internet comes not from a small, select band of Einsteins. It comes from RFCs anyone can use and improve, made by hundreds and thousands of smart, though not uniquely smart, individuals. It comes from open-source software that anyone can use and improve. It comes from sharing, remixing, and scale of community. It comes from the continuous accretion of good solutions, and the disposal of bad ones.

At the core of libP2P are various documents or specifications that standardize formats, protocols, and conventions, prescribing how various P2P technologies should work. The second aspect of libP2P, or the periphery of this stack, consists of libraries implementing these standards. These libraries are written in different programming languages (currently, implementations in Go, Rust, TypeScript, Nim, C++, Swift, Kotlin/JVM, Python exist and are actively developing) or frameworks. Still, they are all compatible with each other if they support the same set of standards and the protocol used.

The carefully designed original architecture of libP2P allows the use of different transport options (tcp, quic, websocket), routing and NAT traversal (autonat, circuit-relay-v2, hole-punching), secure connection (tls, noise), node discovery (bootstrap, random-walk, mdns-discovery, rendezvous), message transmission protocols, data stream multiplexing, and other tools for creating peer-to-peer networks. Detailed information can be obtained on the [libp2p.io implementations page](https://libP2P.io/implementations/).

With the help of libP2P, otaberu simplifies device connectivity without complex network configurations. Devices without direct internet access can connect to other devices in the local area network and receive updates from the global network. By combining these technologies, this tool allows for the efficient self-organization of robots and edge devices into cohesive networks, regardless of whether they operate in the same physical space or are distributed globally.

## Use Cases

The capabilities of this tool are extensive, offering solutions to a variety of networking challenges in edge devices and robotics:

- **CI/CD Pipelines for Robotics Development**: Enable automation of CI/CD processes across the robotics fleet. This tool supports updating software across multiple nodes efficiently, streamlining development and deployment cycles.
- **Data Stream Pipelines**: Establish reliable communication for data collection and processing within a fleet. This leads to consistent insights from the data generated by different edge devices, helping to un-silo the data.
- **Configuration Updates Without Internet Access**: One practical example is a robot receiving an updated configuration from a cloud service and then sharing this update locally with other robots in the network. This approach allows non-internet-connected robots to stay up-to-date without requiring direct internet connectivity.

### Future Enhancements

We are actively working on expanding the functionality of this P2P tool:

- **Access Control Lists (ACLs)**: Introducing user-based access controls to enable different levels of permissions. This will allow system administrators, developers, and end-users to interact with specific robots or functionalities according to their role.
- **Optimized Data Streaming**: Implementing direct links after initial discovery through libP2P to enhance video streaming performance, optimizing the available bandwidth for video-heavy use cases.

### Stay Informed

This post is part of our ongoing series covering modern robotics software development. Future articles will include discussions on PKI integration in robotics, effective CI/CD strategies, and best practices for integrating this tool with ROS 2 (Robot Operating System). For developers interested in building distributed systems, managing robotics networks, or expanding fleet capabilities, this tool is designed to provide value and simplify your operations. We encourage you to explore the open-source repository and contribute to its development. We'd love to get your feedback on Github or Discord.

**Get Started**: Access our open-source repository [here](https://github.com/airalab/otaberu) and follow the documentation to set up your first P2P network. 
