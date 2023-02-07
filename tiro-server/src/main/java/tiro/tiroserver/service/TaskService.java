package main.java.tiro.tiroserver.service;

import main.java.tiro.tiroserver.repository.TaskRepository;

public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getTasks() {
        return taskRepository.getTasks();
    }

}
