FROM node:10.9

WORKDIR /usr/src/app

RUN npm install -g nodemon

COPY package* ./

RUN npm install

COPY . ./

EXPOSE 3000

ENTRYPOINT ["nodemon", "index.js"]