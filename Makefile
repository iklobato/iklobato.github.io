.PHONY: help install run build clean serve

# Default target
.DEFAULT_GOAL := help

# Variables
BUNDLE := bundle
JEKYLL := bundle exec jekyll
PORT := 4000
HOST := localhost

help: ## Show this help message
	@echo "Available commands:"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

install: ## Install Jekyll dependencies
	@echo "========================================="
	@echo "Installing Jekyll dependencies..."
	@echo "========================================="
	@echo "Checking for bundle..."
	@which bundle || (echo "Error: bundle not found. Install with: gem install bundler" && exit 1)
	@echo "✓ Bundler found: $$(bundle --version)"
	@echo ""
	@echo "Installing gems to vendor/bundle..."
	$(BUNDLE) install --path vendor/bundle --verbose
	@echo ""
	@echo "========================================="
	@echo "✓ Dependencies installed successfully"
	@echo "========================================="

run: install ## Run Jekyll server locally (default: http://localhost:4000)
	@echo ""
	@echo "========================================="
	@echo "Starting Jekyll server..."
	@echo "========================================="
	@echo "Jekyll version: $$($(JEKYLL) --version 2>/dev/null || echo 'checking...')"
	@echo "Server URL: http://$(HOST):$(PORT)"
	@echo "Site URL: http://$(HOST):$(PORT)"
	@echo ""
	@echo "Press Ctrl+C to stop the server"
	@echo "========================================="
	@echo ""
	$(JEKYLL) serve --port $(PORT) --host $(HOST) --verbose

serve: run ## Alias for 'make run'

build: install ## Build the Jekyll site (output to _site/)
	@echo "Building Jekyll site..."
	$(JEKYLL) build
	@echo "✓ Site built in _site/"

clean: ## Clean generated files
	@echo "Cleaning generated files..."
	rm -rf _site .jekyll-cache .jekyll-metadata
	@echo "✓ Cleaned"

clean-all: clean ## Clean all generated files including vendor directory
	@echo "Cleaning all files including dependencies..."
	rm -rf _site .jekyll-cache .jekyll-metadata vendor/bundle .bundle
	@echo "✓ All cleaned"

check: ## Check Jekyll configuration
	$(JEKYLL) doctor

