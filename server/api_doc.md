# GYM-FREAKS API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `GET /threads`
- `GET /threads/byuser`
- `GET /threads/:id`
- `POST /threads`
- `DELETE /threads/:id`
- `UPDATE /threads/:id`
- `GET /comments/:threadid`
- `POST /comments/:threadid`
- `DELETE /comments/:threadid/:id `


&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "phoneNumber":"integer"
}
```

_Response (201 - Created)_

```json
{
    "id": 11,
    "name": "gym freaks",
    "email": "gym.freaks.h8@gmail.com",
    "password": "$2a$10$Rmgvsg02897q8Rq8F15BteC6zXZFut0ri0IGl9Wx4jSRqYANq9f9e",
    "phoneNumber": "0811824665",
    "updatedAt": "2022-01-26T12:07:01.559Z",
    "createdAt": "2022-01-26T12:07:01.559Z"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Password is required"
}
```
&nbsp;

## 2. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsIm5hbWUiOiJneW0gZnJlYWtzIiwiZW1haWwiOiJneW0uZnJlYWtzLmg4QGdtYWlsLmNvbSIsImlhdCI6MTY0MzE5OTAxM30.ZTXu45TqKWd__twI7zStDAdJy6JfUGpNDRzHjVlmwBg"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```
&nbsp;

## 3. GET /threads

Description:
- Get all threads from database

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "id": 7,
        "title": "WTA bulking",
        "description": "mautanya nih ganti",
        "createdAt": "2022-01-25T05:46:01.104Z",
        "updatedAt": "2022-01-25T07:26:54.199Z",
        "userId": 2,
        "User": {
            "id": 2,
            "name": "ade rai",
            "email": "anggorego124@gmail.com",
            "password": "$2a$10$GZk/navsBxwFthEpBRFphu.9khLGHdlTrzCv3reUseJdgMAYEj9hi",
            "phoneNumber": "0811824665",
            "createdAt": "2022-01-25T05:12:36.154Z",
            "updatedAt": "2022-01-25T05:12:36.154Z"
        },
        "Comments": [
            {
                "id": 1,
                "description": "gn makan goreng2an, minum kopi sebelum latihan , jgn makan tepung2, ",
                "createdAt": "2022-01-25T06:02:03.930Z",
                "updatedAt": "2022-01-25T06:02:03.930Z",
                "userId": 1,
                "threadId": 7
            },
            {
                "id": 2,
                "description": "wuih terima kasih banyak gan infonya",
                "createdAt": "2022-01-25T06:36:49.804Z",
                "updatedAt": "2022-01-25T06:36:49.804Z",
                "userId": 2,
                "threadId": 7
            },
  
        ]
    },
    {
        "id": 9,
        "title": "WTA nodemailer",
        "description": "gan ane mau tanya soal pake nodemailer",
        "createdAt": "2022-01-25T08:34:29.948Z",
        "updatedAt": "2022-01-25T08:34:29.948Z",
        "userId": 3,
        "User": {
            "id": 3,
            "name": "anggoro",
            "email": "sanrego124@gmail.com",
            "password": "$2a$10$d28VQM6V1Xcit.Z4QdhtCeevXvE7mT9KUNYIRhBAN3d.sx.h2bFe6",
            "phoneNumber": "0811824665",
            "createdAt": "2022-01-25T08:31:38.492Z",
            "updatedAt": "2022-01-25T08:31:38.492Z"
        },
        "Comments": [
            {
                "id": 7,
                "description": "kalo untuk bulking gimana ya ?",
                "createdAt": "2022-01-25T08:36:39.364Z",
                "updatedAt": "2022-01-25T08:36:39.364Z",
                "userId": 2,
                "threadId": 9
            },
            {
                "id": 8,
                "description": "kalo untuk bulking gimana ya ?",
                "createdAt": "2022-01-25T14:57:30.863Z",
                "updatedAt": "2022-01-25T14:57:30.863Z",
                "userId": 2,
                "threadId": 9
            },
        ]
    },
  ...,
]
```

&nbsp;

## 4. GET /threads/byuser

Description:
- Get all threads from login user database

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "id": 7,
        "title": "WTA bulking",
        "description": "mautanya nih ganti",
        "createdAt": "2022-01-25T05:46:01.104Z",
        "updatedAt": "2022-01-25T07:26:54.199Z",
        "userId": 2,
        "User": {
            "id": 2,
            "name": "ade rai",
            "email": "anggorego124@gmail.com",
            "password": "$2a$10$GZk/navsBxwFthEpBRFphu.9khLGHdlTrzCv3reUseJdgMAYEj9hi",
            "phoneNumber": "0811824665",
            "createdAt": "2022-01-25T05:12:36.154Z",
            "updatedAt": "2022-01-25T05:12:36.154Z"
        },
        "Comments": [
            {
                "id": 1,
                "description": "gn makan goreng2an, minum kopi sebelum latihan , jgn makan tepung2, ",
                "createdAt": "2022-01-25T06:02:03.930Z",
                "updatedAt": "2022-01-25T06:02:03.930Z",
                "userId": 1,
                "threadId": 7
            },
            {
                "id": 2,
                "description": "wuih terima kasih banyak gan infonya",
                "createdAt": "2022-01-25T06:36:49.804Z",
                "updatedAt": "2022-01-25T06:36:49.804Z",
                "userId": 2,
                "threadId": 7
            },
  
        ]
    },
    .....
]
```

