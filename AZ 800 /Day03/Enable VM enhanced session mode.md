
# What Is Enhanced Session Mode?
Enhanced Session Mode allows you to connect to a VM using Remote Desktop Protocol (RDP) directly through the Hyper-V console. This enables richer interaction between the host and the guest VM.

✅ Key Features
- Clipboard Sharing: Copy and paste between host and VM.
- Drive Redirection: Access host drives from inside the VM.
- Printer Redirection: Use host printers in the VM.
- Smart Card Support: Use host smart cards in the VM.
- Audio Redirection: Play sound from the VM on the host.
- Dynamic Display Resizing: Resize the VM window and the resolution adjusts automatically.
### Enable Enhanced Session Mode on the host
Set-VMHost -EnableEnhancedSessionMode $true

### Check current status
Get-VMHost | Select-Object EnableEnhancedSessionMode

Also we need to enable from the Hyper-v level 


<img width="1347" height="595" alt="image" src="https://github.com/user-attachments/assets/4e3c6d5f-8c7a-488c-8a36-a2f6372bb448" />
