DROP DATABASE IF EXISTS restaurants;
CREATE DATABASE restaurants;
\c restaurants;
CREATE TABLE areas(
    areas_id SERIAL PRIMARY KEY,
    areas_name VARCHAR(100)
);
INSERT INTO areas(areas_name)
VALUES
('manchester'),
('stockport'),
('rochdale');
CREATE TABLE restaurants (
    restaurants_id SERIAL PRIMARY KEY,
    restaurants_name VARCHAR(100),
    restaurants_cusine VARCHAR(200),
    restaurants_website VARCHAR(200),
    areas_id INT REFERENCES areas(areas_id)
);

INSERT INTO restaurants(
    restaurants_name,restaurants_cusine,restaurants_website,areas_id)
VALUES
('English food','fish and chips','www.englishfood.com',1),
('Kababa resturent','asian food','www.kababafood.com',2),
('italian cage','pizaa','www.italian.com',3),
('chinies cusine','soup','www.chinies.com',1),
('afgani','naan','www.asianAfgan.com',2),
('pakistani','karahi','www.pakistani.com',2),
('japanies','fish and soup','www.fishsoup.com',3),
('indian','naan','www.indianfood',1);

CREATE TABLE comments(
    comments_id SERIAL PRIMARY KEY,
    comments_body VARCHAR(300),
    restaurants_id INT REFERENCES restaurants(restaurants_id)
);
INSERT INTO comments(comments_body,restaurants_id)
VALUES
('this is a good restuaretn',1),
('everyting was good but coke was not cold',1),
('yup it was good i will go to this resturent agin',2),
('i will give 4.5 stat ',3),
('it was bad decision',1),
('this is a good restuaretn',1),
('everyting was good but coke was not cold',1),
('yup it was good i will go to this resturent agin',2),
('i will give 4.5 stat ',3),
('it was bad decision',1);
CREATE TABLE rating(
    rating_id SERIAL PRIMARY KEY,
    rating INT,
    restaurants_id INT REFERENCES restaurants(restaurants_id)
);

INSERT INTO rating(rating,restaurants_id)
VALUES
(4.5,1),
(4.3,2),
(4.2,3),
(4.1,3),
(3.5,2),
(2.5,1),
(1.5,2);

