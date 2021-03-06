using System;
using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Acess-Control-Expose-Header", "Application-Error");
            response.Headers.Add("Acess-Control-Allow-Origin", "*");
        }

        public static int CalculateAge(DateTime DateOfBirth)
        {
            var age = DateTime.Now.Year - DateOfBirth.Year;
            if(DateOfBirth.AddYears(age) > DateTime.Today)
            {
                age--;
            }
            return age;
        }
    }
}