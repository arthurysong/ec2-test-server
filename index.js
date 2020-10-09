    require('dotenv').config();
    
    const express = require('express');
    const cors = require('cors');
    const http = require('http');
    
    const PORT = process.env.PORT || 5000;
    
    const app = express();
    app.use(cors());
    app.use(express.json());
    
    const server = http.createServer(app);
    
    // Router for server
    // app.use(router);

    app.get('/', (req, res) => {
        console.log("i was pinged");
        res.status(200).json({ message: "ALLO WORLD" })
    })
    
    // Server listening on the port given
    server.listen(PORT, () => {
        console.log(`Server has started on port ${PORT}`);
    });
    