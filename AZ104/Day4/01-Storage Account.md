### What is a Storage Account?
Azure storage accounts provides storage services and a unique namespace for your Azure Storage data that's accessible from anywhere in the world over HTTP or HTTPS. Data in your storage account is durable and highly available, secure, and massively scalable.

An Azure storage account contains all of your Azure Storage data objects, including:
- blobs
- file shares
- queues
- tables

### Storage Account Names
Storage account names must be between 3 and 24 characters in length and may contain numbers and lowercase letters only.

Your storage account name must be unique within Azure. No two storage accounts can have the same name.



| Redundancy Option | Description | Copies Maintained | Scope | Use Case |
|--------------------|-------------|--------------------|-------|----------|
| **LRS (Locally Redundant Storage)** | Keeps multiple copies of data within a single datacenter. | 3 | Single Region | Cost-effective, basic redundancy. |
| **ZRS (Zone-Redundant Storage)** | Replicates data across 3 availability zones in the same region. | 3 | Single Region (Zones) | High availability within region. |
| **GRS (Geo-Redundant Storage)** | Replicates data to a secondary region hundreds of miles away. | 6 (3 primary + 3 secondary) | Two Regions | Disaster recovery across regions. |
| **RA-GRS (Read-Access Geo-Redundant Storage)** | Same as GRS, but allows read access to secondary region. | 6 | Two Regions | DR + read access during outage. |
| **GZRS (Geo-Zone-Redundant Storage)** | Combines ZRS in primary region with GRS to secondary region. | 6 | Zones + Secondary Region | Maximum resiliency for critical workloads. |
| **RA-GZRS (Read-Access Geo-Zone-Redundant Storage)** | Same as GZRS, with read access to secondary region. | 6 | Zones + Secondary Region | DR + read access for mission-critical apps. |

---------------------------------------------

# Types of Azure Storage Accounts

| **Storage Account Type** | **Description** | **Supported Services** | **Best Use Case** |
|---------------------------|-----------------|-------------------------|--------------------|
| **General Purpose v2 (GPv2)** | Most common type, supports all storage services with latest features. | Blob, File, Queue, Table, Disk | Recommended for most workloads. |
| **General Purpose v1 (GPv1)** | Legacy type, limited features, lower cost for some scenarios. | Blob, File, Queue, Table | Only for backward compatibility. |
| **Blob Storage Account** | Optimized for storing large amounts of unstructured data. | Blob only | Big data, media files, backups. |
| **BlockBlobStorage** | Premium performance for block blobs. | Blob only | High-performance workloads. |
| **FileStorage** | Premium performance for Azure Files. | File only | Lift-and-shift apps needing SMB/NFS shares. |
| **Premium Storage (Managed Disks)** | High IOPS and low latency for disks. | Disk only | Mission-critical VMs and databases. |

---



