FROM node:14.17.0
RUN npm config set registry https://registry.npm.taobao.org
WORKDIR /home/www/express
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:1.21.1
RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
COPY --from=0 /home/www/express/build/ /usr/share/nginx/html/

HEALTHCHECK --interval=30s --timeout=10s --retries=6 \
  CMD curl -fs http://localhost/ || exit 1
