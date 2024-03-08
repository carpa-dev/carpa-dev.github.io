.PHONY: dev
dev:
	hugo serve
 
# clean up and build
.PHONY: build
build:
	rm -rf public
	hugo --minify
 
