#include <stdio.h>

int main() {
    int p, r, i, j;
    printf("Enter number of processes : ");
    scanf("%d",&p);
    printf("Enter number of resources : ");
    scanf("%d",&r);

    int max[p][r], alloc[p][r], need[p][r], total[r], avail[r];

    // Input Maximum Requirement
    printf("Enter maximum requirement :\n");
    for(i=0;i<p;i++)
        for(j=0;j<r;j++)
            scanf("%d",&max[i][j]);

    // Input Allocation Matrix
    printf("Enter allocated matrix :\n");
    for(i=0;i<p;i++)
        for(j=0;j<r;j++)
            scanf("%d",&alloc[i][j]);

    // Input total resources
    printf("Resource Vector :\n");
    for(i=0;i<r;i++)
        scanf("%d",&total[i]);

    // Calculate Need Matrix: need = max - alloc
    for(i=0;i<p;i++)
        for(j=0;j<r;j++)
            need[i][j] = max[i][j] - alloc[i][j];

    // Calculate Available vector: avail = total - sum of allocated
    for(j=0;j<r;j++){
        int sum = 0;
        for(i=0;i<p;i++)
            sum += alloc[i][j];
        avail[j] = total[j] - sum;
    }

    int finish[p];
    for(i=0;i<p;i++) finish[i]=0;

    int found;
    do {
        found = 0;
        for(i=0;i<p;i++){
            if(finish[i]==0){
                int canAllocate = 1;
                for(j=0;j<r;j++){
                    if(need[i][j] > avail[j]){
                        canAllocate = 0;
                        break;
                    }
                }
                if(canAllocate){
                    // Pretend to allocate resources
                    for(j=0;j<r;j++)
                        avail[j] += alloc[i][j];
                    finish[i] = 1;
                    found = 1;
                }
            }
        }
    } while(found);

    // Check if any process is unfinished
    int deadlock = 0;
    for(i=0;i<p;i++){
        if(finish[i]==0){
            deadlock = 1;
            break;
        }
    }

    if(deadlock)
        printf("Deadlock detected\n");
    else
        printf("No deadlock detected\n");

    return 0;
}
