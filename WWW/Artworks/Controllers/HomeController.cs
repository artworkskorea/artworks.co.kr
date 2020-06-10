using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace Artworks.Controllers
{
    public class HomeController : Controller
    {
        public int i = 0;

        /// <summary>
        /// index
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public ActionResult Index(string id)
        {
            SetMenu(id);

            ViewBag.Item1 = (from x in TEXT where x.Key == "Item1" select x.Value).ToList()[0][i];
            ViewBag.Item2 = (from x in TEXT where x.Key == "Item2" select x.Value).ToList()[0][i];
            ViewBag.Item3 = (from x in TEXT where x.Key == "Item3" select x.Value).ToList()[0][i];
            ViewBag.Item4 = (from x in TEXT where x.Key == "Item4" select x.Value).ToList()[0][i];
            ViewBag.Item5 = (from x in TEXT where x.Key == "Item5" select x.Value).ToList()[0][i];
            ViewBag.Item6 = (from x in TEXT where x.Key == "Item6" select x.Value).ToList()[0][i];

            ViewBag.Item1s = (from x in TEXT where x.Key == "Item1" select x.Value).ToList()[0][i + 2];
            ViewBag.Item2s = (from x in TEXT where x.Key == "Item2" select x.Value).ToList()[0][i + 2];
            ViewBag.Item3s = (from x in TEXT where x.Key == "Item3" select x.Value).ToList()[0][i + 2];
            ViewBag.Item4s = (from x in TEXT where x.Key == "Item4" select x.Value).ToList()[0][i + 2];
            ViewBag.Item5s = (from x in TEXT where x.Key == "Item5" select x.Value).ToList()[0][i + 2];
            ViewBag.Item6s = (from x in TEXT where x.Key == "Item6" select x.Value).ToList()[0][i + 2];

            ViewBag.Item1c = (from x in TEXT where x.Key == "Item1" select x.Value).ToList()[0][4];
            ViewBag.Item2c = (from x in TEXT where x.Key == "Item2" select x.Value).ToList()[0][4];
            ViewBag.Item3c = (from x in TEXT where x.Key == "Item3" select x.Value).ToList()[0][4];
            ViewBag.Item4c = (from x in TEXT where x.Key == "Item4" select x.Value).ToList()[0][4];
            ViewBag.Item5c = (from x in TEXT where x.Key == "Item5" select x.Value).ToList()[0][4];
            ViewBag.Item6c = (from x in TEXT where x.Key == "Item6" select x.Value).ToList()[0][4];

            return View();
        }

        /// <summary>
        /// 브랜드
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public ActionResult Brand(string id)
        {
            SetMenu(id);

            ViewBag.Brand1 = (from x in TEXT where x.Key == "Brand1" select x.Value).ToList()[0][i];
            ViewBag.Brand2 = (from x in TEXT where x.Key == "Brand2" select x.Value).ToList()[0][i];
            ViewBag.Brand3 = (from x in TEXT where x.Key == "Brand3" select x.Value).ToList()[0][i];

            return View();
        }

        /// <summary>
        /// 판매처
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public ActionResult Store(string id)
        {
            SetMenu(id);
            
            ViewBag.Brand1 = (from x in TEXT where x.Key == "Brand1" select x.Value).ToList()[0][i];
            ViewBag.Brand2 = (from x in TEXT where x.Key == "Brand2" select x.Value).ToList()[0][i];
            ViewBag.Brand3 = (from x in TEXT where x.Key == "Brand3" select x.Value).ToList()[0][i];

            return View();
        }
        
        /// <summary>
        /// 메뉴별 영문/국문
        /// </summary>
        public Dictionary<string, string[]> TEXT = new Dictionary<string, string[]> {
            {"Home", new string[] {"Home", "홈"}},
            {"Services", new string[] {"Services", "서비스 소개"}},
            {"Brand", new string[] {"Brand", "브랜드"}},
            {"Store", new string[] {"Store", "판매처"}},
            {"Contact", new string[] {"Contact", "연락처"}},
            {"Address", new string[] {"696-7, Yongdoo-dong, Dongdaemoon-gu Seoul, Korea", "서울 동대문구 용두동 696-7"}},
            {"Phone", new string[] {"+82 (02) 541 - 4960", "(02) 541-4960"}},
            {"Language", new string[] {"한국어", "English"}},
                        
            {"OfflineAddress", new string[] {"33, Seocho-daero 74-gil, Seocho-gu, Seoul, Korea", "서울 서초구 서초대로 74길 33"}},
            {"FunshopIntroduce", new string[] {"We offer unique imported goods and exciting, new undiscovered products for all of your needs", "국내에 아직 소개되지 않았거나, 소개는 되었으나 그 가치를 인정 받지 못한 제품을 우선 소개하는 국제적인 콜렉션 커머스 서비스"}},
            {"RaksikIntroduce", new string[] {"We provide unique, imported foods, as well as fresh, healthy groceries produced and shipped daily by our handpicked network of farmers", "믿을 수 있는 생산자가 직접 재배한 식재료와 전세계 아직 접하지 못한 독특한 식품들을 매일 선사하는 서비스"}},
            {"UrbanIntroduce", new string[] {"The products that ARTWORKS SUPPLY Co. deals with are collected from Japan, the United States, and Europe.", "ARTWORKS SUPPLY Co.에서 취급하는 제품들은  일본과 미국 그리고 유럽으로부터 컬렉션 됩니다."}},
            {"FuntennaIntroduce", new string[] {"Discover millions of unique and fun items imported from countries all over the world. This rare collection of goods is selected and curated by our renowned team of trend-spotters, your Funtenna", "숨어 있는 전세계의 신기하고 재미있는 제품을 찾아 내어 소개합니다. 제품으로 보는 세상의 안테나, 펀테나"}},

            {"Item1", new string[] {"VARIDESK", "베리데스크", "Height adjustable desk",  "가장 이상적인 높낮이 조절 책상", "flag_us.png"}},
            {"Item2", new string[] {"Fiorira", "피오리라", "",  "당신에게 차분히 스며드는 하우징 브랜드", "flag_it.png"}},
            {"Item3", new string[] {"Dottus", "도터스", "",  "이태리 감성 휴지통", "flag_it.png"}},
            {"Item4", new string[] {"Acera", "아세라","",  "도자기 머그잔", "flag_tai.png"}},
            //{"Item4", new string[] {"Property bag", "프로퍼티 가방","Stylish & Compotible bag",  "스타일리시하고 활용성 높은 가방", "flag_nl.png"}},            
            {"Item5", new string[] {"AER", "AER","",  "편리한 수납 시스템 가방", "flag_us.png"}},
            //{"Item6", new string[] {"Corrugated paper House", "골판지 미니하우스","Houses made of corrugated paper",  "골판지 종이로 만든 집", "flag_jp.png"}},
            {"Item6", new string[] {"AboutVintage", "어바웃빈티지","",  "북유럽 미니멀 디자인 시계", "flag_den.png"}},

            {"Brand1", new string[] {"Distribution", "독점 수입 공급/유통"}},
            {"Brand2", new string[] {"Retailing and wholesaling", "도매/소매"}},
            {"Brand3", new string[] {"Sales store", "판매처"}},
			{"OfflineAddress2", new string[] { "5, Gangnam-daero 85-gil, Seocho-gu, Seoul", "서울 서초구 강남대로 85길 5 대유타워 1층"}},
            {"OfflinePhone", new string[] {"TEL : +82(02)541-4963  FAX : +82(070)-8650-7999", "TEL : +82(02)541-4963  FAX : +82(070)-8650-7999"}},
            {"OfflinePhone2", new string[] {"TEL : +82(02)-543-4960", "TEL : +82(02)-543-4961"}},

            
        };
        
        private string GetCountry(string url)
        {
            WebRequest webRequest = WebRequest.Create(url);
            WebResponse webResponse = webRequest.GetResponse();

            Stream stream = webResponse.GetResponseStream();
            StreamReader sr = new StreamReader(stream);
            return sr.ReadToEnd().Split(';')[3];
        }

        private string GetIPInfoDB(string ip)
        {
            // ipinfodb 에 free api key 받아서 사용중
            return String.Format("http://api.ipinfodb.com/v3/ip-country/?key=affc9537c3618fa067cdd717e8ad08a9f628e9bba7e535578dbb645abcc5c25a&ip={0}", ip);
        }

        /// <summary>
        /// 사이트 언어 설정
        /// </summary>
        /// <param name="id"></param>
        protected void SetMenu(string id)
        {
            if (id != null && id.ToUpper() == "KR")
            {
                i = 1;
                ViewBag.IntroHeight = "270px";
                ViewBag.Country = "KR";
            }
            else if (id != null && id.ToUpper() == "EN")
            {
                i = 0;
                ViewBag.IntroHeight = "310px";
                ViewBag.Country = "EN";
            }
            else
            {
                string srvcFullUrl = GetIPInfoDB(Request.ServerVariables["REMOTE_ADDR"].ToString());
                i = (GetCountry(srvcFullUrl) == "KR") ? 1 : 0;
                ViewBag.Country = (i == 1) ? "KR" : "EN";
            }

            if (ViewBag.Country == "KR")
                ViewBag.IntroHeight = "270px";
            else
                ViewBag.IntroHeight = "310px";
                        
            ViewBag.Home = (from x in TEXT where x.Key == "Home" select x.Value).ToList()[0][i];
            ViewBag.Services = (from x in TEXT where x.Key == "Services" select x.Value).ToList()[0][i];
            ViewBag.Brand = (from x in TEXT where x.Key == "Brand" select x.Value).ToList()[0][i];
            ViewBag.Store = (from x in TEXT where x.Key == "Store" select x.Value).ToList()[0][i];
            ViewBag.Contact = (from x in TEXT where x.Key == "Contact" select x.Value).ToList()[0][i];
            ViewBag.Language = (from x in TEXT where x.Key == "Language" select x.Value).ToList()[0][i];
            ViewBag.Phone = (from x in TEXT where x.Key == "Phone" select x.Value).ToList()[0][i];
            ViewBag.Address = (from x in TEXT where x.Key == "Address" select x.Value).ToList()[0][i];
            ViewBag.OfflineAddress = (from x in TEXT where x.Key == "OfflineAddress" select x.Value).ToList()[0][i];
            ViewBag.FunshopIntroduce = (from x in TEXT where x.Key == "FunshopIntroduce" select x.Value).ToList()[0][i];
            ViewBag.RaksikIntroduce = (from x in TEXT where x.Key == "RaksikIntroduce" select x.Value).ToList()[0][i];
            ViewBag.UrbanIntroduce = (from x in TEXT where x.Key == "UrbanIntroduce" select x.Value).ToList()[0][i];
            ViewBag.FuntennaIntroduce = (from x in TEXT where x.Key == "FuntennaIntroduce" select x.Value).ToList()[0][i];
			ViewBag.OfflineAddress2 = (from x in TEXT where x.Key == "OfflineAddress2" select x.Value).ToList()[0][i];
            ViewBag.OfflinePhone = (from x in TEXT where x.Key == "OfflinePhone" select x.Value).ToList()[0][i];
            ViewBag.OfflinePhone2 = (from x in TEXT where x.Key == "OfflinePhone2" select x.Value).ToList()[0][i];

        }



		public static string[] RandomizeStrings(string[] arr)
		{
			Random _random = new Random();

			List<KeyValuePair<int, string>> list = new List<KeyValuePair<int, string>>();

			foreach (string s in arr)
			{
				list.Add(new KeyValuePair<int, string>(_random.Next(), s));
			}

			var sorted = from item in list
						 orderby item.Key
						 select item;

			string[] result = new string[arr.Length];

			int index = 0;
			foreach (KeyValuePair<int, string> pair in sorted)
			{
				result[index] = pair.Value;
				index++;
			}

			return result;
		}

    }
}
