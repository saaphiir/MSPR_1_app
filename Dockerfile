FROM node:21-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --force --production

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
