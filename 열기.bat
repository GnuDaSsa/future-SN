@echo off
rem 성남 미래지도 — 최신으로 받아서 바로 열기
cd /d "%~dp0"
git pull origin claude/upbeat-bohr-2b80f2
start "" index.html
