FROM ghcr.io/puppeteer/puppeteer:latest
WORKDIR /app
COPY package.json /app
COPY src /app/src

RUN npm install

CMD ["npm", "start"]