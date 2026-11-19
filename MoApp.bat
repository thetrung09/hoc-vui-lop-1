@echo off
chcp 65001 >nul
title Hoc Vui Lop 1
cd /d "%~dp0app"
if not exist node_modules (
  echo Dang cai dat lan dau...
  call npm install
)
echo Dang mo Hoc Vui Lop 1... (dong cua so nay de tat app)
start "" /min cmd /c "timeout /t 3 >nul & start "" msedge --app=http://127.0.0.1:5173 --start-fullscreen"
call npx vite --port 5173 --host 127.0.0.1 --strictPort
