


export const assignTask = (task) => ({
    type: 'TASK_ASSIGNED',
    payload: task
});

export const taskInput = (taskTyped) => ({
    type: 'TASK_INPUT',
    payload: taskTyped
});
