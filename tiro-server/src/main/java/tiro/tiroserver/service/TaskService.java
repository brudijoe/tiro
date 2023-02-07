package tiro.tiroserver.service;

import java.util.List;

import tiro.tiroserver.repository.TaskRepository;
import tiro.tiroserver.model.Task;

import org.springframework.stereotype.Service;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getTasks() {
        return taskRepository.getTasks();
    }

}
