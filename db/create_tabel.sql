CREATE TABLE halls (
    hall_id uuid NOT NULL PRIMARY KEY,
    hall_name VARCHAR(80) NOT NULL,
    hall_adress VARCHAR(80) NOT NULL,
    size int NOT NULL,
    date_Created TIMESTAMP DEFAULT NOW(),
    date_Update TIMESTAMP DEFAULT NOW(),
    --reservation_id uuid REFERENCES reservations(reservation_id)
);

CREATE TABLE reservations (
    reservation_id uuid NOT NULL PRIMARY KEY,
    reservation_status int NOT NULL,
    reservation_start TIMESTAMP,
    reservation_end TIMESTAMP,
    date_created TIMESTAMP DEFAULT NOW(),
    date_update TIMESTAMP DEFAULT NOW(),
    hall_id uuid REFERENCES halls(hall_id),
    users_user_id uuid REFERENCES users(user_id)
);

CREATE TABLE users (
    user_id uuid NOT NULL PRIMARY KEY,
    first_name VARCHAR(60) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    email VARCHAR(60) NOT NULL,
    user_password VARCHAR(60) NOT NULL,
    date_created TIMESTAMP DEFAULT NOW(),
    date_update TIMESTAMP DEFAULT NOW()
);

CREATE TABLE login_session (
    log_ses_id uuid NOT NULL PRIMARY KEY,
    date_created TIMESTAMP DEFAULT NOW(),
    date_update TIMESTAMP DEFAULT NOW(),
    user_id uuid REFERENCES users(user_id)
);