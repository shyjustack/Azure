## What is Azure Policy?
Azure Policy is a service in Microsoft Azure that helps you enforce rules and standards across your cloud resources. It makes sure everything in your environment follows your organization’s requirements.

### Why do we need it?

To stay compliant with company or industry standards.
To avoid mistakes like creating resources in the wrong region or using insecure settings.
To automate governance instead of checking everything manually.


### How does it work?

Define a Policy – A rule you want to enforce (e.g., “All VMs must use a specific size”).
Assign the Policy – Apply it to a scope (like a subscription, resource group, or resource).
Evaluate & Remediate – Azure checks resources and reports if they comply or not. Some policies can fix issues automatically.


### Examples of Policies

Allowed Locations: Resources can only be created in UAE or Europe.
Tagging: Every resource must have a “Department” tag.
Security: Storage accounts must use encryption.


### Key Benefits

Consistency: All resources follow the same rules.
Compliance: Helps meet legal or business standards.
Automation: No need for manual checks.

### Azure policy 
https://github.com/Azure/azure-policy/tree/master/built-in-policies
