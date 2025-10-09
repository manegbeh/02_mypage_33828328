const http = require("http");

const port = 3000;


const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>About Me</title>
        <style>
          h1 {
            max-width: 600px;
            padding: 20px;
            background: #ffffff;
            border: 2px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            font-size: 1.1rem;
          }  
            
          p {
            max-width: 600px;
            padding: 20px;
            background: #ffffff;
            border: 2px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            font-size: 1.1rem;
            }
        </style>
    <body>
        <h1>Hiiiii! Welcome to My Website</h1>
        <h2>This is a a little bit about me</h2>
        <p>Hey, I’m someone who’s always up for learning new things and having a laugh along the way. I really enjoy staying active — I go to the gym a lot and I practice Judo, which keeps me on my toes. When I’m chilling out, I’m usually gaming (Fortnite’s my go-to) or getting into sim racing. I’ve also been picking up some French recently, which has been fun. I’d say I’m pretty optimistic, motivated, and I like pushing myself, but at the same time I just enjoy connecting with people and sharing good vibes.</p>
        </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});