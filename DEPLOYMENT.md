# Church Business Application - Deployment Scripts

This directory contains PowerShell scripts for building and deploying the Church Business Angular application using Docker.

## Scripts Available

### 1. `deploy.ps1` - Main Deployment Script
The comprehensive deployment script with multiple options.

**Usage:**
```powershell
.\deploy.ps1 [OPTIONS]
```

**Options:**
- `-ImageName` - Docker image name (default: church-business-app)
- `-ContainerName` - Docker container name (default: church-business-container)
- `-Port` - Host port to map to container port 80 (default: 8081)
- `-SkipBuild` - Skip Angular build step
- `-CleanUp` - Remove existing containers and images
- `-Help` - Show help message

**Examples:**
```powershell
# Basic deployment
.\deploy.ps1

# Deploy on a different port
.\deploy.ps1 -Port 9000

# Clean up and redeploy
.\deploy.ps1 -CleanUp

# Skip Angular build (if already built)
.\deploy.ps1 -SkipBuild -Port 8082
```

### 2. `quick-deploy.ps1` - Simple One-Command Deployment
Quick deployment script for basic usage without parameters.

**Usage:**
```powershell
.\quick-deploy.ps1
```

This script will:
- Build the Angular application
- Create Docker image
- Run container on port 8081

### 3. `cleanup.ps1` - Cleanup Script
Removes Docker containers, images, and build artifacts.

**Usage:**
```powershell
.\cleanup.ps1
```

## Prerequisites

1. **Docker Desktop** - Must be installed and running
2. **Node.js & npm** - For building the Angular application
3. **PowerShell** - Scripts are designed for PowerShell

## Quick Start

1. Navigate to the church-business directory:
   ```powershell
   cd church-business
   ```

2. Run the deployment script:
   ```powershell
   .\deploy.ps1
   ```

3. Access your application at: http://localhost:8081

## Troubleshooting

### Docker Not Running
If you get "Docker is not running" error:
- Start Docker Desktop
- Wait for it to fully initialize
- Try again

### Port Already in Use
If port 8081 is already in use:
```powershell
.\deploy.ps1 -Port 8082
```

### Build Failures
If Angular build fails:
1. Ensure you're in the correct directory
2. Run `npm install` first
3. Check for any TypeScript errors

### Container Issues
To view container logs:
```powershell
docker logs church-business-container
```

To manually stop/remove containers:
```powershell
docker stop church-business-container
docker rm church-business-container
```

## File Structure

After running the deployment script, you'll have:
- `dist/` - Angular build output
- `dockerfile` - Docker configuration
- `nginx.conf` - Nginx web server configuration
- Docker image: `church-business-app`
- Running container: `church-business-container`