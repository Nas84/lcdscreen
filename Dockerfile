# Use the official node LTS runtime as a parent image
FROM node:dubnium-alpine

WORKDIR /lcdscreen

COPY package*.json  ./
COPY bin bin
COPY lib lib
COPY test test

# install all dependancies needed for the app without the dev ones
RUN npm install --production
# make program executable 
RUN chmod +x /lcdscreen/bin/lcdscreen.js
ENV PATH="/lcdscreen/bin:${PATH}"
