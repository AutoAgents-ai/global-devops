FROM nginx:1.19.10
MAINTAINER JsonZou
COPY agentflowpages/ /agentflowpages/
COPY landingpages/ /landingpages/
ADD nginx.conf /etc/nginx/nginx.conf
ADD entrypoint.sh /
EXPOSE 80/tcp
ENTRYPOINT ["/bin/bash", "entrypoint.sh"]