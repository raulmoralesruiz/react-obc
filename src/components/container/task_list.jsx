import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "Default task",
    "Default description",
    false,
    LEVELS.NORMAL
  );

  const changeState = (id) => {
    console.log("TODO: cambiar estado de tarea");
    // defaultTask.completed = !defaultTask.completed;
  };

  return (
    <div>
      <h1>Task List</h1>
      {/* TODO: Aplicar un for/map para renderizar una lista */}
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

export default TaskListComponent;
