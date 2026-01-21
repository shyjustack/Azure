
## 🔹 VMSS + Networking – Practice Lab Questions

### **1. VNet & Subnet**

1. Create a VNet with address space **10.10.0.0/16** and two subnets:

   * `web-subnet` → 10.10.1.0/24
   * `mgmt-subnet` → 10.10.2.0/24
     **Question:**
   * Why is subnet planning important before deploying VMSS?
   * Can a VMSS span multiple subnets? Why or why not?

2. Deploy a VM Scale Set in `web-subnet`.
   **Question:**

   * What happens if the subnet IP range is exhausted?
   * How do you resize the subnet without downtime?

---

### **2. Network Security Group (NSG)**

3. Attach an NSG to the **subnet** hosting the VMSS.

   * Allow HTTP (80) from Internet
   * Deny RDP/SSH from Internet
     **Question:**
   * Why is subnet-level NSG preferred over NIC-level for VMSS?
   * What is the priority order of NSG rules?

4. You want only Azure Load Balancer health probes to reach the VMSS.
   **Question:**

   * Which service tag should be used in NSG?
   * What happens if this rule is missing?

---

### **3. VMSS + Load Balancer**

5. Deploy a VMSS with **Standard Load Balancer**.
   **Question:**

   * Why is Standard LB mandatory for production VMSS?
   * What NSG rule is required for health probes?

6. Scale VMSS from 2 to 5 instances.
   **Question:**

   * How does NSG affect newly created instances?
   * Do new instances get new private IPs?

---

### **4. VNet Peering**

7. Create two VNets:

   * VNet-A (VMSS deployed)
   * VNet-B (Management VM)

   Peer both VNets.
   **Question:**

   * Can VMSS instances communicate with VMs in the peered VNet?
   * Is NSG still required after peering?

8. Disable **“Allow forwarded traffic”** in peering.
   **Question:**

   * What traffic will fail?
   * When is this option required?

---

### **5. Routing (UDR – User Defined Routes)**

9. Create a route table and associate it with the VMSS subnet:

   * 0.0.0.0/0 → Virtual Appliance (Firewall IP)
     **Question:**
   * How does this affect outbound internet access?
   * What happens if firewall is down?

10. You want VMSS traffic to stay inside Azure backbone.
    **Question:**

* Which routing method ensures this?
* Does VNet peering use public internet?

---

### **6. Azure Bastion**

11. Deploy Azure Bastion in the VNet.
    **Question:**

* Why must Bastion be in a subnet named `AzureBastionSubnet`?
* What is the minimum subnet size required?

12. Connect to a VMSS instance using Bastion.
    **Question:**

* Why VMSS instances don’t have public IPs?
* How do you identify which instance you are connecting to?

---

### **7. Security & Best Practices**

13. You accidentally allowed RDP from Internet in NSG.
    **Question:**

* What is the security risk?
* How does Bastion mitigate this risk?

14. VMSS instances cannot reach Azure Storage.
    **Question:**

* Which NSG or route table checks will you perform?
* Which service tag allows Azure Storage access?

---

### **8. Troubleshooting Scenarios**

15. VMSS instances show **Unhealthy** in Load Balancer.
    **Question:**

* List 5 things to check (NSG, LB, application, probe, route).

16. After scaling out, new VMSS instances are unreachable.
    **Question:**

* What common subnet or NSG mistake causes this?

---

### **9. Advanced / Interview Level**

17. NSG at subnet allows traffic, but NIC NSG denies it.
    **Question:**

* Which rule takes precedence and why?

18. Can you attach different NSGs to different VMSS instances?
    **Question:**

* Why is this not recommended?

---

### **10. Mini Lab Task**

19. Design a **secure VMSS architecture** with:

* No public IPs
* Access only via Bastion
* Outbound traffic via Firewall
* Web access via Load Balancer

**Question:**

* Draw the traffic flow (Inbound & Outbound).

---


Just tell me what you want next 👌
