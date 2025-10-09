# GPO inheritance

GPO inheritance means that a Group Policy applied at a higher level (like a domain or parent OU) is automatically passed down and applied to lower levels (like child OUs or users/computers inside it).
# Block Inheritance
You can configure a domain or OU to prevent the inheritance of policy settings. This is known as blocking inheritance. To block inheritance, right-click or access the context menu for the domain or OU in the GPMC console tree, and then select Block Inheritance.

![image](https://learn.microsoft.com/en-us/training/wwl-windows-server/implement-group-policy-objects/media/m8-group-policy-5-f65ab601.png)

# Enforce a GPO link

Additionally, you can set a GPO link to be enforced. To enforce a GPO link, right-click or access the context menu for the GPO link in the console tree, and then select Enforced from the shortcut menu.
![image](https://learn.microsoft.com/en-us/training/wwl-windows-server/implement-group-policy-objects/media/m8-group-policy-6-69631719.png)

This GPO should apply no matter what, even if other GPOs try to override it.


You can also use Windows PowerShell cmdlets to manage GPOs and their settings, including those described in the following table.

Cmdlet

Description

New-GPO

Creates a new GPO.

New-GPLink

Links a GPO to a site, domain, or OU.

Get-GPInheritance

Gets Group Policy inheritance information for a specified domain or OU.

Set-GPInheritance

Blocks or unblocks inheritance for a specified domain or organizational unit.

Get-GPO

Gets one GPO or all the GPOs in a domain.
