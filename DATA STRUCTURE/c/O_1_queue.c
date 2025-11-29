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
    q->front = 0; //dequeue
    q->rear = -1;//enqueue
    q->size = size;

}

void enqueue(struct queue *q,int value){
    if(q->rear == q->size - 1){
        printf("queue is overflow");
    }

    else{

        q->rear++;
        (q->arr)[q->rear] = value;
        printf("%d is enqueue \n",value);    
    }
}

void dequeue(struct queue *q){
    if(q->front > q->rear){
        printf("queue is underflow");
    }

    else{
        printf("%d is dequeue\n",q->arr[q->front]);
        q->front++;

    }
}

void isempty(struct queue *q){
    if(q->rear + 1 == q->front){
        printf("queue is empty");
    }
}

void isfull(struct queue *q){
    if(q->rear == q->size-1){
        printf("queue is full");
    }
}

void peek(struct queue *q){
    if(q->rear < q->front){
        printf("queue is empty");
    }

    else{
        printf("your first element is %d",q->arr[q->front]);
    }
}

void display(struct queue *q){
    if(q->front>q->rear){
        printf("queue is empty");
    }

    else{
        for(int i = q->front;i<=q->rear;i++){
        printf("%d ",q->arr[i]);
    }
    }
    printf("\n");
}

int main(){
    struct queue q;
    createQueue(&q,5);
    enqueue(&q,10);
    enqueue(&q,40);
    enqueue(&q,70);
    enqueue(&q,7);
    enqueue(&q,0);
    dequeue(&q);

    display(&q);
    
}

