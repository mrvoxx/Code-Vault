using System;

namespace DelegateTut
{
    class program
    {
        //creating a variable(delegate) for a function 
        public delegate void myvar();
        //so the variable you creating should be static because you are invoking it inside static Main function
        public static myvar thisIsVariable;


        //NOTE - this is a demonstration of delegate by mrvoxx/ashwin kd 
        static void Main(string[] args)
        {
            thisIsVariable = Hello;

            //two ways to invoke safely 
            //becuase if you invoke without condition (thisIsVariable != null)
            //, it can throw error if their is nothing inside value function
            if (thisIsVariable != null) {
                thisIsVariable();//common way to invoke a function
               thisIsVariable.Invoke();
            }//one way

            //demonstrating multicast delegating
            //they will run sequentually ,means first hello fn and then bye fn 
            thisIsVariable += Bye;
            thisIsVariable?.Invoke();//another better way
        }
      
        //fucntion to say hello
        public static void Hello() {
            Console.WriteLine("Hello world");
        }

        //fucntion to say goodbye
        public static void Bye()
        {
            Console.WriteLine("Goodbye");
        }
    }
}
