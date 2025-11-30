//Inheritance allows you to reuse code from an existing class by creating a new class that extends it

#include<iostream>

using namespace std;

class person{
    public:
        string name;
        int age;

    person(){
        cout<<"parent constructor has been called.."<<endl;
    }

    //first child destructor initiated and then parent destructor
    ~person(){
        cout<<"this is parent destructor"<<endl;
    }
};

//student(child class) inherited from person(parent class) 
class student : public person{
    public:
        int rollno;

    student(string name,int age,int rollno){
        cout<<"child constructor assigning the value"<<endl;
        this->name = name;
        this->age = age;
        this->rollno = rollno;
    }

    void getinfo(){
        cout<<"name : "<<name<<endl;
        cout<<"age : "<<age<<endl;
        cout<<"roll number : "<<rollno<<endl;
    }

    ~student(){
        cout<<"this is child destructor"<<endl;
    }
};

int main(){
    student s1("ashwin",21,6);
    s1.getinfo();
}



// +--------------------+-----------------------------------------------+--------------------------+
// |   TYPE OF          |                  DESCRIPTION                   |        EXAMPLE           |
// |  INHERITANCE       |                                               |      (Class Relation)    |
// +--------------------+-----------------------------------------------+--------------------------+
// | 1. Single          | One child class inherits from one parent      |   A -> B                 |
// |                    | class.                                        |                          |
// +--------------------+-----------------------------------------------+--------------------------+
// | 2. Multilevel      | A class inherits from another derived class.  |   A -> B -> C            |
// +--------------------+-----------------------------------------------+--------------------------+
// | 3. Multiple        | One child inherits from two or more parents.  |   A ---->                |
// |                    |                                               |          \               |
// |                    |                                               |           -> C           |
// |                    |                                               |          /               |
// |                    |                                               |   B ---->                |
// +--------------------+-----------------------------------------------+--------------------------+
// | 4. Hierarchical    | One parent has multiple child classes.        |         -> B             |
// |                    |                                               |   A ---->                |
// |                    |                                               |         -> C             |
// +--------------------+-----------------------------------------------+--------------------------+
// | 5. Hybrid          | Combination of multiple types of              |   A -> B -> D            |
// |                    | inheritance (e.g., hierarchical + multiple).  |   A -> C -> D            |
// +--------------------+-----------------------------------------------+--------------------------+
// | 6. Multipath       | Child inherits from two classes that both     |   A -> B -> D            |
// |                    | inherit from the same base class (diamond).   |   A -> C -> D            |
// +--------------------+-----------------------------------------------+--------------------------+


// +-------------------+------------------------+------------------------+-------------------------+
// |   Member Type     |   Public Inheritance   | Protected Inheritance |   Private Inheritance   |
// +-------------------+------------------------+------------------------+-------------------------+
// | Public Members    |   Public in child      | Protected in child     |   Private in child      |
// +-------------------+------------------------+------------------------+-------------------------+
// | Protected Members |   Protected in child   | Protected in child     |   Private in child      |
// +-------------------+------------------------+------------------------+-------------------------+
// | Private Members   |   Not inherited        | Not inherited          |   Not inherited         |
// +-------------------+------------------------+------------------------+-------------------------+
// | Accessibility     |   Most accessible      | Restricted             |   Most restricted       |
// +-------------------+------------------------+------------------------+-------------------------+
