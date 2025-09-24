#Create Two Collections groups

New-VMGroup -Name "VMGroup1" -GroupType VMCollectionType
New-VMGroup -Name "VMGroup2" -GroupType VMCollectionType

#Create a management group

New-VMGroup -Name "MgmtGroup" -GroupType ManagementCollectionType

#Add VMs to the collection

Add-VMGroupMember -Name "VMGroup1" -VM (Get-VM "NYC-DC1-Server_2022")
Add-VMGroupMember -Name "VMGroup2" -VM (Get-VM "NYC-SVR1-Server_2022")

#Add collection groups to management group

Add-VMGroupMember -Name "MgmtGroup" -VMGroupMember (Get-VMGroup "VMGroup1")
Add-VMGroupMember -Name "MgmtGroup" -VMGroupMember (Get-VMGroup "VMGroup2")

#View groups

Get-VMGroup -Name "VMGroup1"
Get-VMGroup -Name "VMGroup2"
Get-VMGroup -Name "MgmtGroup"

#Get info about groups

Get-VM | Select Name,Groups
