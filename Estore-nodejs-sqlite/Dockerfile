FROM node:16.6.2-alpine


COPY package.json package.json  

RUN npm install

COPY . .  

CMD ["npm","run", "start-server"]  

