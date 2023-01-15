CREATE TABLE IF NOT EXISTS books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL
);

INSERT INTO books (title, author) VALUES ('Harry Potter and the Chamber of Secrets', 'J.K. Rowling');
INSERT INTO books (title, author) VALUES ('Jurassic Park', 'Michael Crichton');
INSERT INTO books (title, author) VALUES ('The Hobbit', 'J.R.R. Tolkien');
INSERT INTO books (title, author) VALUES ('The Fellowship of the Ring', 'J.R.R. Tolkien');
INSERT INTO books (title, author) VALUES ('The Two Towers', 'J.R.R. Tolkien');
INSERT INTO books (title, author) VALUES ('The Return of the King', 'J.R.R. Tolkien');
INSERT INTO books (title, author) VALUES ('The Hitchhiker''s Guide to the Galaxy', 'Douglas Adams');
INSERT INTO books (title, author) VALUES ('The Restaurant at the End of the Universe', 'Douglas Adams');
INSERT INTO books (title, author) VALUES ('Life, the Universe and Everything', 'Douglas Adams');
INSERT INTO books (title, author) VALUES ('So Long, and Thanks for All the Fish', 'Douglas Adams');
INSERT INTO books (title, author) VALUES ('Mostly Harmless', 'Douglas Adams');
