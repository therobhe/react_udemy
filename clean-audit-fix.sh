#!/usr/bin/env bash

# Exit immediately if a command fails
set -e

echo "🚀 Starting full clean + reinstall + audit fix process..."

# Loop through all subdirectories in the current folder
for d in */; do
  # Skip folders without a package.json
  if [ -f "$d/package.json" ]; then
    echo "----------------------------------------------"
    echo "📁 Processing $d"
    echo "----------------------------------------------"

    cd "$d"

    # 1️⃣ Delete node_modules and package-lock.json
    if [ -d "node_modules" ]; then
      echo "🧹 Removing node_modules..."
      rm -rf node_modules
    fi

    if [ -f "package-lock.json" ]; then
      echo "🧹 Removing package-lock.json..."
      rm -f package-lock.json
    fi

    # 2️⃣ Reinstall dependencies
    echo "📦 Running npm install..."
    npm install

    # 3️⃣ Run npm audit fix --force
    echo "🛠️  Running npm audit fix --force..."
    npm audit fix --force || true  # don't stop on audit errors

    # Back to root
    cd ..

    echo "✅ Done with $d"
    echo
  fi
done

echo "🎉 All subprojects processed successfully!"
