@echo off
setlocal
cd /d "%~dp0"

where py >nul 2>nul
if %errorlevel%==0 (
  start "Website Hub local server" /min py -m http.server 4173 --bind 127.0.0.1
  timeout /t 1 /nobreak >nul
  start "" http://127.0.0.1:4173/
  exit /b 0
)

where python >nul 2>nul
if %errorlevel%==0 (
  start "Website Hub local server" /min python -m http.server 4173 --bind 127.0.0.1
  timeout /t 1 /nobreak >nul
  start "" http://127.0.0.1:4173/
  exit /b 0
)

start "" "%~dp0index.html"
echo Python was not found. Website Hub was opened directly as a local HTML file.
echo Keep this folder in a stable location and use the in-app backup feature regularly.
pause
