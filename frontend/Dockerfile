FROM node:20-slim AS build

WORKDIR /app

# CRA bakes env vars at build time; declare ARG/ENV before install/build
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .
RUN NODE_OPTIONS="--max-old-space-size=460" npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# custom nginx config will be copied if provided
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
