const openDb = () => {
    const pool = new Pool ({
        user: Process.env.DB_USER,
        host: Process.env.DB_HOST,
        database: Process.env.DB_NAME,
        password: Process.env.DB_PASSWORD,
        port: Process.env.DB_PORT,
        ssl: process.env.SSL
    })
    return pool
}