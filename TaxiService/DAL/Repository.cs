using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class Repository
    {
        private static Repository _instance;
        private static object _syncLock = new object();

        public static Repository Instance
        {
            get
            {
                if(_instance == null)
                {
                    lock (_syncLock)
                    {
                        if(_instance == null)
                        {
                            _instance = new Repository();
                        }
                    }
                }
                return _instance;
            }
        }

        private TaxiServiceContext _taxiServiceRepository;
        public TaxiServiceContext TaxiServiceRepository => _taxiServiceRepository;

        public Dictionary<string, User> LoggedInUsers { get; private set; } = new Dictionary<string, User>();

        private Repository()
        {
            _taxiServiceRepository = new TaxiServiceContext("TaxiServiceLocalDBConnectionString");
        }

        public bool UserExists(string username)
        {
            return (from user in _taxiServiceRepository.Users
                    where user.Username == username
                    select user).ToArray().Length != 0;
        }

        public bool CarExists(int carNumber)
        {
            return (from car in _taxiServiceRepository.Cars
                    where car.CarNumber == carNumber
                    select car).ToArray().Length != 0;
        }
    }
}
