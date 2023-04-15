FROM node:18.12.1
#here we're defining the working directory

WORKDIR /usr/src/app

  #copying our dependencies to the container
 COPY ./package.json ./
 COPY ./package-lock.json ./

#copying all the files inside the container
COPY src /usr/src/app/src
COPY public /usr/src/app/public

  #installing all the dependencies that we copied 
RUN npm install 

  #exposing the port so we can access it further
EXPOSE 3000

  #starting the application
CMD ["npm", "start"]

