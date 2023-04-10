DROP TABLE IF EXISTS owner CASCADE;
DROP TABLE IF EXISTS pet;

CREATE TABLE owner (
    id serial PRIMARY KEY,
    name text
);

CREATE TABLE pet (
    id serial PRIMARY KEY,
    name text,
    kind text,
    age integer,
    owner_id integer,
    CONSTRAINT fk_owner_id FOREIGN KEY (owner_id) REFERENCES owner(id)
);