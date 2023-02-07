package tiro.tiroserver.controller;

import java.util.List;

import tiro.tiroserver.model.Task;
import tiro.tiroserver.service.TaskService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;

@RequestMapping("/tiro")
@RestController
@CrossOrigin
public class TiroController {

    @Autowired
    private final TaskService taskService;

    public TiroController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/greeting")
    public String greeting() {
        return "Server is running";
    }

    @GetMapping("/tasks")
    public List<Task> getTasks() {
        return taskService.getTasks();
    }
}
