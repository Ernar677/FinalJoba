const { Pool } = require('pg')

const pool = new Pool({
    connectionString:'postgresql://yernar:DHC9tpvTGlGWqMTLV9y3UeTYk2AJLTQP@dpg-d289fgje5dus73fbt06g-a.oregon-postgres.render.com/psyhologyproject',
    ssl: { rejectUnauthorized: false }
})

module.exports = pool