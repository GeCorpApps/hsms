exports.env = (pEnv) => {
        if(pEnv == 'development') {
            return {
                host: '127.0.0.1',
                port: 3000,
                database: {
                    host: 'localhost',
                    username: 'root',
                    password: 'vertrigo',
                    database: 'hsms'
                }
            };
        }else if(pEnv == 'production') {
            return {
                host: '127.0.0.1',
                port: 80,
                database: {
                    host: 'localhost',
                    username: 'root',
                    password: 'vertrigo',
                    database: 'hsms'
                }
            };
        }
    }