FROM node:10.15
MAINTAINER miztaka@honestyworks.jp

ENV LC_ALL C.UTF-8

#RUN apt-get update && \
#    apt-get install -y build-essential libtool-bin autoconf
#RUN apt-get install -y build-essential libtool-bin autoconf

WORKDIR /app

COPY . ./

RUN npm install 

CMD npm start

