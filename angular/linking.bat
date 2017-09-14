@echo off

cd edc-commons
call npm link

cd ..\edc
call npm link edc-commons

cd ..\relationClient
call npm link edc-commons

cd ..\declaration
call npm link edc-commons
call npm link

cd ..\edc
call npm link declaration

cd ..\relationClient
call npm link

cd ..\edc
call npm link relationClient

call npm ls declaration edc-commons relationClient