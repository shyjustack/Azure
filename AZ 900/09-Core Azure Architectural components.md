## Core Azure Architectural components

### Regions
Microsoft Azure is made up of datacenters located around the globe. These datacenters are organized 
and made available to end users by region.

A region is a geographical area on the planet containing at least one, but potentially multiple datacenters 
that are in close proximity and networked together with a low-latency network.
For most Azure services, when you deploy a resource in Azure, you choose the region where you want 
your resource to be deployed. A few examples of regions are West US, Canada Central, West Europe, 
Australia East, and Japan West

Azure has more global regions than any other cloud provider. This provides customers the flexibility and 
scale needed to bring applications closer to users around the world, preserving data residency and 
offering comprehensive compliance and resiliency options for customer. At the time of writing this, Azure 
is generally available in 70+ regions around the world 400+ Datacenters worldwide. 


https://datacenters.microsoft.com/globe/explore

### Special Azure regions
Azure also has some special regions that you might want to use when building out your applications for compliance or legal purposes. 

These special regions include:

- US DoD Central, US Gov Virginia, US Gov Iowa and more: These are physical and logical network-isolated instances of Azure for US government agencies and partners. They are operated by screened US 
persons. Includes additional compliance certifications.
- China East, China North and more: These regions are available through a unique partnership between 
Microsoft and 21Vianet, whereby Microsoft does not directly maintain the datacenters.
- Germany Central and Germany Northeast:
These regions are available through a data trustee model whereby customer data remains in Germany 
under control of T-Systems, a Deutsche Telekom company, acting as the German data trustee. Any 
user or enterprise who needs their data to reside in Germany can use this service.
Region pairs
Each Azure region is paired with another region within the same geography (such as US, Europe, or Asia). 
This approach allows for the replication of resources (such as virtual machine storage) across a geography 
that helps reduce the likelihood of interruptions due to events such as natural disasters, civil unrest, 
power outages, or physical network outages affecting both regions at once. Additional advantages of 
region pairs include:
- In the event of a wider Azure outage, one region out of every pair is prioritized to help reduce the 
time it takes to restore them for applications.
- Planned Azure updates are rolled out to paired regions one region at a time to minimize downtime 
and risk of application outage.
- Data continues to reside within the same geography as its pair (except for Brazil South) for tax and 
law enforcement jurisdiction purposes.
Examples of region pairs would be West US paired with East US, and SouthEast Asia paired with East Asia.

### Geographies
A geography is a discrete market typically containing two or more regions that preserves data residency 
and compliance boundaries.

Geographies allow customers with specific data-residency and compliance needs to keep their data and 
applications close. Geographies ensure that data residency, sovereignty, compliance, and resiliency 
requirements are honored within geographical boundaries. Geographies are fault-tolerant to withstand 
complete region failure through their connection to dedicated high-capacity networking infrastructure.

Geographies are broken up into Americas, Europe, Asia Pacific, Middle East and Africa.

### Availability Zones

Availability zones are physically separate locations within an Azure region. Each availability zone is made 
up of one or more datacenters equipped with independent power, cooling, and networking. It is set up to 
be an isolation boundary. If one availability zone goes down, the other continues working. The availability 
zones are typically connected to each other through very fast, private fiber-optic networks.

Availability zones allow customers to run mission-critical applications with high availability and low-latency replication.

Availability zones are offered as a service within Azure, and to ensure resiliency, there’s a minimum of 
three separate zones in all enabled regions.

### Availability Sets

Availability sets are a way for you to ensure your application remains online if a high-impact maintenance 
event is required, or a hardware a failure occurs. Availability sets are made up of update domains and 
fault domains.

- Update domains (UD). When a maintenance event occurs (such as a performance update or critical 
security patch applied to the host), the update is sequenced through update domains. Sequencing 
updates using update domains ensures that the entire datacenter isn't unavailable during platform 
updates and patching. Update domains are a logical section of the datacenter, and they are implemented with software and logic.
- Fault domains (FD). Fault domains provide for the physical separation of your workload across 
different hardware in the datacenter. This includes power, cooling, and network hardware that 
supports the physical servers located in server racks. In the event the hardware that supports a server 
rack becomes unavailable, only that rack of servers would be affected by the outage

### Resource Groups
A resource group is a unit of management for your resources in Azure. You can think of your resource 
group as a container that allows you to aggregate and manage all the resources required for your 
application in a single manageable unit. This allows you to manage the application collectively over its life 
cycle, rather than manage components individually.
You can manage and apply the following resources at resource group level:
- Metering and billing
- Policies
- Monitoring and alerts
- Quotas
- Access control
Remember that when you delete a resource group you delete all resources contained within it.

