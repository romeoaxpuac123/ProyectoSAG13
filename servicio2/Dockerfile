FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install cors --save

COPY . .

EXPOSE 4003

CMD ["node","servicio2.js"]
