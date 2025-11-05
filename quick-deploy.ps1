# Quick Deploy Script for Church Business Application
# Simple one-command deployment

Write-Host "🏛️ Church Business Application - Quick Deploy" -ForegroundColor Green
Write-Host "===============================================" -ForegroundColor Green

# Stop any existing container
Write-Host "🔄 Stopping existing containers..." -ForegroundColor Cyan
docker stop church-business-container 2>$null | Out-Null
docker rm church-business-container 2>$null | Out-Null

# Build Angular app
Write-Host "🔄 Building Angular application..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

# Build Docker image
Write-Host "🔄 Building Docker image..." -ForegroundColor Cyan
docker build -t church-business-app .
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Docker build failed!" -ForegroundColor Red
    exit 1
}

# Run container
Write-Host "🔄 Starting container..." -ForegroundColor Cyan
$containerId = docker run -d -p 8081:80 --name church-business-container church-business-app

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Deployment successful!" -ForegroundColor Green
    Write-Host "🌐 Access your app at: http://localhost:8081" -ForegroundColor Yellow
    Write-Host "🆔 Container ID: $containerId" -ForegroundColor Blue
    Write-Host ""
    Write-Host "Quick Commands:" -ForegroundColor Blue
    Write-Host "  Stop:  docker stop church-business-container" -ForegroundColor White
    Write-Host "  Logs:  docker logs church-business-container" -ForegroundColor White
} else {
    Write-Host "❌ Container failed to start!" -ForegroundColor Red
}