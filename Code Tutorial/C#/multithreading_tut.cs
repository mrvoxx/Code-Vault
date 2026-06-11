using System;

namespace string_tut
{
    class program
    {
        static void countDown()
        {
            for (int i = 10; i >= 0; i--)
            {
                Console.Beep();
                Console.WriteLine($"Timer #1 {i} seconds");
                Thread.Sleep(1000);

                if (i == 0)
                {
                    Console.WriteLine("BOom !!");
                }
            }
        }
        static void countup()
        {
            for (int i = 0; i <= 10; i++)
            {
                Console.Beep();
                Console.WriteLine($"Timer #2 {i} seconds");
                Thread.Sleep( 1000 );

                if( i == 10)
                {
                    Console.WriteLine("BOom !!");
                }
            }
        }
        static void Main(string[] args)
        {
            //Working with a single thread

            //fetching current thread
            Thread mainThread = Thread.CurrentThread;

            //this is new name of main thread 
            mainThread.Name = "This is a Main Thread";
            Console.WriteLine(mainThread.Name);

            countDown();
            Console.WriteLine("1st Timer is over");

            countup();
            Console.WriteLine("2nd Timer is over");

            //working with multiple thread
            Thread t1 = new Thread(countDown);
            t1.Name = "cyborg";

            Thread t2 = new Thread(countup);
            t2.Name = "kraken";

            t1.Start();
            t2.Start();
            Console.WriteLine($"in threading it do not hault hardware because this state you are seeing is at last of {t1.Name} and {t2.Name} thread");
            //two new thread is created and started/initiated using inbuilt method

            Console.ReadKey();
        }
    }
}
