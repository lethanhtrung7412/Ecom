import app from "./apis/app";

const PORT = 8000;

const server = app.listen(PORT, () => {
    console.log(`Server start with port ${PORT}`);
})

process.on('SIGINT', () => {
    server.close(() => {console.log('Exit Ecommerces server')});
})