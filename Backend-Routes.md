# Backend Routes Table 

| HTTP Method | Controller  | Action      | URL                |
| ----------- | ----------- | ----------- | -----------        |  
| POST        | Users       | CREATE      | /users             |
| GET         | Users       | SHOW        | /users/:id         |
| POST        | Cars        | CREATE      | /cars              |
| GET         | Cars        | INDEX       | /cars              |  
| GET         | Cars        | SHOW        | /cars/:id          |
| DELETE      | Cars        | DESTROY     | /cars/:id          |
| PUT         | Cars        | UPDATE      | /cars/:id          |
| POST        | Favorites   | CREATE      | /favorites/:car_id |
| DELETE      | Favorites   | DESTROY     | /favorites/:car_id |  
| GET         | Favorites   | INDEX       | /favorites         |