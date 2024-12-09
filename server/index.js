const express = require('express');
const app = express();
const cors = require('cors');

const db = require('./models')

app.use(express.json());
app.use(cors());

//Routing
const postRouter = require("./routes/posts");
app.use("/posts", postRouter);
const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("server running on port 3001");
    });
});