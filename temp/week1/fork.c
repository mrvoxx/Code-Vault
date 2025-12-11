#include<stdio.h>
#include<unistd.h>

int main() {
    
    // fork() creates a new child process.
    // It returns:
    // 0 to the child process,
    // >0 (child PID) to the parent process,
    // <0 if creation fails.
    int id = fork();
    
    // If fork() returns negative value => child process creation failed
    if(id < 0) {
        printf("Child process creation failed\n");
    }
    
    // If id == 0, this block runs in child process
    else if(id == 0) {
        // getpid() gives process ID of current process
        printf("Child process id : %d \n", getpid());
        
        // getppid() gives parent process ID
        printf("Parent process id (of child) : %d \n", getppid());
    }
    
    // If id > 0, this block runs in parent process
    else {
        // getpid() gives parent's own process ID
        printf("Parent process id : %d \n", getpid());
        
        // id variable contains PID of the child process
        printf("Child process id (from parent) : %d \n", id);
    }
    
    return 0;
}
