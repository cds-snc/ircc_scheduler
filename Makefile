run:
	docker-compose -f prod.yml -p prod up
dev:
	docker-compose -f dev.yml -p dev up
build:
	bin/build_projects
	docker-compose -f prod.yml build
push:
	docker-compose -f prod.yml push
setup:
	bin/setup
test:
	jest --projects ui/ api/
