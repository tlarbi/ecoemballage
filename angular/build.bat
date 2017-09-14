@echo off
set root="D:\mk-workspace\DSI-MOE\Ecd-PortailClient\Src.Capgemini\AngularJS source-Lot3"

if %1==-re goto re
if %1==-r goto r
if %1==-e goto e
if %1==-d goto d
if %1==-de goto de


for %%x in (%root%\edc-commons, %root%\declaration, %root%\relationClient, %root%\edc) do (
   cd %%x
   echo.
   echo entering %%x
   gulp build
   echo. 
)
goto eof

:re
for %%x in (%root%\edc-commons, %root%\relationClient, %root%\edc) do (
   cd %%x
   echo.
   echo entering %%x
   gulp build
   echo. 
)
goto eof
 
:r
for %%x in (%root%\relationClient, %root%\edc) do (
   cd %%x
   echo.
   echo entering %%x
   gulp build
   echo. 
)
goto eof

:e
for %%x in (%root%\edc-commons, %root%\edc) do (
   cd %%x
   echo.
   echo entering %%x
   gulp build
   echo. 
)
goto eof

:d
for %%x in (%root%\declaration, %root%\edc) do (
   cd %%x
   echo.
   echo entering %%x
   gulp build
   echo. 
)
goto eof

:de
for %%x in (%root%\edc-commons, %root%\declaration, %root%\edc) do (
   cd %%x
   echo.
   echo entering %%x
   gulp build
   echo. 
)
goto eof
 
:eof