FROM node:18

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
#RUN npm install --silent
RUN ls

COPY . .
RUN npm i
EXPOSE 5000

CMD ["npm", "start"]

# FROM node:15

# RUN npm install -g nodemon

# WORKDIR /usr/src/app

# COPY package*.json ./
# RUN npm install

# COPY . .

# EXPOSE 5000

# CMD ["npm", "start"]

