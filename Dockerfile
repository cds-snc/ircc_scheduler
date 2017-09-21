FROM node:8.4-alpine
MAINTAINER Mike Williamson <mike.williamson@tbs-sct.gc.ca>

WORKDIR /app
USER node
ADD . .

EXPOSE 3001
CMD yarn start
