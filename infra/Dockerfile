FROM nginx:1.20.2-alpine
WORKDIR /app

COPY build .

COPY ./infra/nginx.conf /etc/nginx/nginx.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]
