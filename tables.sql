CREATE TABLE IF NOT EXISTS levels (
    id SERIAL PRIMARY KEY,
    description TEXT
);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    level_id INTEGER,
    email TEXT,
    password TEXT,
    username TEXT,
    address TEXT,
    can_coach BOOLEAN DEFAULT 'f',
    court_access BOOLEAN DEFAULT 'f'
);

CREATE TABLE IF NOT EXISTS activities (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    category_id INTEGER,
    title TEXT,
    description TEXT,
    activity_date timestamptz,
    start_at timetz,
    end_at timetz,
    address TEXT,
    slots INTEGER
);

CREATE TABLE IF NOT EXISTS activities_users (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    isHost BOOLEAN,
    activity_id INTEGER REFERENCES activities ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    type TEXT
);
