#!/bin/bash
set -e

echo "pulling changes from repo"
git pull

file_exists() {
  if [ ! -f "$1" ]; then
    echo "File $1 is missing. Please acquire it from another developer."
    exit 1
  else
    echo "File $1 exists."
  fi
}

cd client || exit 1
rm -rf node_modules
echo "Removed client node_modules"

echo "Checking if the client configuration files are setup..."
file_exists ".env"
echo "All client configuration files in client exist!"

echo "Installing client packages"
npm i 
echo "Make sure to 'npm start' the front end"
cd ..

echo "Removing server node_modules"
rm -rf node_modules

echo "Checking if the server configuration files are setup..."
cd config
file_exists ".env"
cd ..

echo "All server configuration files exist!"

echo "Installing server packages"
npm i

echo "starting with PM2"
pm2 start npm -- run -- server