\c mileage_db;

INSERT INTO
    cars(make, model, year, odometer, doors)
VALUES 
    ('Dodge','Charger',1999,1000,4),
    ('Chevy','Impala',1999,2000,2),
    ('Ford','Mustang',1999,2000,2);


 -- seed gas
INSERT INTO
    expenses( car_id,expense_type, business_use, amount_spent, date)
VALUES 
(1,'Gas',TRUE,100,'2021-01-12'),
(2,'Repairs',TRUE,700,'2021-02-10'),
(2,'Car Insurance',FALSE,700,'2021-08-21'),
(3,'Oil Change',TRUE,40,'2021-05-15');


 -- seed trips
INSERT INTO
    trips(car_id,business_use,miles,date,reason,start_odometer,stop_odometer,favorite)
VALUES 
(1,TRUE,10000,2008-11-11,'deliver',500,5000, false),
(2,TRUE,10000,2009-01-14,'date night',800,7000,TRUE),
(3,TRUE,10000,2011-14-11,'deliver',500,5000, false);



 -- seed connected_tables

-- INSERT INTO
--     connected_tables(user_id,car_id)
-- VALUES 
-- ((SELECT id FROM users WHERE vin = 123),(SELECT id FROM cars WHERE email = farrahrios@pursuit.org));
-- ((SELECT id FROM users WHERE vin = 234),(SELECT id FROM cars WHERE email = damienyule@pursuit.org));
-- ((SELECT id FROM users WHERE vin = 567),(SELECT id FROM cars WHERE email = durdonadjalilova@pursuit.org));

   -- seed receipts ????????????????????????????????
-- INSERT INTO
--     receipts(gas_id,receipt_url)
-- VALUES 
-- ((SELECT id FROM gas WHERE vin = 123),TRUE,100,2008-11-11)
-- ((SELECT id FROM cars WHERE vin = 456),TRUE,700,2009-01-11)
-- ((SELECT id FROM cars WHERE vin = 789),false,700,2011-14-11);

-- users
-- INSERT INTO
--     users(email, pw_hash, name)
-- VALUES
--     (‘farrahrios@pursuit.org, swim,Farrah),
--     (‘DamienYule@pursuit.org,babygirl, Damien),
--     (‘DurdonadjAlilova, myboys, Durdona);