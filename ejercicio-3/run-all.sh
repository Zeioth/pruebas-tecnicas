#!/usr/bin/env sh
# Convinience script that will run all the 3 exercises for you


# EXERSICES
# =============================================================================

# Exersice 1
echo "RUNNING EXERSICE 1"
echo "===================================="
cd ./ejercicio-3-1
npm install && npm start
cd ..
echo "===================================="
echo "PRESS ENTER TO RUN → EXERSICE 2"
read

# Exersice 2
cd ./ejercicio-3-2
npm install && npm start
cd ..
echo "===================================="
echo "PRESS ENTER TO RUN → EXERSICE 3"
read

# Exersice 3
cd ./ejercicio-3-3
npm install && npm start
cd ..
echo "====================================="
echo "END OF run-all.sh"
echo "====================================="
echo "Thank you for considering my candidacy."
echo "x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x"
