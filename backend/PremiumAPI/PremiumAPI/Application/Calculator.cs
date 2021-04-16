using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PremiumAPI.Model;

namespace PremiumAPI.Application
{
    public static class Calculator
    {

        private static List<double> GetPremiumValues()
        {
            List<double> values = new List<double>()
            {
                150.00,
                200.50,
                120.99,
                85.50,
                100.00,
                175.20,
                125.16,
                100.80,
                90.00
            };

            return values;
        }

        public static void CalculatePremium(CalculatorData cd)
        {
            string state = cd.State;
            int month = cd.BirthDate.Month;
            int age = cd.Age;

            List<double> premiumValues = GetPremiumValues();

            // Logic for New York
            if (state == "NY")
            {
                if (month == 8 && (age >= 18 && age <= 45))
                {
                    cd.Premium = premiumValues[0];
                }
                else if (month == 1 && (age >= 46 && age <= 65))
                {
                    cd.Premium = premiumValues[1];
                }
                else if (age >= 18 && age <= 65)
                {
                    cd.Premium = premiumValues[2];
                }
            }
            // Logic for Alabama
            else if (state == "AL")
            {
                if (month == 11 && (age >= 18 && age <= 65))
                {
                    cd.Premium = premiumValues[3];
                }
                else if (age >= 18 && age <= 65)
                {
                    cd.Premium = premiumValues[4];
                }
            }
            // Logic for Alaska
            else if (state == "AK")
            {
                if (month == 12 && (age >= 65))
                {
                    cd.Premium = premiumValues[5];
                }
                else if (month == 12 && (age >= 18 && age <= 64))
                {
                    cd.Premium = premiumValues[6];
                }
                else if (age >= 18 && age <= 65)
                {
                    cd.Premium = premiumValues[7];
                }
            }
            // Logic for rest of States
            else
            {
                if (age >= 18 && age <= 65)
                {
                    cd.Premium = premiumValues[8];
                }
            }
        }
    }
}
