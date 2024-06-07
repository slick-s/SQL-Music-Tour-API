require ('dotenv').config()

module.exports = {
  "development": {
    use_env_variable: "PG_URI",
    "database": "show_tour",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    use_env_variable: "PG_URI",
    "database": "show_tour_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    use_env_variable: "PG_URI",
    "database": "show_tour_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}