const fs = require("fs");
const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, "db.json"));

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального api
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });

  next();
});

// проверяем авторизован ли пользователь
// eslint-disable-next-line consistent-return
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: "AUTH ERROR" });
  }

  next();
});

server.use(jsonServer.defaults());
server.use(router);

// "Эндпоинт для логина"
server.post("/login", (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, "db.json"), "utf8"));
  const { users } = db;

  const userFromDatabase = users
    .find((user) => user.username === username && user.password === password);

  if (userFromDatabase) {
    return res.json(userFromDatabase);
  }

  return res.status(403).json({ message: "AUTH ERROR" });
});

server.listen(8000, () => {
  console.log("Server is running on 8000 port");
});
