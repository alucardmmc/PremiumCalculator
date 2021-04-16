using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PremiumAPI.Model;

namespace PremiumAPI.Application
{
    public static class Validator
    {

        public static bool ValidateAge(CalculatorData cd)
        {
            var today = DateTime.Today;
            var age = today.Year - cd.BirthDate.Year;

            // Go back to the year in which the person was born in case of a leap year
            if (cd.BirthDate.Date > today.AddYears(-age))
            {
                age--;
            }

            if (cd.Age == age)
            {
                return true;
            } else
            {
                return false;
            }
        }

    }
}
