using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TaxiService.Models
{
    public class ApiRequest<T>
    {
        public string UserHash { get; set; }
        public T Data { get; set; }
    }

    public class ApiRequest
    {
        public string UserHash { get; set; }
    }
}