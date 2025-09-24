# Enable Enhanced Session Mode on the host
Set-VMHost -EnableEnhancedSessionMode $true

# Check current status
Get-VMHost | Select-Object EnableEnhancedSessionMode

<img width="1347" height="595" alt="image" src="https://github.com/user-attachments/assets/4e3c6d5f-8c7a-488c-8a36-a2f6372bb448" />
