DROP DATABASE IF EXISTS garden_shepherd;
-- creare garden shepherd database in postgresql.
CREATE DATABASE garden_shepherd;

-- create new user postgres and assign all the privledges to that user.

DROP USER IF EXISTS postgres;
CREATE USER postgres WITH PASSWORD 'postgres';
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO postgres;
