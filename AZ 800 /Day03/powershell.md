Get-VM: Lists all virtual machines.

New-VM: Creates a new virtual machine.

Set-VM: Configures settings for a virtual machine.

Start-VM: Starts a virtual machine.

Stop-VM: Stops a virtual machine.

Remove-VM: Removes a virtual machine.

Get-VMCheckpoint: Lists checkpoints for a virtual machine.

New-VMCheckpoint: Creates a checkpoint for a virtual machine.

Restore-VMCheckpoint: Restores a virtual machine to a checkpoint.

Remove-VMCheckpoint: Removes a checkpoint from a virtual machine.

Get-VMHost: Gets information about Hyper-V hosts.

Set-VMHost: Configures settings for a Hyper-V host.



---

## **1. `Get-VM`** – List all VMs on a Hyper-V host

```powershell
# List all VMs with their status
Get-VM

# List only running VMs
Get-VM | Where-Object {$_.State -eq 'Running'}
```

---

## **2. `New-VM`** – Create a new VM

```powershell
# Create a new VM named "WebServer" with 2GB memory and a virtual hard disk
New-VM -Name "WebServer" -MemoryStartupBytes 2GB -Generation 2 -NewVHDPath "C:\Hyper-V\WebServer.vhdx" -NewVHDSizeBytes 50GB
```

---

## **3. `Set-VM`** – Configure VM settings

```powershell
# Change the startup memory of a VM
Set-VM -Name "WebServer" -MemoryStartupBytes 4GB

# Enable dynamic memory
Set-VM -Name "WebServer" -DynamicMemoryEnabled $true
```

---

## **4. `Start-VM`** – Start a VM

```powershell
# Start a specific VM
Start-VM -Name "WebServer"

# Start multiple VMs
Start-VM -Name "WebServer", "DBServer"
```

---

## **5. `Stop-VM`** – Stop a VM

```powershell
# Gracefully stop a VM
Stop-VM -Name "WebServer"

# Force stop a VM (like power off)
Stop-VM -Name "WebServer" -Force
```

---

## **6. `Remove-VM`** – Delete a VM

```powershell
# Remove a VM completely
Remove-VM -Name "WebServer" -Force
```

---

## **7. `Get-VMCheckpoint`** – List checkpoints (snapshots) of a VM

```powershell
# List all checkpoints of a VM
Get-VMCheckpoint -VMName "WebServer"
```

---

## **8. `New-VMCheckpoint`** – Create a checkpoint

```powershell
# Create a checkpoint for a VM
New-VMCheckpoint -VMName "WebServer" -SnapshotName "BeforeUpdate"
```

---

## **9. `Restore-VMCheckpoint`** – Restore a VM to a checkpoint

```powershell
# Restore VM to a specific checkpoint
Restore-VMCheckpoint -VMName "WebServer" -Name "BeforeUpdate"
```

---

## **10. `Remove-VMCheckpoint`** – Delete a checkpoint

```powershell
# Remove a specific checkpoint
Remove-VMCheckpoint -VMName "WebServer" -Name "BeforeUpdate"
```

---

## **11. `Get-VMHost`** – Get info about Hyper-V host

```powershell
# Get host CPU, memory, and virtualization capabilities
Get-VMHost

# Check virtual switch info on host
Get-VMSwitch
```

---

## **12. `Set-VMHost`** – Configure Hyper-V host

```powershell
# Enable MAC address spoofing on the host
Set-VMHost -VirtualizationFirmwareEnabled $true

# Set maximum memory for all VMs on this host
Set-VMHost -VirtualMachineMaximumMemory 32GB
```

---


You should also be comfortable combining these cmdlets with **filters, loops, and remote Hyper-V management**. For example:

```powershell
# Start all stopped VMs on a remote host
Get-VM -ComputerName "HyperV01" | Where-Object {$_.State -eq 'Off'} | Start-VM
```

---

1. Enter-PSSession – Connect to a remote computer interactively
 Connect to a remote server interactively
Enter-PSSession -ComputerName "Server01" -Credential Domain\AdminUser

 Once connected, your prompt changes to indicate the remote session:
 [Server01]: PS C:\Users\AdminUser>

You can now run commands on Server01 as if you were local
Get-VM
```


