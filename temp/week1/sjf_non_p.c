#include <stdio.h>

int main() {
    int n, i, j;
    printf("Number of processes : ");
    scanf("%d", &n);

    int bt[n], at[n], ct[n], wt[n], tat[n], temp;
    int proc[n];
    for(i=0;i<n;i++) proc[i]=i; // process numbers

    printf("Burst time : ");
    for(i=0;i<n;i++) scanf("%d",&bt[i]);

    printf("Arrival time : ");
    for(i=0;i<n;i++) scanf("%d",&at[i]);

    int completed = 0, currentTime = 0;
    int isDone[n];
    for(i=0;i<n;i++) isDone[i]=0;

    int gantt[n], idx = 0;

    while(completed < n){
        int minBT = 1000000, next=-1;
        for(i=0;i<n;i++){
            if(at[i] <= currentTime && isDone[i]==0){
                if(bt[i] < minBT){
                    minBT = bt[i];
                    next = i;
                }
            }
        }

        if(next==-1){
            currentTime++;
        } else {
            gantt[idx++] = next;
            currentTime += bt[next];
            ct[next] = currentTime;
            tat[next] = ct[next] - at[next];
            wt[next] = tat[next] - bt[next];
            isDone[next]=1;
            completed++;
        }
    }

    // Print Gantt Chart
    printf("Gantt Chart : ");
    for(i=0;i<n;i++) printf("P%d ", gantt[i]);
    printf("\n");

    // Calculate Average WT and TAT
    float totalWT=0, totalTAT=0;
    for(i=0;i<n;i++){
        totalWT += wt[i];
        totalTAT += tat[i];
    }

    printf("Average waiting time: %.2f\n", totalWT/n);
    printf("Average turnaround time : %.2f\n", totalTAT/n);

    return 0;
}
