//this is  a linear queue

#include<stdio.h>
#include<stdlib.h>

struct queue{
    int size;
    int index;
    int *arr;
};

void createQueue(struct queue *a,int size){
    a->arr = (int *)malloc(size*sizeof(int));
    a->index = -1;
    a->size = size;
}

void display(struct queue *a){

    if(a->index == -1){
        printf("queue is empty");
    }

    else{
        printf("your current queue -> ");

        for(int i =0 ;i<=a->index;i++){
            printf("%d ",(a->arr)[i]);
        }
    }

    printf("\n");

}

void enqueue(struct queue *a,int value){
    if(a->index == a->size - 1){
        printf("queue is overflow \n");
    }

    else{
        a->index++;
        (a->arr)[a->index] = value;
    }
}

void dequeue(struct queue *a){
    if(a->index == -1){
        printf("queue is underflow \n");
    }

    else{
        for(int i = 0;i<a->index;i++){
            (a->arr)[i] = (a->arr)[i+1]; 
        }
        a->index--;
    }
}

void isempty(struct queue *a){
    if(a->index == -1){
        printf("queue is empty \n");
    }

    else{
        printf("queue is not empty \n");
    }
}

void isfull(struct queue *a){
    if(a->index == a->size - 1){
        printf("queue is full");
    }

    else{
        printf("queue has space");
    }
    printf("\n");
}

void peek(struct queue *a, int index){
    if(index < 0 || index > a->index){
        printf("invalid index");
    }
    else{
        printf("your value is %d ", a->arr[index]);
    }
    
}

int main(){
    struct queue q1;
    createQueue(&q1,10);

    //testing enqueue and dequeue
    enqueue(&q1,10);
    enqueue(&q1,1);
    enqueue(&q1,20);
    enqueue(&q1,130);
    dequeue(&q1);
    enqueue(&q1,105);
    enqueue(&q1,101);
    enqueue(&q1,106);
    enqueue(&q1,101);
    enqueue(&q1,108);
    dequeue(&q1);
    enqueue(&q1,104);
    isempty(&q1);
    display(&q1);
    isfull(&q1);
    peek(&q1,5);
}