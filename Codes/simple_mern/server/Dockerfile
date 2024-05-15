FROM node:18

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
#RUN npm install --silent
RUN ls -al

RUN npm i
COPY . .
EXPOSE 5000

CMD ["npm", "start"]
