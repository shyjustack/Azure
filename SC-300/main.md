

# 📘 **Windows Active Directory – 30 Hour Training Plan**

### 🎯 **Objective**

By the end of this course, learners will be able to:
✅ Install and configure Active Directory Domain Services (AD DS)
✅ Manage users, groups, computers, and OUs
✅ Implement and troubleshoot Group Policy and security policies
✅ Configure DNS, DHCP, AD replication, and trusts
✅ Automate AD tasks with PowerShell
✅ Integrate on-prem AD with Azure AD / Hybrid Identity
✅ Secure AD, perform auditing, and implement MFA for AD
✅ Solve real-world enterprise scenarios and prepare for certification

---

## 📅 **Course Schedule Overview**

| Hour | Topic                                                           |
| ---- | --------------------------------------------------------------- |
| 1    | Introduction to Active Directory & Lab Setup                    |
| 2    | AD Architecture: Domains, Trees, Forests, Schema, GC, FSMO      |
| 3    | AD Components Deep Dive: Sites, Subnets, Replication            |
| 4    | Installing AD DS & Promoting Domain Controllers                 |
| 5    | User, Group & Computer Management (ADUC Basics)                 |
| 6    | Organizational Units & Delegation                               |
| 7    | DNS Fundamentals & Integration with AD                          |
| 8    | DHCP Overview & Integration with AD                             |
| 9    | Group Policy Basics: GPOs, Linking, Inheritance                 |
| 10   | Advanced Group Policy: Filtering, Loopback, Preferences         |
| 11   | Authentication Protocols: Kerberos & NTLM                       |
| 12   | Trusts & Cross-Domain Authentication                            |
| 13   | AD Replication: Multi-Master, Replication Topology              |
| 14   | PowerShell Basics for AD: Users, Groups, Computers              |
| 15   | Advanced PowerShell: Bulk Operations & Automation               |
| 16   | Backup & Restore: System State, Authoritative/Non-Authoritative |
| 17   | Security Policies: Password, Account Lockout, Delegation        |
| 18   | Auditing & Event Logs: Login failures, Object changes           |
| 19   | AD Health Checks & Troubleshooting: dcdiag, repadmin            |
| 20   | Active Directory Certificate Services (AD CS) Overview          |
| 21   | Group Policy Security & Hardening Best Practices                |
| 22   | AD Federation Services (ADFS) Introduction                      |
| 23   | Azure AD Integration: Hybrid Identity & Azure AD Connect        |
| 24   | Conditional Access & MFA for AD                                 |
| 25   | Disaster Recovery & DR Planning for AD                          |
| 26   | Lab: Scenario-based Troubleshooting (Replication, Login, GPO)   |
| 27   | Lab: PowerShell Automation Projects                             |
| 28   | Lab: Hybrid AD + Azure AD Integration Exercises                 |
| 29   | Mock Practice: Real-world Scenarios & Q&A                       |
| 30   | Course Review, Certification Preparation, Next Steps            |

---

## 🧑‍🏫 **Detailed Hour-by-Hour Breakdown**

---

### **Hour 1 – Introduction & Lab Setup**

* Overview of Active Directory
* Domains, Forests, Trees
* Lab: Setting up Windows Server VMs
* Key Skills: Understand AD components, plan lab environment

---

### **Hour 2 – AD Architecture Deep Dive**

* Schema, Global Catalog, FSMO roles
* Site, Subnet, and replication overview
* Lab: Explore existing AD topology

---

### **Hour 3 – AD Components & Replication**

* Multi-master replication
* Intra-site vs Inter-site replication
* Lab: Visualize replication topology using AD Sites and Services

---

### **Hour 4 – Installing AD DS & Domain Controllers**

* Install AD DS role
* Promote DCs, functional levels
* Lab: Create Primary & Additional DC

---

### **Hour 5 – User, Group & Computer Management**

* ADUC console
* Security vs Distribution groups, group scopes
* Lab: Create users, groups, join computers

---

### **Hour 6 – Organizational Units & Delegation**

* OU hierarchy planning
* Delegating admin rights to Helpdesk or Department
* Lab: Assign reset password permission

---

### **Hour 7 – DNS Fundamentals & Integration**

* DNS zones, SRV records, forwarders
* Lab: Configure DNS for AD, validate name resolution

