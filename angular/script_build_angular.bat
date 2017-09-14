@echo off

set WORKSPACE="D:\Users\flambine\Documents\Projet\EcoEmballage\SOURCE\Eco-Emballage\AngularJS source-Lot3"

echo "--------------------STEP1--------------------"
echo "------------------- LINK --------------------"
cd %WORKSPACE%\edc-commons
call npm link

cd %WORKSPACE%\edc
call npm link edc-commons

cd %WORKSPACE%\relationClient
call npm link edc-commons

cd %WORKSPACE%\declaration
call npm link edc-commons
call npm link

cd %WORKSPACE%\edc
call npm link declaration

cd %WORKSPACE%\relationClient
call npm link

cd %WORKSPACE%\edc
call npm link relationClient

echo "--------------------STEP2--------------------"
echo "------------------- INSTALL -----------------"

cd %WORKSPACE%\edc-commons
call npm install

cd %WORKSPACE%\relationClient
call npm install

cd %WORKSPACE%\declaration
call npm install

cd %WORKSPACE%\edc
call npm install


echo "--------------------STEP3--------------------"
echo "------------------- BUILD -------------------"

cd %WORKSPACE%\edc-commons
call gulp build

cd %WORKSPACE%\relationClient
call gulp build

cd %WORKSPACE%\declaration
call gulp build

cd %WORKSPACE%\edc
call gulp build
 