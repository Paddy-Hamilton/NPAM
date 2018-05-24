/* eslint-disable */
require("dotenv").config({ path: "variables.env" });
/* eslint-enable */
const jwt = require("jsonwebtoken");
const createServer = require("./createServer");
const cookieParser = require("cookie-parser");
const db = require("./db");
const server = createServer();
server.express.use(cookieParser());

server.express.use((req, res, next) => {
  const { token } = req.cookies;
  const tokenHeader = req.headers.token;
  if (token || tokenHeader) {
    const { userId } = jwt.verify(token || tokenHeader, process.env.APP_SECRET);
    req.userId = userId;
  }
  next();
});

// 2. Get User from their ID
server.express.use(async (req, res, next) => {
  if (!req.userId) return next();
  const user = await db.query.user(
    { where: { id: req.userId } },
    `{ id, email, name }`
  );
  req.user = user;
  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: "http://localhost:8080"
    },
    port: 4000
  },
  details => {
    console.log(`Server is running on http://localhost:${details.port}`);
  }
);
