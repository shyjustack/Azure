# Manage AD DS operations masters

AD DS uses a multiple-master process to copy data between domain controllers, and automatically implements a conflict resolution algorithm that remediates simultaneous, conflicting updates. These provisions allow for a distributed management model, where multiple users and applications can concurrently apply changes to AD DS objects on different domain controllers. Such a model is necessary to support any AD DS environment with two or more domain controllers. However, it's critical for larger, distributed environments such as Contoso's. It's important to remember though, that certain operations can be performed only by a specific role, on a specific domain controller.

# What are AD DS operations masters?
AD DS operation master roles are responsible for performing operations that aren't suitable for a multiple-master model. A domain controller that has one of these roles is an operations master. An operations master role is also known as a Flexible Single Master Operation (FSMO) role. There are five operations master roles:

- Schema master
- Domain-naming master
- Infrastructure master
- RID master
- PDC emulator master

| FSMO Role                 | Function                                                                                                                                                  |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Schema Master**         | Controls updates to the **AD schema** (classes, attributes). Any schema modification must be done on this DC.                                             |
| **Domain-Naming Master**  | Controls **adding or removing domains** in the forest. Ensures unique domain names.                                                                       |
| **RID Master**            | Allocates **Relative IDs (RIDs)** to DCs in a domain. Prevents duplicate SIDs for objects (users, computers, groups).                                     |
| **Infrastructure Master** | Updates **cross-domain object references** (e.g., users from other domains in local groups). Ensures accurate references across domains.                  |
| **PDC Emulator Master**   | Acts as **Primary Domain Controller for legacy clients**. Handles **password changes, account lockouts, time synchronization, and Group Policy updates**. |

1. Check current FSMO role holders
```
netdom query fsmo
```

2. Transfer a specific role
```
Move-ADDirectoryServerOperationMasterRole -Identity "NewDCName" -OperationMasterRole SchemaMaster
Move-ADDirectoryServerOperationMasterRole -Identity "NewDCName" -OperationMasterRole DomainNamingMaster
Move-ADDirectoryServerOperationMasterRole -Identity "NewDCName" -OperationMasterRole PDCEmulator
Move-ADDirectoryServerOperationMasterRole -Identity "NewDCName" -OperationMasterRole RIDMaster
Move-ADDirectoryServerOperationMasterRole -Identity "NewDCName" -OperationMasterRole InfrastructureM
```
