CREATE TABLE posts (
    post_id      SERIAL PRIMARY KEY,
    created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    title        VARCHAR(50) NOT NULL,
    content      VARCHAR(2000)
);


