dev:
	API_TOKEN=yesguy API_HOST=esqa.moneris.com STORE_ID=store3 docker-compose up
build:
	docker-compose build
setup:
	bin/setup
test:
	jest --projects web/ api/
