# boilerplate-app
prepared environment with empty react application

after cloning use ```docker build -t react-app-image . && docker run -it --name react-app -p 8080:8080 react-app-image```.

To stop, remove container and delete image ```docker stop react-app && docker rm react-app && docker image rm react-app-image```
