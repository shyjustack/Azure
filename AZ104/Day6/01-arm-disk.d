### disk creation via ARM 

  {
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    "diskName": {
      "type": "string",
      "defaultValue": "image02"
    },
    "diskSizeGB": {
      "type": "int",
      "defaultValue": 30
    },
    "location": {
      "type": "string",
      "defaultValue": "centralindia"
    },
    "skuName": {
      "type": "string",
      "defaultValue": "Standard_LRS"
    }
  },
  "resources": [
    {
      "type": "Microsoft.Compute/disks",
      "apiVersion": "2024-03-02",
      "name": "[parameters('diskName')]",
      "location": "[parameters('location')]",
      "sku": {
        "name": "[parameters('skuName')]"
      },
      "properties": {
        "creationData": {
          "createOption": "Empty"
        },
        "diskSizeGB": "[parameters('diskSizeGB')]"
      }
    }
  ]
}
