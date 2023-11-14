FROM nginx:1.19.10
MAINTAINER JsonZou
COPY agentflowpages/ /agentflowpages/
ADD nginx.conf /etc/nginx/nginx.conf
ADD nginx.crt /etc/nginx/nginx.crt
ADD nginx.key /etc/nginx/nginx.key
ADD entrypoint.sh /
EXPOSE 80/tcp
ENTRYPOINT ["/bin/bash", "entrypoint.sh"]