---

### **Hour 8 – DHCP Overview**

* Scopes, reservations, lease duration
* Integration with AD
* Lab: Configure DHCP for test network

---

### **Hour 9 – Group Policy Basics**

* GPO linking, inheritance, precedence
* Lab: Password policy & basic desktop settings

---

### **Hour 10 – Advanced Group Policy**

* WMI filtering, Security filtering
* Loopback processing, Preferences
* Lab: Kiosk & selective GPOs

---

### **Hour 11 – Authentication Protocols**

* Kerberos tickets, TGT, service tickets
* NTLM basics, fallback mechanisms
* Lab: Verify Kerberos tickets

---

### **Hour 12 – Trusts & Cross-Domain Authentication**

* Trust types: External, Forest, Shortcut
* One-way vs two-way trusts
* Lab: Validate trust relationships

---

### **Hour 13 – AD Replication**

* Replication topology, schedules, monitoring
* Lab: Force replication, monitor changes

---

### **Hour 14 – PowerShell Basics**

* Get-ADUser, New-ADUser, Get-ADGroup
* Lab: Query users, groups, create new accounts

---

### **Hour 15 – Advanced PowerShell**

* Bulk user creation via CSV
* Automating GPO and permissions
* Lab: Scripting routine AD tasks

---

### **Hour 16 – Backup & Restore**

* System State backup
* Authoritative vs Non-Authoritative restore
* Lab: Restore deleted objects

---

### **Hour 17 – Security Policies**

* Password, account lockout, delegation policies
* Lab: Implement secure password policies

---

### **Hour 18 – Auditing & Event Logs**

* Object changes, login failures
* Lab: Configure audit policies & check event logs

---

### **Hour 19 – AD Health Checks & Troubleshooting**

* dcdiag, repadmin, logs
* Lab: Fix replication and login issues

---

### **Hour 20 – Active Directory Certificate Services (AD CS)**

* Certificate Authorities, PKI basics
* Lab: Create a test CA and issue certificates

---

### **Hour 21 – Group Policy Security & Hardening**

* GPO security filtering, loopback security
* Hardening Windows clients and servers
* Lab: Implement baseline security policies

---

### **Hour 22 – AD Federation Services (ADFS)**

* Overview of SSO & claims-based auth
* Lab: Simulated ADFS login scenario

---

### **Hour 23 – Azure AD Integration**

* Azure AD Connect
* Hybrid identity, Password Hash Sync
* Lab: Sync on-prem AD with Azure AD

---

### **Hour 24 – Conditional Access & MFA**

* Conditional Access policies
* MFA setup for domain users
* Lab: Enforce MFA for test accounts

---

### **Hour 25 – Disaster Recovery Planning**

* Backup strategies, DR design
* Lab: Simulate DC failure recovery

---

### **Hour 26 – Scenario-based Troubleshooting Lab**

* Replication, GPO, DNS, login failures
* Lab: Solve real-world AD issues

---

### **Hour 27 – PowerShell Automation Lab**

* Bulk creation, reporting, scheduled scripts
* Lab: Automate daily AD administration tasks

---

### **Hour 28 – Hybrid AD Lab**

* Azure AD + On-prem AD scenario
* Lab: Conditional access, sync validation

---

### **Hour 29 – Real-world Scenarios & Q&A**

* Multi-domain, trust, security incident handling
* Hands-on scenario challenges

---

### **Hour 30 – Review & Certification Prep**

* Recap all modules
* Practice exam-style exercises
* Guidance on next steps and advanced learning

---

## 🛠️ **Tools & Labs**

* ADUC, DNS Manager, GPMC
* PowerShell (Get-AD*, New-AD*)
* Event Viewer, dcdiag, repadmin
* Hyper-V / VMware / Azure VMs
* Azure AD Connect (for hybrid labs)

---

## 🧠 **Learning Outcomes**

By the end of 30 hours, learners will be able to:
✅ Deploy and manage AD DS and OUs
✅ Configure Group Policies for enterprise needs
✅ Troubleshoot authentication, replication, and DNS issues
✅ Automate AD tasks with PowerShell
✅ Implement hybrid identity with Azure AD
✅ Secure AD and configure auditing and MFA
✅ Handle real-world enterprise scenarios

---
