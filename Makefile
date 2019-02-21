install: install-deps

start:
	npm start

install-deps:
	npm install

build:
	rm -rf dist
	npm run build

test:
	npm test

lint:
	npx eslint . --ext .js --ext .jsx

.PHONY: test
