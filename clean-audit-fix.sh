#!/usr/bin/env bash
set -e

# Default behavior
RUN_INSTALL=true
RUN_AUDIT=true

# Parse command-line flags
for arg in "$@"; do
  case $arg in
    --skip-install)
      RUN_INSTALL=false
      shift
      ;;
    --skip-audit)
      RUN_AUDIT=false
      shift
      ;;
    *)
      ;;
  esac
done

echo "🚀 Starting full clean + reinstall + audit fix process..."

# Find all package.json files recursively
find . -name "package.json" | while read -r pkg; do
  # Get directory containing package.json
  dir=$(dirname "$pkg")

  echo "----------------------------------------------"
  echo "📁 Processing $dir"
  echo "----------------------------------------------"

  cd "$dir"

  # 1️⃣ Delete node_modules and package-lock.json
  if [ -d "node_modules" ]; then
    echo "🧹 Removing node_modules..."
    rm -rf node_modules
  fi

  if [ -f "package-lock.json" ]; then
    echo "🧹 Removing package-lock.json..."
    rm -f package-lock.json
  fi

  # 2️⃣ Reinstall dependencies (optional)
  if [ "$RUN_INSTALL" = true ]; then
    echo "📦 Running npm install..."
    npm install
  else
    echo "⚠️  Skipping npm install"
  fi

  # 3️⃣ Run npm audit fix --force (optional)
  if [ "$RUN_AUDIT" = true ]; then
    echo "🛠️  Running npm audit fix --force..."
    npm audit fix --force || true
  else
    echo "⚠️  Skipping npm audit fix"
  fi

  # Return to the root
  cd - > /dev/null

  echo "✅ Done with $dir"
  echo
done

echo "🎉 All subprojects processed successfully!"
