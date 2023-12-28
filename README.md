<!-- /
    we can implement using role based model not feature based.

    -src/
        index.js //server
        models/     -- how the table and database look like
        controllers/
        middlewares/
        services/
        utils/     -- kinda a helper in which this can be accesss anywhere
        config/    -- managing database
        repository/
    -test/  [later]
    -static/
    -temp/ -->

## Welcome to flight service

## Project Setup
- Clone the project on your local.
- Execute `npm install` on the same path as of your root directory.
- Create a `.env` file int your root directory and environment variable
    - `PORT=3000`
- Inside a `src/config` create a `config.json` and then add the following peice of json

```
{
    "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
    }
}

```