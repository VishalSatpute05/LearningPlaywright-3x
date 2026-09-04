# QA Testing Cheatsheet – Linux Commands

---

## 1. LOG ANALYSIS & TROUBLESHOOTING

### View Logs
```bash
cat app.log                      # Display entire log file
tail app.log                     # Show last 10 lines
tail -100 app.log                # Show last 100 lines
tail -f app.log                  # Monitor logs in real-time (Ctrl+C to exit)
head -50 app.log                 # Show first 50 lines
less app.log                     # Page through log (press q to exit)
```

### Search Logs
```bash
grep ERROR app.log               # Find all ERROR entries
grep -i error app.log            # Case-insensitive search
grep -n ERROR app.log            # Show line numbers with matches
grep -c ERROR app.log            # Count ERROR occurrences
grep -E "ERROR|WARN|FATAL" app.log  # Search multiple patterns
grep Exception app.log           # Find Java exceptions
grep "2026-08-25" app.log        # Filter by date
grep "2026-08-25" app.log | grep ERROR  # Combined filters
```

### Analyze Multiple Logs
```bash
grep ERROR app.log | wc -l       # Count total ERROR entries
tail -f app.log | grep ERROR     # Monitor only errors in real-time
grep "user not found" app.log | wc -l  # Count specific errors
grep -r ERROR .                  # Search recursively in all files
```

### Time-Based Log Analysis
```bash
grep "2026-08-25 14:" app.log    # Logs from specific hour
grep "2026-08-25 14:30" app.log  # Logs from specific minute
tail -f app.log | grep "$(date +%Y-%m-%d)"  # Today's logs only
```

---

## 2. API TESTING

### Basic API Requests
```bash
curl https://api.example.com/users        # GET request
curl -X GET https://api.example.com/users # Explicit GET
curl -X POST https://api.example.com/users -d '{"name":"John"}'  # POST request
curl -I https://api.example.com           # Check response headers only
```

### Request with Headers & Data
```bash
curl -H "Content-Type: application/json" https://api.example.com/users
curl -H "Authorization: Bearer TOKEN" https://api.example.com/users
curl -X POST -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"123"}' \
  https://api.example.com/login
```

### Save Response
```bash
curl https://api.example.com/users > response.json
curl -o response.json https://api.example.com/users
```

### Test with JSON Parsing
```bash
curl https://api.example.com/users | jq              # Pretty-print JSON
curl https://api.example.com/users | jq '.data'      # Extract field
curl https://api.example.com/users | jq '.users[]'   # Extract array elements
curl https://api.example.com/users | jq '.status'    # Check status field
```

### Response Status & Timing
```bash
curl -i https://api.example.com/users                # Include headers in response
curl -w "@curl-format.txt" https://api.example.com   # Custom format output
curl -s -o /dev/null -w "%{http_code}\n" https://api.example.com  # Status code only
```

---

## 3. SERVER & INFRASTRUCTURE CHECKS

### Login & SSH
```bash
ssh user@hostname                 # Connect to remote server
ssh user@192.168.1.100            # Connect via IP address
ssh -p 2222 user@hostname         # Use custom SSH port
ssh user@server "ls -la /tmp"     # Execute command on remote server
```

### File Transfer
```bash
scp file.txt user@server:/tmp     # Upload file to server
scp -r folder user@server:/tmp    # Upload directory recursively
scp user@server:/tmp/file.txt .   # Download file from server
scp -r user@server:/tmp/logs .    # Download directory recursively
```

### Disk & Storage
```bash
df -h                             # Check disk space (human-readable)
du -sh reports                    # Check directory size
du -sh *                          # Show size of all files/folders in current directory
du -h | sort -hr | head -10       # Top 10 largest items
```

### Network Connectivity
```bash
ping google.com                   # Test network connectivity
curl -I https://example.com       # Check if service is reachable
ss -tuln                          # List all listening ports
ss -tuln | grep 8080              # Check if port 8080 is listening
netstat -an | grep LISTEN         # Alternative: show listening ports
curl -s http://localhost:8080 > /dev/null && echo "Service UP" || echo "Service DOWN"
```

---

## 4. PROCESS & PERFORMANCE MONITORING

### Check Running Processes
```bash
ps -ef                            # List all running processes
ps -ef | grep java                # Find Java processes
ps -ef | grep app.jar             # Find specific application
ps aux                            # Detailed process list with memory/CPU
ps aux | grep java | grep -v grep # Find Java processes (exclude grep itself)
```

