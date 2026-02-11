Log Analytics workspace

https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-workspace-overview


sample
```
Event
| where TimeGenerated >= ago(24h)
| take 10
```
