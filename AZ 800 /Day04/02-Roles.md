# Manage AD DS operations masters
AD DS uses a multi-master process to replicate data between domain controllers, with a built-in conflict resolution algorithm for simultaneous updates. This allows multiple users and applications to make concurrent changes across different controllers, which is essential in any environment with two or more domain controllers. In larger, distributed environments like Contoso’s, some operations still require specific roles on designated domain controllers.

# What are AD DS operations masters?

| FSMO Role                 | Function                                                                                                                                                  |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Schema Master**         | Controls updates to the **AD schema** (classes, attributes). Any schema modification must be done on this DC.                                             |
| **Domain-Naming Master**  | Controls **adding or removing domains** in the forest. Ensures unique domain names.                                                                       |
| **RID Master**            | Allocates **Relative IDs (RIDs)** to DCs in a domain. Prevents duplicate SIDs for objects (users, computers, groups).                                     |
| **Infrastructure Master** | Updates **cross-domain object references** (e.g., users from other domains in local groups). Ensures accurate references across domains.                  |
| **PDC Emulator Master**   | Acts as **Primary Domain Controller for legacy clients**. Handles **password changes, account lockouts, time synchronization, and Group Policy updates**. |

1. Check current FSMO role holders
``` netdom query fsmo
```

2. Transfer a specific role
```
Move-ADDirectoryServerOperationMasterRole -Identity "NewDCName" -OperationMasterRole SchemaMaster
Move-ADDirectoryServerOperationMasterRole -Identity "NewDCName" -OperationMasterRole DomainNamingMaster
Move-ADDirectoryServerOperationMasterRole -Identity "NewDCName" -OperationMasterRole PDCEmulator
Move-ADDirectoryServerOperationMasterRole -Identity "NewDCName" -OperationMasterRole RIDMaster
Move-ADDirectoryServerOperationMasterRole -Identity "NewDCName" -OperationMasterRole InfrastructureM
```
