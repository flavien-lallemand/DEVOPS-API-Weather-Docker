FROM node:17-alpine3.14

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

RUN npm i -g npm@8.11.0
COPY package*.json ./
COPY hello-world.js ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production


CMD [ "node", "hello-world.js" ]