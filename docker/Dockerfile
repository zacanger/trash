FROM node:6.2.0
RUN apt-get update
RUN apt-get dist-upgrade -y --allow-unauthenticated --fix-missing
RUN apt-get install build-essential curl
ADD . /srv/
EXPOSE 3000

