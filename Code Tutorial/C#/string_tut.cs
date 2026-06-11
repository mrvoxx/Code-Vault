using System;

namespace string_tut
{
    class program
    {
        static void Main(string[] args)
        {
            String firstName = "ashwin";
            String lastName = "kishor dangwal";
            String phoneNo = "123-456-7890";


            //to convert character to uppercase
            firstName = firstName.ToUpper();
            Console.WriteLine(firstName);

            //to convert character to lower case
            Console.WriteLine(firstName.ToLower());

            //to replace character
            Console.WriteLine(phoneNo.Replace("-","he"));

            //to insert character
            Console.WriteLine(phoneNo.Replace("he", "/").Insert(0,"Note - this is your phone no -->"));

            //to find the length of string
            Console.WriteLine(lastName.Length);

            //to create a substring from 0 index of 3 character
            Console.WriteLine(lastName.Substring(0, 3));

        }
    }
}
