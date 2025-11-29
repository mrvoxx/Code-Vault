#include<stdio.h>
#include<stdlib.h>

struct node{
    int data;
    struct node * left;
    struct node *right;
};

struct node *create(int data){
    struct node *t;
    t= (struct node *)malloc(sizeof(struct node));
    t->data = data;
    t->left = NULL;
    t->right = NULL;

    return t;
}

void preorder(struct node *root){
    if(root!=NULL){
        printf("%d ",root->data);
        preorder(root->left);
        preorder(root->right);
    }
}

void postorder(struct node *root){
    if(root!=NULL){
        preorder(root->left);
        preorder(root->right);
        printf("%d ",root->data);
    }
}

void inorder(struct node *root){
    if(root!=NULL){
        preorder(root->left);
        printf("%d ",root->data);
        preorder(root->right);
    }
}

int isbst(struct node *root){
    static struct node* prev = NULL;
    if(root!=NULL){
        if(!isbst(root->left)){
            return 0;
        }
        if(prev!=NULL && root->data <= prev->data){
            return 0;
        }

        prev = root;
        return isbst(root->right);
    }

    else{
        return 1;
    }
}

struct node * search(struct node *root,int key){
    if(root == NULL){
        return NULL;
    }

    else if(root->data == key){
        return root;
    }

    else if(root->data>key){
        return search(root->left,key);
    }

    else{
        return search(root->right,key);
    }
}


// tree is looking like this 
//             6
//            / \
//           3   8
//          / \
//         2  5
int main(){

    struct node *t = create(6);
    struct node *t2 = create(3);
    struct node *t3 =create(8);
    struct node *t4 =create(2);
    struct node *t5 =create(5);

    t->left = t2;
    t->right = t3;
    t2->left = t4;
    t2->right = t5;

    printf("this is preorder transversal : ");
    preorder(t);
    printf("\n");
    printf("this is preorder transversal : ");
    postorder(t);
    printf("\n");
    printf("this is preorder transversal : ");
    inorder(t);

    printf("\n");
    int a = isbst(t);
    printf("%d ",a);

    printf("\n");
    struct node * n= search(t,8);
    printf("%d",n->data);

    return 0;
}