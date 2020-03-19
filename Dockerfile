FROM node:10
WORKDIR /nest
COPY package.json /nest
COPY . /nest
RUN npm install
CMD npm run start
EXPOSE 5000 