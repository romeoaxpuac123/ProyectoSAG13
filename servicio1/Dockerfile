FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install cors --save

COPY . .

EXPOSE 3003

CMD ["node","login.js"]