//>>built
(function(a,b){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?b(require("../moment")):"function"===typeof define&&define.amd?define("moment/locale/nb",["../moment"],b):b(a.moment)})(this,function(a){return a.defineLocale("nb",{months:"januar februar mars april mai juni juli august september oktober november desember".split(" "),monthsShort:"jan. feb. mars april mai juni juli aug. sep. okt. nov. des.".split(" "),monthsParseExact:!0,weekdays:"s\u00f8ndag mandag tirsdag onsdag torsdag fredag l\u00f8rdag".split(" "),
weekdaysShort:"s\u00f8. ma. ti. on. to. fr. l\u00f8.".split(" "),weekdaysMin:"s\u00f8 ma ti on to fr l\u00f8".split(" "),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i g\u00e5r kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",
m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en m\u00e5ned",MM:"%d m\u00e5neder",y:"ett \u00e5r",yy:"%d \u00e5r"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})});