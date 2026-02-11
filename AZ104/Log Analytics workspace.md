Log Analytics workspace

https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-workspace-overview


### 🔹 1. Simple Windows Event Log query (last 24 hours)

```kql
Event
| where TimeGenerated >= ago(24h)
| take 10
```

---

### 🔹 2. Filter by Event Level (Errors only)

```kql
Event
| where TimeGenerated >= ago(24h)
| where Level == "Error"
```

---

### 🔹 3. Filter by Event ID (example: Event ID 4625 – failed logon)

```kql
Event
| where TimeGenerated >= ago(24h)
| where EventID == 4625
```

---

### 🔹 4. Filter by Computer Name

```kql
Event
| where TimeGenerated >= ago(24h)
| where Computer == "SERVER01"
```

---

### 🔹 5. Azure Activity Log (simple query)

```kql
AzureActivity
| where TimeGenerated >= ago(24h)
| take 10
```

---

### 🔹 6. Azure Sign-in Logs (basic)

```kql
SigninLogs
| where TimeGenerated >= ago(24h)
| take 10
```


