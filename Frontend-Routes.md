# Frontend Routes 

| FE Route       | Backend API              |
| -----------    | -----------              |
| /signup        | POST /users              |
| /login         | GET /users               |
| /cars/new      | POST /cars               |  
| /cars          | GET /cars                |
| /cars/:id      | GET /cars/:id            |
|                | DELETE /cars/:id         |
|                | POST /favorites/:car_id  |
|                | DELETE /favorites/:car_id| 
| /cars/:id/edit | UPDATE /cars/:id         |
| /favorites     | GET /favorites           | 
|                | DELETE /favorites/:car_id|