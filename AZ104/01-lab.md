TASK 1: VirtualBox, Windows Server, AD DS & Entra ID
1️⃣ Install VirtualBox

Download and install VirtualBox:
https://www.virtualbox.org/wiki/Downloads

2️⃣ Download Windows Server 2022 ISO

Download Windows Server 2022 (Evaluation):
https://www.microsoft.com/en-us/evalcenter/download-windows-server-2022

3️⃣ Install Windows Server 2022 OS

Follow this video to install the OS in VirtualBox:
https://www.youtube.com/watch?v=w8hI4VdFV78

4️⃣ Configure Active Directory Domain Services (AD DS)

Configure AD DS using the following video:
https://www.youtube.com/watch?v=h3sxduUt5a8&t=486s

5️⃣ Create AD Sync OU and User

Create an Organizational Unit (OU) named ADSYNC

Under the ADSYNC OU, create one user:

Username: testuser1

6️⃣ Install Entra ID (Azure AD) Connect on AD DS

Install Microsoft Entra ID Connect on the AD DS server

Configure synchronization between on-prem AD and Entra ID

Verify that user testuser1 is successfully synced to Entra ID

TASK 2: Azure Storage & Governance
1️⃣ Create Storage Accounts

Create two Azure Storage Accounts

Resource Group: 104lab

2️⃣ Configure Storage Replication & Containers

Create two containers (one in each storage account)

Enable replication between the storage accounts

Enable Blob versioning in one storage account

3️⃣ Secure Primary Storage Account

Apply Read-only lock on the primary storage account

4️⃣ Restrict Azure Resource Creation

Restrict Azure resource creation to UAE North region only
(Using Azure Policy)

5️⃣ Automatic Tagging

Configure a policy to automatically apply the following tag to all resources:

ENV : PRD

6️⃣ Upload Test File via Azure CLI

Upload one test file to the production container using Azure CLI
