# working ARM
```
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "parameters": {
        "virtualMachines_vm1_name": {
            "defaultValue": "vm1",
            "type": "String"
        },
        "disks_vm1_OsDisk_1_f703fd4baf824df88040ef4e21a4dd06_externalid": {
            "defaultValue": "/subscriptions/19a0ff5b-030e-48d7-84f0-fdbb3098b3f4/resourceGroups/lab1/providers/Microsoft.Compute/disks/vm1_OsDisk_1_f703fd4baf824df88040ef4e21a4dd06",
            "type": "String"
        },
        "networkInterfaces_vm1892_z1_externalid": {
            "defaultValue": "/subscriptions/19a0ff5b-030e-48d7-84f0-fdbb3098b3f4/resourceGroups/lab1/providers/Microsoft.Network/networkInterfaces/vm1892_z1",
            "type": "String"
        }
    },
    "variables": {},
    "resources": [
        {
            "type": "Microsoft.Compute/virtualMachines",
            "apiVersion": "2024-11-01",
            "name": "[parameters('virtualMachines_vm1_name')]",
            "location": "centralindia",
            "zones": [
                "1"
            ],
            "properties": {
                "hardwareProfile": {
                    "vmSize": "Standard_DS1_v2"
                },
                "additionalCapabilities": {
                    "hibernationEnabled": false
                },
                "storageProfile": {
                    "imageReference": {
                        "publisher": "MicrosoftWindowsServer",
                        "offer": "WindowsServer",
                        "sku": "2022-datacenter-g2",
                        "version": "latest"
                    },
                    "osDisk": {
                        "osType": "Windows",
                        "name": "[concat(parameters('virtualMachines_vm1_name'), '_OsDisk_1_f703fd4baf824df88040ef4e21a4dd06')]",
                        "createOption": "FromImage",
                        "caching": "ReadWrite",
                        "managedDisk": {
                            "storageAccountType": "Standard_LRS"
                        },
                        "deleteOption": "Delete",
                        "diskSizeGB": 127
                    },
                    "dataDisks": [],
                    "diskControllerType": "SCSI"
                },
                "osProfile": {
                    "computerName": "[parameters('virtualMachines_vm1_name')]",
                    "adminUsername": "adminuser",
					"adminPassword": "P@ssw0rd@123",
                    "windowsConfiguration": {
                        "provisionVMAgent": true,
                        "enableAutomaticUpdates": true,
                        "patchSettings": {
                            "patchMode": "AutomaticByOS",
                            "assessmentMode": "ImageDefault",
                            "enableHotpatching": false
                        }
                    },
                    "secrets": [],
                    "allowExtensionOperations": true
                },
                "networkProfile": {
                    "networkInterfaces": [
                        {
                            "id": "[parameters('networkInterfaces_vm1892_z1_externalid')]",
                            "properties": {
                            }
                        }
                    ]
                },
                "diagnosticsProfile": {
                    "bootDiagnostics": {
                        "enabled": true
                    }
                }
            }
        }
    ]
}
```
