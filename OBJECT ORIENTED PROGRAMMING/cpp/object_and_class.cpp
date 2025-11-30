#include<iostream>


using namespace std;

//init our class
class myclass{ 

    private: //this is an access modifier to set visibility e.g public or private
        int secret_num;

    //their are 3 type of access modifier 
    //  1.public - access outside the class
    //  2.private - access only inside class (by default) 
    //  3.protected - access only inside class and derived class

    public:  
        int num1; //properties or attribute
        int num2;

    //method of class which is called member method
    int add(){
        return num1 + num2;
    }

    //this is a setter it store value to class private attribute
    void setsecret(int value){
        secret_num = value;
    }

    //this is a getter it retrive class's private attribute value
    void getsecret(){
        cout<<"your secret value is "<<secret_num<<endl;
    }


    void addsecret(){
        cout<<"now sum is "<<num1+num2+secret_num<<endl;
    }
};

//in above class we have done encapsulation 
//encapsulation means wrapping up data properties/attribute and member function in a single unit called class
//data properties + member function = class in whole this is encapsualtion

int main(){
    myclass obj; //creating a class "myclass" object "obj"
    obj.num1 = 10; //giving values to is properties
    obj.num2 = 20;

    int sum = obj.add();
    cout<<"addition of "<<obj.num1<<" and "<<obj.num2<<" is "<<sum<<endl;

    obj.setsecret(60);
    obj.getsecret();
    obj.addsecret();


    return 0;
}