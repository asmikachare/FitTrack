FROM node:20-slim

WORKDIR /app

# install deps
COPY package*.json ./
RUN npm ci --omit=dev

# copy source
COPY . .

EXPOSE 3001

CMD ["node", "index.js"]
