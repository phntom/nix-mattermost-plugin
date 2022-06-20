FROM node:16.4
WORKDIR /app
COPY . .
WORKDIR /app/webapp
RUN npm install
RUN npm test
RUN npm run build
