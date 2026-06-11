using System;
using System.Threading.Tasks;

class Program
{
    //void is fire and forget
    static async Task GetData()
    {
        Console.WriteLine("data is being fetched...");
        //assume their is time took to get data
        await Task.Delay(4000);
        Console.Beep();//for sound just for fun
        Console.WriteLine("Here is your data ....");
    }

    static void hello()
    {
        Console.WriteLine("hello world");
    }
    
    static async Task Main(string[] args)
    {
        //GetData is you t1 and initiated
        Task t1 = GetData();

        //as GetData Waits for fetching  "await Task.Delay(4000);" hello execute
        hello();

        //before terminating the function wait for t1 task to finish
        await t1;
    }

}
