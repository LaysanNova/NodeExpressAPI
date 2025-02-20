FROM node:20.17.0
WORKDIR /server
COPY package.json /server
RUN npm install
COPY . /server
CMD ["node","server.js"]