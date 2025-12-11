#include <stdio.h>
#include <string.h>

int main() {
    FILE *f1, *f2;
    char my[100], friend[100];

    // Write your details
    f1 = fopen("file1.txt", "w");
    fprintf(f1, "Ashwin\nBtech\nIndia\n");
    fclose(f1);

    // Write friend details
    f2 = fopen("file2.txt", "w");
    fprintf(f2, "Rohit\nBtech\nIndia\n");
    fclose(f2);

    // Read & compare both files
    f1 = fopen("file1.txt", "r");
    f2 = fopen("file2.txt", "r");

    printf("Matching lines:\n");

    while (fgets(my, sizeof(my), f1) != NULL &&
           fgets(friend, sizeof(friend), f2) != NULL) {

        if (strcmp(my, friend) == 0) {
            printf("%s", my);
        }
    }

    fclose(f1);
    fclose(f2);
    return 0;
}
