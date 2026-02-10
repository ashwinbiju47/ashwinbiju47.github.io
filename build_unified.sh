#!/bin/bash

# Build v1 (Legacy)
echo "Building v1-legacy..."
cd v1-legacy
npm install
npm run build
cd ..

# Build v2 (Glassmorphic)
echo "Building v2-glassmorphic..."
cd v2-glassmorphic
npm install
npm run build
cd ..

# Merge
echo "Merging builds..."
rm -rf dist
mkdir -p dist/v1
cp -r v2-glassmorphic/dist/* dist/
cp -r v1-legacy/build/* dist/v1/

# Create a .nojekyll file to prevent GitHub from ignoring files starting with _
touch dist/.nojekyll

echo "Build complete in 'dist' directory."
echo "To deploy to GitHub Pages from this branch:"
echo "npx gh-pages -d dist"
