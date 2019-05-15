FROM ubuntu:18.0.4

WORKDIR /app

COPY package*.json ./

RUN apt install git 

RUN npm install

RUN npm install -g @angular/cli@1.7.1

COPY . .

EXPOSE 80

CMD npm start
