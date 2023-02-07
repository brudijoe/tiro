package main.java.tiro.tiroserver.repository;

import java.util.ArrayList;

import main.java.tiro.tiroserver.model.Task;

public class TaskRepository {

    private List<Task> tasks = new ArrayList<>();

    public List<Task> getTasks() {
        return this.tasks;
    }

}
