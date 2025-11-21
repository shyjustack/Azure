### Hub-and-spoke topology
A hub-and-spoke topology connects one main virtual network (the hub) to several other virtual networks (the spokes). The hub is linked both ways with every spoke. This setup keeps each spoke separate but still allows them to use shared services in the hub.

### Mesh 
Mesh topology means every virtual network is directly connected to every other virtual network.
All networks can talk to each other without going through a hub.
This gives easy communication between networks but can be harder to manage if there are many networks.

![Topology](https://github.com/shyjustack/Azure/blob/main/media/azure-virtual-network-manager-network-topologies.png?raw=true)

