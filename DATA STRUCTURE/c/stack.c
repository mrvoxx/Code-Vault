#include<stdio.h>
#include<stdlib.h>

struct stack{
    int size;
    int top ;
    int *arr;
};

//to create stack
void createStack(struct stack *a,int size){
    a->size = size;
    a->arr = (int *)malloc(size*sizeof(int));
    a->top=-1;    
}

//to display stack
void displayStack(struct stack *a){
    for(int i =0;i<=a->top;i++){
        printf("%d ",(a->arr)[i]);
    }
    printf("\n");
}

//to insert element 
void push(struct stack *a,int value){
    if(a->top == a->size - 1){
        printf("Stack Overflow\n");
        return;
    }

    else{
        a->top++;
        (a->arr)[a->top] = value;
    }


}

//to remove top element
void pop(struct stack *a){

    if(a->top == -1){
        printf("Stack Underflow\n");
        return;
    }

    else{
        a->top--;
    }


}

//to view top element
void peek(struct stack *a){
    if (a->top == -1) {
        printf("Stack is empty\n");
        return;
    }

    else{
        printf("%d is your top element",(a->arr)[a->top]);
    }
    printf("\n");
}

//to check if stack is full or empty or space left
void isfull(struct stack *a){
    if(a->top == a->size - 1){
        printf("stack is full");
    }

    else if(a->top == -1){
        printf("stack is empty");
    }

    else{
        printf("stack is not full right now");
    }
}

int main(){
    struct stack stk;
    createStack(&stk,10);
    push(&stk,10);
    push(&stk,50);
    push(&stk,60);
    push(&stk,40);
    push(&stk,100);
    push(&stk,1);
    push(&stk,5);
    push(&stk,6);
    push(&stk,4);
    push(&stk,0);
    displayStack(&stk);
    peek(&stk);
    isfull(&stk);

}