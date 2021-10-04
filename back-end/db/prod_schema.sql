DROP TABLE IF EXISTS cars;
DROP TABLE IF EXISTS expenses;
DROP TABLE IF EXISTS trips;

CREATE TABLE
    cars(
        id SERIAL PRIMARY key,
        make TEXT not null,
        model TEXT not null,
        vin TEXT not null,
        year INT not null,
        odometer INT, 
        doors INT,
        is_default BOOLEAN NOT NULL,
        uid TEXT not null,
        driver TEXT not null
    );

 CREATE TABLE
    expenses(
        id SERIAL PRIMARY key,
        expense_type TEXT NOT NULL,
        business_use BOOLEAN NOT NULL,
        car_id INT REFERENCES cars (id) ON DELETE CASCADE,
        amount_spent INT NOT NULL,
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