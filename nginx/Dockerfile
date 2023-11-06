FROM nginx:1.19.10
MAINTAINER JsonZou
COPY html/ /html/
ADD nginx.conf /etc/nginx/nginx.conf
ADD entrypoint.sh /
EXPOSE 8080/tcp
ENTRYPOINT ["/bin/bash", "entrypoint.sh"]