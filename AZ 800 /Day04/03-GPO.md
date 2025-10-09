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

Cmdlet       Description

New-GPO      Creates a new GPO.

New-GPLink      Links a GPO to a site, domain, or OU.

Get-GPInheritance  Gets Group Policy inheritance information for a specified domain or OU.

Set-GPInheritance  Blocks or unblocks inheritance for a specified domain or organizational unit.

Get-GPO     Gets one GPO or all the GPOs in a domain.



# What are .admx and .adml files?
All the settings in the Administrative Templates node of a GPO are stored in files. All currently supported operating systems store the settings in .admx files.

These settings use a standards-based XML file format known as .admx files. By default, Windows stores .admx files in the Windows\PolicyDefinitions folder, but you can store them in a central location.

The .admx files are language neutral. The plain language descriptions of the settings are not part of the .admx files. Instead, they're stored in language-specific .adml files. This means that administrators can review the same GPO and observe the policy descriptions in their own language because they can each use their own language-specific .adml files.

The PolicyDefinitions folder stores .adml files subfolders. Each language has its own folder. For example, the en-US folder stores the English files, and the es-ES folder stores the Spanish files. By default, only the .adml language files for the language of the installed operating system are present.

# What is the Central Store?
In domain-based enterprises, you can create a Central Store location for .admx files, which anyone with permissions to create or edit GPOs can access. The Group Policy Management Editor automatically reads and displays administrative templates policy settings from .admx files in the Central Store, and then ignores the .admx files stored locally. If the domain controller or Central Store is not available, the Group Policy Management Editor uses the local store.

The advantages of creating a Central Store are:

You ensure that whenever someone edits a GPO, the settings in the Administrative Templates node are always the same.
When Microsoft releases new administrative templates for new operating systems or apps, such as Office, you only need to update the administrative templates files in one location.
You must create the Central Store manually, and then update it manually on a domain controller. The domain controllers then use AD DS replication and DFS-R to replicate the data.

To create a Central Store for .admx and .adml files, create a folder and name it PolicyDefinitions in the \\FQDN\SYSVOL\FQDN\Policies location, where FQDN is the domain name for your AD DS domain.

For example, to create a Central Store for the Seattle.Contoso.com domain, create a PolicyDefinitions folder in the

```
\\Seattle.Contoso.com\SYSVOL\Seattle.Contoso.com\policies
```
