import express from "express";

import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded());

const arraytasks = [];

app.get("/tasks", (request, response) => {      
  /**
   * total: 100
   * tasks: []
   */

  response.json({
    // message: "hola mundo"
      total: arraytasks.length,
      tasks: arraytasks,
  });
});

app.post("/task", (request, response) => {
 
  const task = {
        id: arraytasks.length + 1,
        text: request.body.task_text,
        status: "todo",
        created_at: new Date(),
    };

    arraytasks.push(task);

    response.json({
      message: "ok",
      task
  });
});

app.listen(3000, () =>
  console.log("El servidor inicio en el puerto http://localhost:3000")
);
