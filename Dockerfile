FROM node:alpine

WORKDIR /app
ENV TZ=Asia/Makassar
COPY package*.json ./
# RUN npm install --silent
RUN npm install

# EXPOSE 8081