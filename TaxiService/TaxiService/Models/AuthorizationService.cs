using DAL;
using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace TaxiService.Models
{
    public static class AuthorizationService
    {
        private static SHA512Cng _cryptoService = new SHA512Cng();
        public static bool CheckUserAuthorization(string userSha, UserRole requiredRole)
        {
            if(!Repository.Instance.LoggedInUsers.TryGetValue(userSha, out User foundUser))
                return false;
            if (foundUser.Blocked)
                return false;
            if(foundUser.Role < requiredRole)
                return false;
            return true;
        }

        public static bool BlockUser(string username)
        {
            var user = Repository.Instance.TaxiServiceRepository.Users.FirstOrDefault(x => x.Username == username);
            if (user == null)
                return false;
            user.Blocked = true;
            Repository.Instance.TaxiServiceRepository.SaveChanges();
            return true;
        }

        public static bool UnblockUser(string username)
        {
            var user = Repository.Instance.TaxiServiceRepository.Users.FirstOrDefault(x => x.Username == username);
            if (user == null)
                return false;
            user.Blocked = false;
            Repository.Instance.TaxiServiceRepository.SaveChanges();
            return true;
        }
        public static string ComputeSha512(string original)
        {
            var bytes = Encoding.UTF8.GetBytes(original);
            var shaBytes = _cryptoService.ComputeHash(bytes);
            return BitConverter.ToString(shaBytes).Replace("-","");
        }
    }
}