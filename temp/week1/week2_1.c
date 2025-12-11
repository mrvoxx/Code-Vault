#include <stdio.h>
#include <dirent.h>

int main() {
    DIR *d;
    struct dirent *de;

    // Open current directory
    d = opendir(".");

    if (d == NULL) {
        printf("Cannot open directory.\n");
        return 1;
    }

    printf("Directory contents:\n");

    // Read directory entries one by one
    while ((de = readdir(d)) != NULL) {
        printf("%s\n", de->d_name);
    }

    // Close directory
    closedir(d);

    return 0;
}
