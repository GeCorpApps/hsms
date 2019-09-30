const config = (pEnv) => {
        if(pEnv == 'development') {
            return {
                host: '127.0.01',
                port: 3000
            };
        }else if(pEnv == 'production') {
            return {
                host: '127.0.01',
                port: 80
            };
        }
    }