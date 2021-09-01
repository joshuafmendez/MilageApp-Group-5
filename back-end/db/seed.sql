\c mileage_db;

INSERT INTO
    cars(make, model, year, odometer, vin, doors, automatic_trans)
VALUES 
    ('Dodge','Charger',1999,1000,123,4,TRUE),
    ('Chevy','Impala',2999,2000,234,2,FALSE),
    ('Ford','Mustang',1899,2000,345,2,TRUE);


 -- seed gas
INSERT INTO
    gas( car_id,business_use, gas_spent, date)
VALUES 
(1,TRUE,100,2008-11-11),
(2,TRUE,700,2009-01-11),
(3,false,700,2011-14-11);


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