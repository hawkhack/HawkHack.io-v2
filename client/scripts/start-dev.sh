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

echo "Checking if the configuration files are setup..."
file_exists ".env"
echo "All configuration files exist!"

echo "Setting up the frontend application..."
cd writerApp || exit 1
npm ci

echo "Excellent, frontend application is setup. You will need to run 'npm start' in order for JS to compile"
cd ..

echo "Bringing up development server."
# Always pull the latest images
docker-compose pull
# Always remove everything first as we are using custom docker networks and we
# can run into ip address conflicts because of reasons.
docker-compose down
docker-compose up


