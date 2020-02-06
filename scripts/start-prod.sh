#!/bin/bash
# Helper script that will bring up the application for local development

set -e

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
echo "Removed node_modules"

echo "Checking if the configuration files are setup..."
file_exists ".env"

echo "All configuration files in client exist!"

npm ci 
npm run build

cd ..

rm -rf node_modules
echo "Removed node_modules"

echo "Checking if the configuration files are setup..."
cd config
file_exists ".env"
cd ..

echo "All configuration files exist!"

npm ci
npm start