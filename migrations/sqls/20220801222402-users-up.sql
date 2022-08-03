/* Replace with your SQL commands */
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL UNIQUE,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    



);