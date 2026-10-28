@echo off
setlocal
cd /d "%~dp0"

where python >nul 2>nul
if errorlevel 1 (
  echo No se ha encontrado Python en el PATH.
  echo.
  echo Puedes abrir index.html directamente en el navegador:
  echo la aplicacion funciona sin servidor.
  echo.
  pause
  exit /b 1
)

echo Iniciando Rosterplaner Forever en http://127.0.0.1:8123/
echo Cierra la ventana del servidor para detenerlo.
start "Rosterplaner Forever - servidor" cmd /k "python -m http.server 8123 --bind 127.0.0.1"
timeout /t 1 >nul
start "" "http://127.0.0.1:8123/"
exit /b 0
