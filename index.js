const http = require('http');

const port = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>About Me</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800;900&display=swap');

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: "Poppins", sans-serif;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                background: salmon;
            }

            .wrapper {
                width: 750px;
                background: blanchedalmond;
                color: #333;
                border-radius: 10px;
                padding: 30px 40px;
                box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
            }

            .wrapper h1 { 
                font-size: 36px;
                text-align: center;
                margin-bottom: 10px;
            }

            .wrapper p {
                font-size: 18px;
                text-align: center;
                line-height: 1.6;
            }
        </style>
    </head>
    <body>
        <div class="wrapper">
            <h1>Hiiii! Welcome to My Website</h1>
            <p>Hey, I'm someone who's always up for learning new things and having a laugh along the way. 
            I really enjoy staying active — I go to the gym a lot and I practice Judo, which keeps me on my toes. 
            When I'm chilling out, I'm usually gaming (Fortnite's my go-to) or getting into sim racing. 
            I've also been picking up some French recently, which has been fun. 
            I'd say I'm pretty optimistic, motivated, and I like pushing myself, 
            but at the same time I just enjoy connecting with people and sharing good vibes.
            </p
        </div>
    </body>
    </html>
    `);
    res.end();
});

server.listen(port, () => {
    console.log(`Node server is running on port ${port}...`); 
});