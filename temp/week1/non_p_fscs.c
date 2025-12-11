#include <stdio.h>

int main() {
    int n, i;
    printf("Number of processes : ");
    scanf("%d", &n);

    int bt[n], at[n], wt[n], tat[n], ct[n];

    printf("Burst time : ");
    for (i = 0; i < n; i++)
        scanf("%d", &bt[i]);

    printf("Arrival time : ");
    for (i = 0; i < n; i++)
        scanf("%d", &at[i]);

    // FCFS Calculation
    ct[0] = at[0] + bt[0];  // completion time of first process
    for (i = 1; i < n; i++) {
        if (ct[i - 1] < at[i])
            ct[i] = at[i] + bt[i];      // CPU waits for process to arrive
        else
            ct[i] = ct[i - 1] + bt[i];
    }

    // Turnaround time and waiting time
    float totalWT = 0, totalTAT = 0;
    for (i = 0; i < n; i++) {
        tat[i] = ct[i] - at[i];
        wt[i] = tat[i] - bt[i];
        totalWT += wt[i];
        totalTAT += tat[i];
    }

    // Gantt Chart
    printf("Gantt Chart : ");
    for (i = 0; i < n; i++)
        printf("P%d ", i);
    printf("\n");

    // Output
    printf("Average waiting time: %.2f\n", totalWT / n);
    printf("Average turnaround time : %.2f\n", totalTAT / n);

    return 0;
}
