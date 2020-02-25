FROM nginx
COPY ..... /usr/share/nginx/html/

# install node
# RUN apt-get update && 
RUN apk add node
RUN npm install -g json-server
COPY db.json /data
EXPOSE 3004
CMD json-server --port 3004 --watch /data/db.json