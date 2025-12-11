#include <stdio.h>
#include <string.h>

struct File {
    char name[20];
    int indexBlock;    // Starting/index block
    int numBlocks;
    int blocks[100];   // Data blocks
};

int main() {
    int n, i, j;
    printf("Enter number of files : ");
    scanf("%d", &n);

    struct File files[n];

    for(i=0;i<n;i++){
        printf("Enter file %d name : ", i+1);
        scanf("%s", files[i].name);
        printf("Enter starting block of file %d : ", i+1);
        scanf("%d", &files[i].indexBlock);
        printf("Enter no of blocks in file %d : ", i+1);
        scanf("%d", &files[i].numBlocks);
        printf("Enter blocks for file %d : ", i+1);
        for(j=0;j<files[i].numBlocks;j++)
            scanf("%d",&files[i].blocks[j]);
    }

    // Print table
    printf("\nFile Name\tStart block\tNo. of blocks\tBlocks occupied\n");
    for(i=0;i<n;i++){
        printf("%-12s\t%-11d\t%-13d\t", files[i].name, files[i].indexBlock, files[i].numBlocks);
        for(j=0;j<files[i].numBlocks;j++){
            printf("%d", files[i].blocks[j]);
            if(j != files[i].numBlocks-1) printf(", ");
        }
        printf("\n");
    }

    char searchName[20];
    printf("\nEnter the file name to be searched : ");
    scanf("%s", searchName);

    int found = 0;
    for(i=0;i<n;i++){
        if(strcmp(files[i].name, searchName) == 0){
            printf("File '%s' found. Blocks occupied: ", searchName);
            for(j=0;j<files[i].numBlocks;j++){
                printf("%d", files[i].blocks[j]);
                if(j != files[i].numBlocks-1) printf(", ");
            }
            printf("\n");
            found = 1;
            break;
        }
    }

    if(!found)
        printf("File '%s' not found.\n", searchName);

    return 0;
}
