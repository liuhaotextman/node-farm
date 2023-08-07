let http = require('http')
let fs = require('fs');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const productData = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        res.end('this is the overview');
    } else if (pathName === '/product') {
        res.end('this is product');
    } else if (pathName === '/api') {
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(data);
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
        });
        res.end('<h1>page not found</h1>')
    }
})

server.listen(8080, '127.0.0.1');