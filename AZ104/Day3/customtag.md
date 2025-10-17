{
  "properties": {
    "displayName": "Add multiple tags to resources",
    "policyType": "Custom",
    "mode": "Indexed",
    "description": "Adds the specified tags and values when any resource missing these tags is created or updated. Existing resources can be remediated by triggering a remediation task.",
    "metadata": {
      "version": "1.0.0",
      "category": "Tags"
    },
    "parameters": {
      "tag1Name": {
        "type": "String",
        "metadata": {
          "displayName": "Tag 1 Name",
          "description": "Name of the first tag, e.g., 'Environment'"
        }
      },
      "tag1Value": {
        "type": "String",
        "metadata": {
          "displayName": "Tag 1 Value",
          "description": "Value of the first tag, e.g., 'Production'"
        }
      },
      "tag2Name": { "type": "String" },
      "tag2Value": { "type": "String" },
      "tag3Name": { "type": "String" },
      "tag3Value": { "type": "String" },
      "tag4Name": { "type": "String" },
      "tag4Value": { "type": "String" },
      "tag5Name": { "type": "String" },
      "tag5Value": { "type": "String" }
    },
    "policyRule": {
      "if": {
        "anyOf": [
          { "field": "[concat('tags[', parameters('tag1Name'), ']')]", "exists": "false" },
          { "field": "[concat('tags[', parameters('tag2Name'), ']')]", "exists": "false" },
          { "field": "[concat('tags[', parameters('tag3Name'), ']')]", "exists": "false" },
          { "field": "[concat('tags[', parameters('tag4Name'), ']')]", "exists": "false" },
          { "field": "[concat('tags[', parameters('tag5Name'), ']')]", "exists": "false" }
        ]
      },
      "then": {
        "effect": "modify",
        "details": {
          "roleDefinitionIds": [
            "/providers/microsoft.authorization/roleDefinitions/b24988ac-6180-42a0-ab88-20f7382dd24c"
          ],
          "operations": [
            {
              "operation": "add",
              "field": "[concat('tags[', parameters('tag1Name'), ']')]",
              "value": "[parameters('tag1Value')]"
            },
            {
              "operation": "add",
              "field": "[concat('tags[', parameters('tag2Name'), ']')]",
              "value": "[parameters('tag2Value')]"
            },
            {
              "operation": "add",
              "field": "[concat('tags[', parameters('tag3Name'), ']')]",
              "value": "[parameters('tag3Value')]"
            },
            {
              "operation": "add",
              "field": "[concat('tags[', parameters('tag4Name'), ']')]",
              "value": "[parameters('tag4Value')]"
            },
            {
              "operation": "add",
              "field": "[concat('tags[', parameters('tag5Name'), ']')]",
              "value": "[parameters('tag5Value')]"
            }
          ]
        }
      }
    }
  },
  "type": "Microsoft.Authorization/policyDefinitions"
}
