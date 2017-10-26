.SILENT:
.PHONY: help install clean test build

# include .env

# Variables
.DEFAULT_GOAL= help
COM_COLOR   = \033[0;34m
OBJ_COLOR   = \033[0;36m
OK_COLOR    = \033[0;32m
ERROR_COLOR = \033[0;31m
WARN_COLOR  = \033[0;33m
NO_COLOR    = \033[m

help:
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-10s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

install: package.json ## Install project dependencies
	echo "$(OBJ_COLOR)Installing dependencies$(NO_COLOR)"
	yarn	

clean: ## Clean dist folder
	echo "$(OBJ_COLOR)Cleaning dist folder$(NO_COLOR)"
	rm -f dist/*.js

build: install ## Builds the library with rollup
	echo "$(OBJ_COLOR)I rollup, I rollup...$(NO_COLOR)"
	yarn run build	

test: install ## Run Jest tests
	echo "$(OBJ_COLOR)Running tests...$(NO_COLOR)"
	yarn run test