### Monitor Performance
```bash
top                               # Real-time CPU, memory, and processes
free -h                           # RAM usage (human-readable)
free -h | grep Mem                # Show memory summary
iostat                            # Disk I/O statistics
```

### Stop Processes
```bash
kill PID                          # Gracefully stop process
kill -9 PID                       # Force kill process
pkill -f "app.jar"                # Kill by process name pattern
```

### Verify Application Is Running
```bash
ps -ef | grep java | grep -v grep && echo "App is running" || echo "App is down"
curl -s http://localhost:8080/health | jq '.status'  # Check health endpoint
```

---

## 5. DOCKER DEBUGGING

### Container Basics
```bash
docker ps                         # List running containers
docker ps -a                      # List all containers (including stopped)
docker images                     # List all Docker images
docker container ls               # Alternative: list containers
```

### View Logs
```bash
docker logs container-id          # Display container logs
docker logs -f container-id       # Stream logs in real-time
docker logs --tail 100 container-id  # Show last 100 lines
docker logs -f container-id 2>&1 | grep ERROR  # Monitor errors only
```

### Execute Commands
```bash
docker exec -it container-id bash          # Open interactive shell
docker exec -it container-id sh            # For Alpine Linux
docker exec container-id ps -ef            # Run command without shell
docker exec container-id curl localhost:8080/health  # Test internal endpoint
```

### Debug Container
```bash
docker inspect container-id       # View container configuration
docker stats container-id         # Live resource usage
docker top container-id           # Show processes inside container
docker logs --since 10m container-id  # Logs from last 10 minutes
```

### Container Management
```bash
docker stop container-id          # Gracefully stop
docker restart container-id       # Restart container
docker rm container-id            # Remove stopped container
docker network ls                 # List Docker networks
docker network inspect network-name  # View network details
```

---

## 6. KUBERNETES DEBUGGING

### View Resources
```bash
kubectl get pods                  # List all pods
kubectl get svc                   # List all services
kubectl get ns                    # List namespaces
kubectl get pods -n namespace     # Pods in specific namespace
kubectl get pods -o wide          # Show additional details (IP, Node)
```

### View Logs
```bash
kubectl logs pod-name             # Display pod logs
kubectl logs -f pod-name          # Stream logs in real-time
kubectl logs pod-name -c container-name  # Logs from specific container
kubectl logs -f pod-name --tail=100  # Last 100 lines with streaming
kubectl logs pod-name --previous  # Logs from previous instance (crashed pod)
```

### Inspect Pods
```bash
kubectl describe pod pod-name     # Full pod details and events
kubectl get pod pod-name -o yaml  # Pod configuration in YAML
kubectl exec -it pod-name -- bash # Open interactive shell in pod
kubectl exec pod-name -- curl localhost:8080/health  # Run command
```

### Pod Troubleshooting
```bash
kubectl get events --sort-by='.lastTimestamp'  # View cluster events
kubectl top pods                  # Show CPU/memory usage
kubectl describe node node-name   # Node resource status
kubectl get pod pod-name -o json | jq '.status'  # Check pod status
```

### Port Forwarding (Local Testing)
```bash
kubectl port-forward pod-name 8080:8080  # Forward pod port to localhost
kubectl port-forward svc/service-name 8080:8080  # Forward service port
```

---

## 7. FILE OPERATIONS & NAVIGATION

### Navigate & List Files
```bash
pwd                               # Print current directory
ls                                # List files
ls -la                            # List with hidden files and permissions
ls -lh                            # List with human-readable sizes
cd /logs                          # Change directory
cd ..                             # Go up one directory
find . -name "*.log"              # Find all .log files
```

### Create & Copy
```bash
touch testfile.txt                # Create empty file
mkdir test-results                # Create directory
cp file1.txt file2.txt            # Copy file
cp -r logs logs-backup            # Copy directory
```

### View File Content
```bash
cat file.txt                      # Display entire file
head -20 file.txt                 # First 20 lines
tail -20 file.txt                 # Last 20 lines
less file.txt                     # Page through file (q to exit)
wc -l file.txt                    # Count lines
```

---

## 8. USEFUL UTILITIES & PARSING

### JSON Processing
```bash
curl https://api.example.com/users | jq '.'              # Pretty-print
curl https://api.example.com/users | jq '.data[0].name'  # Extract nested value
curl https://api.example.com/users | jq '.[] | .status'  # Extract from array
cat response.json | jq '.errors | length'                # Count array items
```

