#include <stdio.h>

int main() {
    int n, i, j, t=0, completed=0;
    printf("Number of processes: ");
    scanf("%d", &n);

    int at[n], bt[n], rt[n], wt[n], tat[n];
    int gantt[100]; // store process order
    int idx = 0;

    // Input burst time and arrival time
    printf("Burst time: ");
    for(i=0;i<n;i++) {
        scanf("%d",&bt[i]);
        rt[i] = bt[i]; // remaining time
    }

    printf("Arrival time: ");
    for(i=0;i<n;i++) scanf("%d",&at[i]);

    int finished[n];
    for(i=0;i<n;i++) finished[i]=0;

    while(completed < n){
        int minRT = 1000000, shortest = -1;
        for(i=0;i<n;i++){
            if(at[i] <= t && !finished[i] && rt[i]<minRT){
                minRT = rt[i];
                shortest = i;
            }
        }

        if(shortest==-1){
            t++;
            continue;
        }

        // Execute for 1 unit
        rt[shortest]--;
        gantt[idx++] = shortest;

        t++;

        if(rt[shortest]==0){
            finished[shortest]=1;
            completed++;
            tat[shortest] = t - at[shortest];
            wt[shortest] = tat[shortest] - bt[shortest];
        }
    }

    // Print Gantt Chart
    printf("Gantt Chart: ");
    for(i=0;i<idx;i++){
        printf("P%d ",gantt[i]);
    }
    printf("\n");

    // Calculate Average WT and TAT
    float totalWT=0, totalTAT=0;
    for(i=0;i<n;i++){
        totalWT += wt[i];
        totalTAT += tat[i];
    }

    printf("Average waiting time: %.2f\n", totalWT/n);
    printf("Average turnaround time: %.2f\n", totalTAT/n);

    return 0;
}
