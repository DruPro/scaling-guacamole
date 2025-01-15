FROM node:latest
WORKDIR /App
COPY package*.json ./
COPY index.js ./index.js
RUN npm install

EXPOSE 3000
CMD [ "node","index.js" ]
