package tiro.tiroserver.controller;

import main.java.tiro.tiroserver.service.TaskService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/tiro")
@RestController
@CrossOrigin
public class TiroController {

    private final TaskService taskService;

    @GetMapping("/greeting")
    public String greeting() {
        return "Server is running";
    }

    @GetMapping("/tasks")
    public List<Task> getTasks() {
        return taskService.getTasks();
    }
}
