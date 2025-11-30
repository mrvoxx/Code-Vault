//constructor is a special method invoke automatically at a time of object creation. used for initilisation
//same name as class 
//constructor does not have return type
//only called once automatically at the time of object creation
//memory allocation happen when constructor is called

#include<iostream>

using namespace std;

class myconstructor{
    public:
        int num1;
        int num2;
        int cnt = 1;

    //non paramerized constructor
    myconstructor(){
        cout<<"your constructor1 has been"<<endl;
    }

    void getinfo(){
        cout<<num1<<" is your first number and "<<num2<<" is your second number"<<endl;
    }

    //destrutor - A destructor is used to clean up—it frees memory
    //closes files, and releases resources when an object’s lifetime ends.
    ~myconstructor(){
        cout<<"destruction done :)"<<endl;
    }
};

class myconstructor2{
    public:
        int num1;
        int num2;
    
    myconstructor2(){
        cout<<"your constructor2 has been without parameters "<<endl;
    }

    //paramerized constructor
    myconstructor2(int num1,int num2){
        //this is a special pointer in c++ pointing to current object
        this->num1 = num1;
        //*(this).num1 = num1; is another way to use this pointer 
        this->num2 = num2;
        cout<<"constructor2 new object value are "<<num1<<" & "<<num2<<" has been assign\n"<<endl;
    }

    //custom copy constructor
    myconstructor2(myconstructor2 &obj){ //copy constructor is pass by reference
        this->num1 = obj.num1;
        this->num2 = obj.num2;

        cout<<"this is your copy constructor for myconstructor2"<<endl;
    }

    void getinfo(){
        cout<<num1<<" is your first number and "<<num2<<" is your second number"<<endl;
    }

};

int main(){
    myconstructor con1;//constructor get initialised at time of object creation
    con1.num1 = 20;
    con1.num2 = 30;
    con1.getinfo();

    myconstructor con2(con1);//default copy constructor for myconstructor 
    con2.getinfo();

    cout<<"\n"<<endl;

    myconstructor2 mcon1;// constructor without parameter 
    myconstructor2 mcon2(50,100);
    //may constructor can be with different parameter it is known as constructor overloading
    //constructor overloading comes under polymorphism

    myconstructor2 mcon3(mcon2);
    mcon3.getinfo();


}