using System;

namespace LINQ
{
    class program
    {
        static void Main(string[] args)
        {
            Player p1 = new Player("ashwin", 10, 100);
            Player p2 = new Player("seema", 100, 90);
            Player p3 = new Player("dinesh", 15, 80);
            Player p4 = new Player("tuffy", 5, 20);

            List<Player> totalPlayer = new List<Player> {p1,p2,p3,p4};
            
            //var name = totalPlayer.Select(player => player.name);//return list
            //var hitpoint = totalPlayer.Where(player => player.health > 50);//return list

            //list.Any --> return true or false
            var SearchAkd = totalPlayer.Any(player => player.name == "ashwin");//return true or false
            Console.WriteLine($"ashwin {(SearchAkd ? "exist" : "do not exist")} in player library");

            //var sortByHealth = totalPlayer.OrderBy(p => p.health);
            var sortByHealth = totalPlayer.OrderByDescending(p => p.health);

            foreach ( var p in sortByHealth)
            {
                Console.WriteLine($"{p.name} have {p.health} health");
            }


            var avgHealth = totalPlayer.Average(p => p.health);
            //int avgHealth = Convert.ToInt32(totalPlayer.Average(p => p.health));
            Console.WriteLine($"average health is {avgHealth}");


            // Max --> highest value
            var maxHealth = totalPlayer.Max(player => player.health);
            Console.WriteLine($"Maximum Health = {maxHealth}");

            // Min --> lowest value
            var minHealth = totalPlayer.Min(player => player.health);
            Console.WriteLine($"Minimum Health = {minHealth}");


            // Count --> count items matching condition
            var strongPlayers = totalPlayer.Count(player => player.health > 50);
            Console.WriteLine($"Players with health > 50 = {strongPlayers}");


            // FirstOrDefault --> get first matching object
            var firstPlayer = totalPlayer.FirstOrDefault(player => player.name == "ashwin")
            if (firstPlayer != null)
            {
                Console.WriteLine($"\nFound Player: {firstPlayer.name}");
            }


            // Take --> take first N items
            var top2Players = totalPlayer.Take(2);
            Console.WriteLine("\nFirst 2 Players:");
            foreach (var player in top2Players)
            {
                Console.WriteLine(player.name);
            }


            // Skip --> skip first N items
            var remainingPlayers = totalPlayer.Skip(2);
            Console.WriteLine("\nPlayers After Skipping First 2:");
            foreach (var player in remainingPlayers)
            {
                Console.WriteLine(player.name);
            }


            // GroupBy --> create groups
            // Here we group players based on health > 50
            var groupedPlayers = totalPlayer.GroupBy(player => player.health > 50);
            Console.WriteLine("\nGrouped Players:");
            foreach (var group in groupedPlayers)
            {
                Console.WriteLine(group.Key ? "\nStrong Players" : "\nWeak Players");
                foreach (var player in group)
                {
                    Console.WriteLine($"{player.name} : {player.health}");
                }
            }

            Console.Beep();
            Console.ReadKey();
        }
    }

    class Player
    {
        public String name;
        public int level;
        public int health;

        public Player(String name, int level, int health)
        {
            this.name = name;
            this.level = level;
            this.health = health;
            Console.WriteLine("Player is Successfully Created !!\n\n");
        }

    }
}
