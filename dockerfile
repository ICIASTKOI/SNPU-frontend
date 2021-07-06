# Stage 1: Build an Angular Docker Image
FROM node as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
ARG configuration=production
RUN npm run build -- --outputPath=./dist/out --configuration $configuration
# Stage 2, use the compiled app, ready for production with Nginx
FROM nginx
COPY --from=build /app/dist/out/ /usr/share/nginx/html
COPY  ssl/ca.crt  /etc/ssl/
COPY  ssl/private.key /etc/ssl/
COPY /nginx.conf /etc/nginx/conf.d/default.conf
# docker run --name example-version -d -p 80:80 -p 443:443  hubertvistula/snpu.frontend