&nbsp;


## 5. GET /threads/:id

Description:
- Get thread by id from database

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
 {
    "id": 6,
    "title": "WTA tentang variasi latihan leg",
    "description": " description ",
    "createdAt": "2022-01-25T04:44:20.699Z",
    "updatedAt": "2022-01-25T04:44:20.699Z",
    "userId": 1,
    "Comments": [
        {
            "id": 21,
            "description": "oi kemane aje lo ? ngegym bareng lah",
            "createdAt": "2022-01-26T11:29:08.730Z",
            "updatedAt": "2022-01-26T11:29:08.730Z",
            "userId": 2,
            "threadId": 6,
            "User": {
                "id": 2,
                "name": "ade rai",
                "email": "anggorego124@gmail.com",
                "password": "$2a$10$GZk/navsBxwFthEpBRFphu.9khLGHdlTrzCv3reUseJdgMAYEj9hi",
                "phoneNumber": "0811824665",
                "createdAt": "2022-01-25T05:12:36.154Z",
                "updatedAt": "2022-01-25T05:12:36.154Z"
            }
        }
    ]
}
]
```

&nbsp;

## 6. POST /threads

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (201 - created)_

```json
{
    "id": 18,
    "title": "WTS  belt weight liftting ",
    "description": "gan ane mau jual belt untuk deadlift kondisi masih ok, buka di Rp.500.000 (nego)",
    "userId": 11,
    "updatedAt": "2022-01-26T12:21:05.399Z",
    "createdAt": "2022-01-26T12:21:05.399Z"
}
```
&nbsp;

## 7. DELETE /threads/:id

Description:
- Delete thread by id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
    "message": "Threads success to delete"
}
```

_Response (403 - Not Found)_

```json
{
    "message": "Unathorized"
}
```

&nbsp;

## 8. UDPATE /threads/:id

Description:
- Update products by id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
    "result": {
        "id": 20,
        "title": "WTS plate 10kg (4pcs) ",
        "description": "ane mau jual nih gan bu",
        "createdAt": "2022-01-26T12:21:58.989Z",
        "updatedAt": "2022-01-26T12:29:42.058Z",
        "userId": 11
    }
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Thread not found"
}
```

&nbsp;

## 9. GET /comments/:threadid

Description:
- Get all comments by thread id from database

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "id": 7,
        "description": "kalo untuk bulking gimana ya ?",
        "createdAt": "2022-01-25T08:36:39.364Z",
        "updatedAt": "2022-01-25T08:36:39.364Z",
        "userId": 2,
        "threadId": 9
    },
 .....
]

```

&nbsp;

## 10. POST /comments/:threadid

Description:
- POST comments by thread id from database

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "id": 7,
        "description": "kalo untuk bulking gimana ya ?",
        "createdAt": "2022-01-25T08:36:39.364Z",
        "updatedAt": "2022-01-25T08:36:39.364Z",
        "userId": 2,
        "threadId": 9
    },
]

```


&nbsp;

## 11. DELETE /comments/:threadid/:id

Description:
- DELETE comments by id on a thread  from database

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
  {
    "message": "Comment success to delete "
  }
]

```

_Response (404 - Not Found)_

```json
[
  {
    "message": "Comment not found"
  }
  OR
  {
    "message": "Thread not found"
  }
]

```

&nbsp;

## Global Error



_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```


