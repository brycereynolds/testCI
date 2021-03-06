FROM node:0.12.2

RUN mkdir -p /usr/src/
WORKDIR /usr/src/

COPY package.json /usr/src/
RUN npm install
COPY ./app /usr/src/app

EXPOSE 80

CMD [ "npm", "start" ]