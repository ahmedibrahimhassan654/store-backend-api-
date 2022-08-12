CREATE Extension IF NOT EXISTS "uuid-ossp";



CREATE TABLE products(
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description text ,
    price NUMERIC(10,2) NOT NULL,
    category VARCHAR(100) ,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP


);