# TODO API - Node/Mongodb 
[![Build Status](https://travis-ci.org/rajzshkr/todoapi.svg?branch=master)](https://travis-ci.org/rajzshkr/todoapi) [![Dependency Status](https://david-dm.org/rajzshkr/todoapi.svg)](https://david-dm.org/rajzshkr/todoapi) [![devDependency Status](https://david-dm.org/rajzshkr/todoapi/dev-status.svg)](https://david-dm.org/rajzshkr/todoapi#info=devDependencies)
[![codecov.io](https://codecov.io/github/rajzshkr/todoapi/coverage.svg?branch=master)](https://codecov.io/github/rajzshkr/todoapi?branch=master)

Front end is changing day by day and we have to learn lot more stuffs. When we start learning a new framework or library, first thing is recommended to build a todo list which helps in doing all CRUD functions. But there is no solid backend/library available to make use of it to build a todo list.

This project is to help the front end engineers to build a todo app using this api without worring about the backend.

####Documentation

###Get all Todo:

url -  http://apitodo.herokuapp.com/api/todos   
method - get

```javascript
Success Response:

{
  status: true,
  todo :[{
  		"_id":"56e7975dbf17876b095a0f21","todo":"From mock","__v":0,"created_by":"2016-03-15T05:02:21.041Z","completed":false
  }]
}

Error Response:

{status: false, error: "Message"}
```

###Post a todo

url - http://apitodo.herokuapp.com/api/todos/
method - post
params: {todo: "Your todo"} 

Note - By default it is marked as not completed

```javascript

Success Response:

{
  status: true,
  todo:[{
  		"_id":"56e7975dbf17876b095a0f21","todo":"From mock","__v":0,"created_by":"2016-03-15T05:02:21.041Z","completed":false
  }]
}

Error Response:

{status: false, error: "Message"}


```

###Update status

url: http://apitodo.herokuapp.com/api/todos/_id

method - put

params: {completed: status }

status - boolean value

```javascript

Success Response:

{status: true, message: "Status updated successfully"}

Error Response:
{status: false, error: "Status not updated"}

```
###Deleting a todo
url: http://apitodo.herokuapp.com/api/todos/_id
method: delete

```javascript

Success Response:

{status: true, message: "Todo deleted successfully"}

Error Response:

{status: false, error: "Deleting todo is not successful"}
```


