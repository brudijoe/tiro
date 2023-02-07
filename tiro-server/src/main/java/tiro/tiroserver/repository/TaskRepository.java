package tiro.tiroserver.repository;

import java.util.ArrayList;

import tiro.tiroserver.model.Task;

import java.util.List;
import org.springframework.stereotype.Repository;

@Repository
public class TaskRepository {

    private List<Task> tasks = new ArrayList<>();

    public List<Task> getTasks() {
        return this.tasks;
    }

}
