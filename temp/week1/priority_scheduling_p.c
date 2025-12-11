#include <stdio.h>
#include <limits.h>

int main() {
    int n, i;
    printf("Number of processes: ");
    scanf("%d", &n);

    int bt[n], at[n], pr[n], rt[n], wt[n], tat[n];
    int gantt[100], gidx = 0;
    int completed = 0, t = 0;

    printf("Burst time: ");
    for(i=0;i<n;i++) { scanf("%d",&bt[i]); rt[i]=bt[i]; }

    printf("Arrival time: ");
    for(i=0;i<n;i++) scanf("%d",&at[i]);

    printf("Priority (lower number = higher priority): ");
    for(i=0;i<n;i++) scanf("%d",&pr[i]);

    int done[n];
    for(i=0;i<n;i++) done[i]=0;

    while(completed < n) {
        int minPrio = INT_MAX, idx=-1;
        for(i=0;i<n;i++)
            if(at[i]<=t && !done[i] && pr[i]<minPrio){
                minPrio = pr[i];
                idx = i;
            }

        if(idx==-1) {
            t++;
            continue;
        }

        // Execute 1 unit
        rt[idx]--;
        gantt[gidx++] = idx;
        t++;

        if(rt[idx]==0) {
            done[idx]=1;
            completed++;
            tat[idx]=t-at[idx];
            wt[idx]=tat[idx]-bt[idx];
        }
    }

    printf("Gantt Chart: ");
    for(i=0;i<gidx;i++) printf("P%d ", gantt[i]);
    printf("\n");

    float totalWT=0, totalTAT=0;
    for(i=0;i<n;i++) { totalWT+=wt[i]; totalTAT+=tat[i]; }

    printf("Average waiting time: %.2f\n", totalWT/n);
    printf("Average turnaround time: %.2f\n", totalTAT/n);

    return 0;
}
