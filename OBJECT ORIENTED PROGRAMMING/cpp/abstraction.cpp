//Abstraction = Hide complexity + Show only essential features

#include<iostream>

using namespace std;

class Shape {//we cannot object of abstract class
public:
    virtual void draw() = 0; // pure virtual → create's abstraction 
};

class Circle : public Shape {
public:
    void draw() {
            cout<<"   000   \n";
            cout<<" 0     0 \n";
            cout<<"0       0\n";
            cout<<"0       0\n";
            cout<<" 0     0 \n";
            cout<<"   000   \n";
    }
};

int main(){
    Circle circle;
    circle.draw(); 
}
