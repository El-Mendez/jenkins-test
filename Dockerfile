FROM nginx:alpine

WORKDIR /dist

COPY ./dist /usr/share/nginx/html

