using System;

namespace PremiumAPI.Model
{
    public class CalculatorData
    {
        // Properties
        public DateTime BirthDate { get; set; }

        public string State { get; set; }

        public int Age { get; set; }

        public double Premium { get; set; }

        public CalculatorData(string birthDate, string state, int age)
        {
            this.BirthDate = DateTime.Parse(birthDate);
            this.State = state;
            this.Age = age;
            this.Premium = 0;
        }

    }
}
