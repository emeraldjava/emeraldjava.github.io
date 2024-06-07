FROM node:22.2.0-alpine
WORKDIR /usr/app
COPY package.json .
RUN npm install
COPY . .