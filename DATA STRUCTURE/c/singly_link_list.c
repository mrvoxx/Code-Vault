#include<stdio.h>
#include<stdlib.h>

struct node{
    int data;
    struct node *next;
};

struct node * createarray(struct node *a,int data){
    a = (struct node*)malloc(sizeof(struct node));
    a->data = data;
    a->next = NULL;
}

void display(struct node * head){
    int cnt = 0;
    while(head->next != NULL){
        printf("this is your %d node and data is %d\n",cnt,head->data);
        head = head->next;
        cnt++;
    }
        printf("this is your %d node and data is %d\n",cnt,head->data);    
}

int main(){
    struct node *head = createarray(head,23);
    struct node *n1 = createarray(n1,3);
    struct node *n2 = createarray(n2,2);

    head->next = n1;
    n1->next = n2;

    display(head);
}
