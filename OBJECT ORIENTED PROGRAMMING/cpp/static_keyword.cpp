//static in C++ changes how variables or functions behave in terms of lifetime, memory, and acces
// 👉 Created only once
// 👉 Keeps its value even after function ends

#include<iostream>

using namespace std;

void fun() {
    static int x = 0;  // created only once
    x++;
    cout << x << endl;
}

//static variable inside class
// 👉 Shared by all objects
// 👉 Only ONE copy of static variable
// 👉 Not dependent on objects

//static function inside class 
// 👉 Can be called without object
// 👉 Can only access static members

class myclass{
    public:
        //inline static int a = 0; for c++ 17 and above
        static int a;
        static void hello(){
            cout<<"hello world"<<endl;
        }
};

// ⭐ DEFINE static variable outside class because we cannot initiate inside class or main function
int myclass::a = 0;

int main() {
    fun(); // 1
    fun(); // 2
    fun(); // 3

    myclass c1;
    c1.a = 1;
    myclass c2;
    cout<<c2.a<<endl;

    //calling static function using class
    c2.hello();
    //calling static function without using class
    myclass::hello();
    
    
}

