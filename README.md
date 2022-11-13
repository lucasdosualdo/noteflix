# Noteflix

The backend of Noteflix, a movies wishlist - includes movies you plan to watch.

## About

Noteflix is an web browser application that allows you to search and register the movies you want to watch. You can also list movies you've watched and rate them.

## How to run

1. Clone the repository above: on git terminal, execute the code below in the local file you prefer
```bash
git clone https://github.com/lucasdosualdo/noteflix.git 
```
2. Install his dependencies
```bash
npm install
```
3. Create a PostgreSQL database with the name you prefer
4. On terminal, execute:
```bash 
sudo -i -u postgres
```
5. Go to the Noteflix root directory
6. Execute:
```bash
psql db_name < dump.sql
```
7. In the Noteflix root repository, create and configure the `.env` file following the `.env.example` file pattern
8. Open the terminal on Noteflix root directory and run the `start` script
```bash
npm start
```

This way, your application is ready to be run locally!

