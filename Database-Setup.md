# PSQL Database Schema 

### users 
| Column Name | Datatype    | Constraints |
| ----------- | ----------- | ----------- |
| email       | VARCHAR(100)| unique      |
| pw_hash     | TEXT        | not null    |
| name        | VARCHAR(100)| not null    | 

### cars 
| Column Name | Datatype    | Constraints        |
| ----------- | ----------- | -----------        |
| make        | TEXT        | not null           |
| model       | TEXT        | not null           |
| year        | INT         | not null           |
| mileage     | INT         |                    |
| color       | TEXT        |                    |
| vin         | VARCHAR(55) | not null           |
| doors       | INT         |                    |
| transmission| ENUM        | [manual, automatic]|    

### car_images
| Column Name | Datatype    | Constraints         |
| ----------- | ----------- | -----------         |
| car_id      | INT         | f_key: ref (cars.id)|
| image_url   | INT         |                     | 

### favorites 
| Column Name | Datatype    | Constraints          |
| ----------- | ----------- | -----------          |
| car_id      | INT         | f_key: ref (cars.id) |
| user_id     | INT         | f_key: ref (users.id)|
