@echo off
setlocal
set "DIR=%~dp0"
node --experimental-modules "%DIR%main.mjs"