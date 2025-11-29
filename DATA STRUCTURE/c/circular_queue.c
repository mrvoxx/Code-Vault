//circular queue

#include<stdio.h>
#include<stdlib.h>

struct queue{
    int size;
    int front;
    int rear;
    int *arr;
};

void createQueue(struct queue *q,int size){
    q->arr = (int*)malloc(size*sizeof(int));
    q->front = 0;
    q->rear = 0;
    q->size = size;
}

int isfull(struct queue *q){
    return (q->rear + 1) % q->size == q->front;
}

int isempty(struct queue *q){
    return q->rear == q->front;
}

void enqueue(struct queue *q,int value){
    if(isfull(q)){
        printf("queue is full\n");
    }
    else{
        q->rear = (q->rear + 1) % q->size;
        q->arr[q->rear] = value;
        printf("%d is enqueue \n",value);
    }
}

void dequeue(struct queue *q){
    if(isempty(q)){
        printf("queue is empty\n");
    }
    else{
        q->front = (q->front + 1) % q->size;
        printf("%d is dequeue\n",q->arr[q->front]);
    }
}

void display(struct queue *q){
    if(isempty(q)){
        printf("queue is empty\n");
        return;
    }

    int i = (q->front + 1) % q->size;
    while(i != (q->rear + 1) % q->size){
        printf("%d ", q->arr[i]);
        i = (i + 1) % q->size;
    }
    printf("\n");
}

int main(){
    struct queue q;
    createQueue(&q,5);

    enqueue(&q,10);
    enqueue(&q,2);
    

    display(&q);
}
