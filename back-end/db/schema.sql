DROP DATABASE IF EXISTS mileage_db;

CREATE DATABASE mileage_db;

\c mileage_db;

CREATE TABLE
    cars(
        id SERIAL PRIMARY key,
        make TEXT,
        model TEXT,
        year INT not null,
        odometer INT,
        vin TEXT,
        doors INT,     
        automatic_trans BOOLEAN
    );

 CREATE TABLE
    gas(
        id SERIAL PRIMARY key,
        business_use BOOLEAN NOT NULL,
        car_id INT REFERENCES cars (id) ON DELETE CASCADE,
        gas_spent INT NOT NULL,
        date TEXT
    );

CREATE TABLE
    trips(
        id SERIAL PRIMARY key,
        car_id INT REFERENCES cars (id) ON DELETE CASCADE,
        business_use BOOLEAN not null,
        miles INT NOT null,
        date TEXT,
        reason TEXT,	
        start_odometer INT,
        stop_odometer INT,
        favorite BOOLEAN NOT NULL
    );




-- CREATE TABLE  
--     users(
--         id SERIAL PRIMARY KEY,
--         email VARCHAR(100),
--         pw_hash TEXT,
--         name VARCHAR(100)
--         );




-- CREATE TABLE
--     receipts(
--         id SERIAL PRIMARY key,
--         receipt_url TEXT,
--         gas_id INT REFERENCES gas (id) ON DELETE CASCADE
--     );




-- CREATE TABLE
--     connected_tables(
--         id SERIAL PRIMARY key,
--         user_id	 INT REFERENCES user (id) ON DELETE CASCADE,	
--         car_id	INT REFERENCES cars (id) ON DELETE CASCADE
--     );




