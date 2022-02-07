# simple-school-app

This is app consist of one page you can access after installation from this [URL](http://localhost:4200/student/list).

## school-backend Installation

You have to build and deploy the school-backend using the following commands:

```bash
mvn clean install
java -jar school-demo-0.0.1-SNAPSHOT.jar
```
Also there is postman collection which contain all the curl urls
 
 [School-collection.postman_collection.json](
 https://github.com/mohammed-a-wadod/simple-school-app/blob/main/School-collection.postman_collection.json).

## school-front Installation

This is our frontend app which will display table of students that will be retrieved form the school-backend and it will be accessed through this [URL](http://localhost:4200/student/list).

## school-front Installation

You have to build and deploy the school-front using the following commands:

```bash
npm i
ng serve
```
Please note that school-front was built using angular 13