### Sorting & Counting
```bash
sort users.txt                    # Sort alphabetically
sort -r users.txt                 # Reverse sort
sort users.txt | uniq             # Remove duplicates
wc -l file.txt                    # Count lines
wc -w file.txt                    # Count words
grep ERROR app.log | wc -l        # Count matching lines
```

### Pipes (Chain Commands)
```bash
cat app.log | grep ERROR | wc -l          # Count errors
ps -ef | grep java | grep -v grep         # Filter processes
grep "ERROR" app.log | head -10            # First 10 errors
tail -f app.log | grep "payment"          # Monitor specific pattern
```

### Compression
```bash
zip report.zip report.txt                 # Create ZIP
tar -czf logs.tar.gz logs/                # Create compressed tar
tar -xzf logs.tar.gz                      # Extract tar.gz
```

---

## 9. COMMON QA SCENARIOS

### Scenario: API Test Failed - Debug Response
```bash
# 1. Make request and save response
curl -i -X POST https://api.example.com/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com"}' > response.txt

# 2. View entire response
cat response.txt

# 3. Parse JSON response
cat response.txt | jq

# 4. Check specific field
cat response.txt | jq '.error'
```

### Scenario: Monitor Application Logs for Errors
```bash
# 1. Real-time monitoring
tail -f /var/log/app.log | grep -E "ERROR|EXCEPTION"

# 2. Count errors in last hour
grep "$(date +%Y-%m-%d\ %H)" /var/log/app.log | grep ERROR | wc -l

# 3. Get error summary
grep ERROR /var/log/app.log | cut -d: -f1 | sort | uniq -c
```

### Scenario: Container Health Check
```bash
# 1. Check if container is running
docker ps | grep my-app

# 2. View recent logs
docker logs --tail 50 my-app

# 3. Test internal endpoint
docker exec my-app curl localhost:8080/health | jq '.status'

# 4. Check resource usage
docker stats my-app --no-stream
```

### Scenario: Pod Troubleshooting (Kubernetes)
```bash
# 1. Check pod status
kubectl get pod my-pod -o wide

# 2. View detailed info
kubectl describe pod my-pod

# 3. Check logs
kubectl logs -f my-pod

# 4. If logs empty, check previous run
kubectl logs my-pod --previous

# 5. Execute debug command
kubectl exec -it my-pod -- bash
# Inside pod: curl localhost:8080/health
```

### Scenario: Port Connectivity Test
```bash
# 1. Check if port is listening
ss -tuln | grep 8080

# 2. Test connectivity
curl -s http://localhost:8080 > /dev/null && echo "✓ Port 8080 open" || echo "✗ Port 8080 closed"

# 3. Check from another server
ssh user@server "curl -s http://localhost:8080 && echo 'OK' || echo 'FAILED'"
```

### Scenario: Performance Analysis
```bash
# 1. Memory usage
free -h

# 2. Disk usage
df -h

# 3. Top processes
top -b -n 1 | head -20

# 4. Active connections
ss -tuln | grep LISTEN

# 5. Full system report
echo "=== Memory ===" && free -h && \
echo "=== Disk ===" && df -h && \
echo "=== Top Processes ===" && ps aux --sort=-%mem | head -5
```

---

## 10. QUICK REFERENCE – MOST ESSENTIAL COMMANDS

| Task | Command |
|------|---------|
| **Find logs with ERROR** | `grep ERROR app.log` |
| **Monitor logs live** | `tail -f app.log` |
| **Count errors** | `grep ERROR app.log \| wc -l` |
| **Test API** | `curl https://api.example.com/users` |
| **Parse JSON response** | `curl ... \| jq` |
| **Connect to server** | `ssh user@hostname` |
| **Transfer file** | `scp file.txt user@server:/tmp` |
| **Check port** | `ss -tuln \| grep 8080` |
| **Find running app** | `ps -ef \| grep java` |
| **View container logs** | `docker logs -f container-id` |
| **Check pod status** | `kubectl get pods` |
| **Check pod logs** | `kubectl logs -f pod-name` |
| **Disk usage** | `df -h` |
| **Memory usage** | `free -h` |

---

## 11. TERMINAL TIPS

```bash
Ctrl + C      # Stop running command
Ctrl + R      # Search command history (type to find)
Ctrl + L      # Clear screen
Tab           # Auto-complete command/filename
!!            # Re-run previous command
history       # Show command history
history | grep "curl"  # Find previous curl commands
clear         # Clear terminal
```

---

**Last Updated:** August 2026  
**For QA Testers & Quality Engineers**