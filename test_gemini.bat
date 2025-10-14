@echo off
echo Test de la cle API Gemini...
echo.
curl -X POST "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyBFVVlEtuGIV2w3witaSGadI2G-vwnUjwA" -H "Content-Type: application/json" -d "{\"contents\":[{\"parts\":[{\"text\":\"Dis bonjour\"}]}]}"
echo.
echo.
pause
