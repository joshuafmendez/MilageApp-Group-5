\c mileage_db;

INSERT INTO
    cars(make, model, vin, year, odometer, doors, user_id)
VALUES 
    ('Dodge','Charger','1234567890AUPMNTR',2005,90000,4, abcd),
    ('Chevy','Impala','4544567890AUPMNTR',2010,50000,4, efgh),
    ('Ford','Mustang','9894567890AUPMNTR',2015,30000,4, ijkl);


 -- seed gas
INSERT INTO
    expenses( car_id,expense_type, business_use, amount_spent, date)
VALUES 
(1,'Gas',TRUE,100,'2021-01-12'),
(2,'Repairs',TRUE,700,'2021-02-10'),
(2,'Car Insurance',FALSE,150,'2021-08-21'),
(1,'Oil Change',TRUE,40,'2021-05-15'),
(1,'Car Insurance',TRUE,150,'2021-05-15'),
(1,'Repairs',TRUE,400,'2021-05-15'),
(1,'Depreciation',FALSE,40,'2021-05-15'),
(1,'Registration fees',TRUE,120,'2021-05-15'),
(2,'Oil Change',FALSE,40,'2021-05-15'),
(3,'Car Insurance',TRUE,150,'2021-05-15'),
(2,'Gas',TRUE,100,'2021-01-12'),
(3,'Repairs',TRUE,500,'2021-05-15'),
(2,'Depreciation',FALSE,40,'2021-05-15'),
(2,'Registration fees',TRUE,130,'2021-05-15'),
(3,'Oil Change',TRUE,40,'2021-05-15'),
(3,'Registration fees',FALSE,130,'2021-05-15'),
(3,'Gas',TRUE,100,'2021-01-12'),
(3,'Depreciation',TRUE,100,'2021-01-12');


 -- seed trips
INSERT INTO
    trips(car_id,business_use,miles,date,reason,start_odometer,stop_odometer,favorite)
VALUES 
(1,TRUE,120,'2021-11-11','delivery',0,0,false),
(2,TRUE,150,'2021-01-14','date night',0,0,TRUE),
(3,FALSE,110,'2021-12-11','delivery',0,0,false),
(1,TRUE,200,'2021-11-11','delivery',0,0,false),
(2,TRUE,90,'2021-01-14','date night',0,0,TRUE),
(3,FALSE,50,'2021-12-11','delivery',0,0,false),
(1,TRUE,100,'2021-11-11','delivery',0,0,false),
(2,TRUE,60,'2021-01-14','date night',0,0,TRUE),
(3,TRUE,120,'2021-12-11','delivery',0,0,false),
(1,FALSE,190,'2021-11-11','delivery',0,0,false),
(2,TRUE,200,'2021-01-14','date night',0,0,TRUE),
(3,TRUE,250,'2021-12-11','delivery',0,0,false);



 -- seed connected_tables

-- INSERT INTO
--     connected_tables(user_id,car_id)
-- VALUES 
-- ((SELECT id FROM users WHERE vin = 123),(SELECT id FROM cars WHERE email = farrahrios@pursuit.org)),
-- ((SELECT id FROM users WHERE vin = 234),(SELECT id FROM cars WHERE email = damienyule@pursuit.org));
-- ((SELECT id FROM users WHERE vin = 567),(SELECT id FROM cars WHERE email = durdonadjalilova@pursuit.org));

   -- seed receipts ????????????????????????????????
-- INSERT INTO
--     receipts(gas_id,receipt_url)
-- VALUES 
-- ((SELECT id FROM gas WHERE vin = 123),TRUE,100,2021-11-11)
-- ((SELECT id FROM cars WHERE vin = 456),TRUE,700,2021-01-11)
-- ((SELECT id FROM cars WHERE vin = 789),false,700,2021-14-11);

-- users
-- INSERT INTO
--     users(email, pw_hash, name)
-- VALUES
--     (‘farrahrios@pursuit.org, swim,Farrah),
--     (‘DamienYule@pursuit.org,babygirl, Damien),
--     (‘DurdonadjAlilova, myboys, Durdona);