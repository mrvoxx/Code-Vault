#include <stdio.h>

int main() {
    int n, i, t = 0;
    printf("Number of processes : ");
    scanf("%d", &n);

    int bt[n], at[n], rt[n], wt[n], tat[n], completed = 0;
    int gantt[200], gidx = 0;

    printf("Burst time : ");
    for(i=0;i<n;i++) { scanf("%d",&bt[i]); rt[i]=bt[i]; }

    printf("Arrival time : ");
    for(i=0;i<n;i++) scanf("%d",&at[i]);

    int tq;
    printf("Time Quantum : ");
    scanf("%d",&tq);

    int done[n];
    for(i=0;i<n;i++) done[i]=0;

    while(completed < n) {
        int doneThisCycle = 1;
        for(i=0;i<n;i++){
            if(at[i] <= t && rt[i] > 0){
                doneThisCycle = 0;
                if(rt[i] > tq){
                    rt[i] -= tq;
                    for(int j=0;j<tq;j++) gantt[gidx++] = i;
                    t += tq;
                } else {
                    for(int j=0;j<rt[i];j++) gantt[gidx++] = i;
                    t += rt[i];
                    rt[i]=0;
                    tat[i] = t - at[i];
                    wt[i] = tat[i] - bt[i];
                    completed++;
                }
            }
        }
        if(doneThisCycle) t++;
    }

    // Print Gantt Chart
    printf("Gantt Chart : ");
    for(i=0;i<gidx;i++) printf("P%d ", gantt[i]);
    printf("\n");

    float totalWT=0, totalTAT=0;
    for(i=0;i<n;i++){ totalWT+=wt[i]; totalTAT+=tat[i]; }

    printf("Average waiting time: %.2f\n", totalWT/n);
    printf("Average turnaround time : %.2f\n", totalTAT/n);

    return 0;
}
