//Overloading means using the same name for multiple functions (or operators) but with different parameters.

#include<iostream>

using namespace std;


class myclass{
    public:
        //constructor overloading(compile time overloading)
        myclass(){
            cout<<"this is non-parameterized constructor"<<endl;
        }

        myclass(int temp){
            cout<<"this is parameterized constructor"<<endl;
        }

        //function overloading(compile time overloading)
        void fun(){
            cout<<"this is non-parameterized function"<<endl;
        }

        void fun(int temp){
            cout<<"this is parameterized function"<<endl;
        }

        virtual void fun2(){
            cout<<"virtual function"<<endl;
        }
};

//Overriding means a child class provides its own version of a function that already exists in the parent class.

class childclass : public myclass{
    public:
        void fun(){//if function name is same child class function has more priority than parent class(function overridng)
            cout<<"this is my child class function"<<endl;
        }

        void fun2(){//A virtual function in C++ is a function in a base (parent) class 
                    //that you want to override in a derived (child) class and call using base-class pointer.
            cout<<"this is our child funtion of fun2"<<endl;
        }
};

int main(){
    myclass c1;
    myclass c2(0);
    c1.fun();
    c1.fun(0);

    childclass cc;
    cc.fun();
    cc.fun2();
}