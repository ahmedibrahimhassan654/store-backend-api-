/* Replace with your SQL commands */
CREATE Extension IF NOT EXISTS "uuid-ossp";
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(15) NOT NULL,
    orderedBy REFERENCES users(id) NOT NULL
);