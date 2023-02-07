package tiro.tiroserver.model;

public class Task {

    private String taskId;
    private String taskName;

    public Task(String taskId, String taskName) {
        this.taskId = taskId;
        this.taskName = taskName;
    }

    public String getTaskId() {
        return this.taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }

    public String getTaskName() {
        return this.taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

}
