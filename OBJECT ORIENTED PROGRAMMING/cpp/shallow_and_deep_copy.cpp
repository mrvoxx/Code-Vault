// Copies only the value of variables.
// If a variable contains an address (pointer), it copies the address, not the data it points to.

// Deep copy creates a new separate memory block and copies the value into it.
// You must write your own copy constructor.

#include<iostream>

using namespace std;


class mycopy{
    public:
        int num1;
        int *num2;

    //constructor to give value
    mycopy(int num1,int num){
        this->num1 = num1;
        num2 = new int;
        *num2 = num;
        

        cout<<"your given are "<<num1<<" and "<<*num2<<endl;
    }

    //copy constructor
    mycopy(mycopy &c){
        this->num1 = c.num1;
        num2 = new int;
        *num2 = *c.num2;

        cout<<"value copied successfully"<<endl; 
    }

    void getinfo(){
        cout<<"number 1 is "<<num1<<" and number 2 is "<<*num2<<endl;
    }

    //destructor for dynamic memory properties/attribute
    ~mycopy(){
        delete num2;
        cout<<"memory of num2 pointer has been freed"<<endl;
    }
};

int main(){
    mycopy c1(20,50);
    mycopy c2(c1);
    c1.getinfo();
    *(c2.num2) = 30;
    c2.getinfo();


}