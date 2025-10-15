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
        <link rel="stylesheet" type="text/css" href="style.css">
    <body>
      <div class="wrapper">
        <h1>Hiiiii! Welcome to My Website</h1>
        <h2>This is a a little bit about me</h2>
        <p>Hey, I’m someone who’s always up for learning new things and having a laugh along the way. I really enjoy staying active — I go to the gym a lot and I practice Judo, which keeps me on my toes. When I’m chilling out, I’m usually gaming (Fortnite’s my go-to) or getting into sim racing. I’ve also been picking up some French recently, which has been fun. I’d say I’m pretty optimistic, motivated, and I like pushing myself, but at the same time I just enjoy connecting with people and sharing good vibes.</p>
      </div>
    </body>
      
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});