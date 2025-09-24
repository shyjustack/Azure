To **configure Integration Services** for a Hyper-V virtual machine, follow these steps to ensure features like Enhanced Session Mode, time synchronization, and guest services work properly:

---

### 🛠️ Steps to Configure Integration Services

#### ✅ 1. **Open Hyper-V Manager**
- Launch **Hyper-V Manager** on your host machine.

#### ✅ 2. **Access VM Settings**
- Right-click the VM you want to configure.
- Select **Settings**.

#### ✅ 3. **Go to Integration Services**
- In the left pane of the VM settings window, click **Integration Services**.

#### ✅ 4. **Enable Required Services**
Check the boxes for the services you want to enable:

| Integration Service         | Description |
|----------------------------|-------------|
| **Operating System Shutdown** | Allows host to shut down the guest OS gracefully. |
| **Time Synchronization**      | Syncs VM time with host. |
| **Data Exchange**             | Shares OS info between host and guest. |
| **Heartbeat**                 | Monitors VM health. |
| **Backup (Volume Snapshot)** | Enables host-based backup of VM. |
| **Guest Services**            | Required for Enhanced Session Mode and file copy via Hyper-V. |

✅ **Make sure "Guest Services" is checked** to use Enhanced Session Mode.

#### ✅ 5. **Apply and Restart**
- Click **Apply** and **OK**.
- Restart the VM to apply changes.

---

### 📌 Notes

- **Windows Server 2022** includes Integration Services by default.
- For older OS versions, you may need to install/update them manually via the VM's DVD drive using `vmguest.iso`.

---

Would you like a PowerShell script to enable Integration Services across multiple VMs?
