#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    pid_t pid = fork();

    if (pid < 0) {
        printf("Fork failed.\n");
    }
    else if (pid == 0) {  
        // Child process executes ls command
        execlp("ls", "ls", NULL);

        // If execlp fails, this will run
        printf("execlp failed.\n");
    }
    else {
        // Parent waits
        wait(NULL);
        printf("Child process completed.\n");
    }

    return 0;
}
