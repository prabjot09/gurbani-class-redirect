var langTog = "English"; //opposite of default language

const sectionNames = ["nitnem", "rotationM", "rotationE", "extra banis", "saveiye"];

const nitnem = [["nitnem", "Nitnem", "ਨਿਤਨੇਮ"],
                ["N1", "Jap Ji Sahib", "ਜਪ ਜੀ ਸਾਹਿਬ", "japu"],
                ["N2", "Jaap Sahib", "ਜਾਪ ਸਾਹਿਬ"],
                ["N3", "Tav Prasaad Saveiye", "ਤ੍ਵ ਪ੍ਰਸਾਦਿ ਸਵੱਯੇ"],
                ["N4", "Benti Chaupee", "ਕਬਯੋ ਬਾਚ ਬੇਨਤੀ ਚੋਪਈ"],
                ["N5", "Anand Sahib", "ਅਨੰਦੁ ਸਾਹਿਬ"],
                ["N6", "Rehraas Sahib", "ਰਹਰਾਸਿ ਸਾਹਿਬ"],
                ["N7", "Sohila Sahib", "ਸੋਹਿਲਾ ਸਾਹਿਬ"]];

const rotationM = [["rotationM", "Morning Banis After Nitnem", "ਨਿਤਨੇਮ ਤੋਂ ਬਾਅਦ ਸਵੇਰ ਦੀਆਂ ਬਾਣੀਆਂ"],
                    ["RM1", "Barah Maha Maaj", "ਬਾਰਹ ਮਾਹਾ ਮਾਂਝ"],
                    ["RM2", "Ramkali Ki Vaar", "ਰਾਮਕਲੀ ਕੀ ਵਾਰ (ਰਾਇ ਬਲਵੰਡਿ ਤਥਾ ਸਤੈ)"],
                    ["RM3", "Choubole", "ਚਉਬੋਲੇ"],
                    ["RM4", "Mahalla 5 Gatha", "ਮਹਲਾ ੫ ਗਾਥਾ"],
                    ["RM5", "Karhale", "ਕਰਹਲੇ"]];

const rotationE = [["rotationE", "Evening Banis After Nitnem", "ਨਿਤਨੇਮ ਤੋਂ ਬਾਅਦ ਸ਼ਾਮ ਦੀਆਂ ਬਾਣੀਆਂ"],
                    ["RE1", "Basant Ki Vaar", "ਬਸੰਤ ਕੀ ਵਾਰ"],
                    ["RE2", "Kuchaji", "ਕੁਚਜੀ"],
                    ["RE3", "Suchaji", "ਸੁਚਜੀ"],
                    ["RE4", "Gunvanti", "ਗੁਣਵੰਤੀ"],
                    ["RE5", "Lavaan", "ਲਾਵਾਂ"],
                    ["RE6", "Funhe Mahalla 5", "ਫੁਨਹੇ ਮਹਲਾ ੫"],
                    ["RE7", "Vaar Sat", "ਵਾਰ ਸਤ"],
                    ["RE8", "Ramkali Sad", "ਰਾਮਕਲੀ ਸਦੁ"]];

const extra = [["extra", "Extra Banis", "ਵਾਧੂ ਬਾਣੀਆਂ"],
                ["E1", "Sukhmani Sahib", "ਸੁਖਮਨੀ ਸਾਹਿਬ "],
                ["E2", "Asa Di Vaar", "ਆਸਾ ਦੀ ਵਾਰ"], 
                ["E3", "Salok Sehaskritti", "ਸਲੋਕ ਸਹਸਕ੍ਰਿਤੀ"],
                ["E4", "Salok Mahalla 9", "ਸਲੋਕ ਮਹਲਾ ੯"],
                ["E5", "Shabad Hazare", "ਸ਼ਬਦ ਹਜ਼ਾਰੇ"]];

const saveiye = [["saveiye", "Bhatta De Saveiye", "ਭੱਟਾਂ ਦੇ ਸਵੱਯੇ"],
                    ["S1", "Saveiye Sri Mukhbak Mahalla 5-1", "ਸਵੱਯੇ ਸ੍ਰੀ ਮੁਖਬਾਕ੍ਯ ਮਹਲਾ ੫ - ੧"],
                    ["S2", "Saveiye Sri Mukhbak Mahalla 5-2", "ਸਵੱਯੇ ਸ੍ਰੀ ਮੁਖਬਾਕ੍ਯ ਮਹਲਾ ੫ - ੨"],
                    ["S3", "Saveiye Mahalle Pehle Ke", "ਸਵਈਏ ਮਹਲੇ ਪਹਿਲੇ ਕੇ"],
                    ["S4", "Saveiye Mahalle Dooje Ke", "ਸਵਈਏ ਮਹਲੇ ਦੂਜੇ ਕੇ"],
                    ["S5", "Saveiye Mahalle Teeje Ke", "ਸਵਈਏ ਮਹਲੇ ਤੀਜੇ ਕੇ"],
                    ["S6", "Saveiye Mahalle Chauthe Ke", "ਸਵਈਏ ਮਹਲੇ ਚਉਥੇ ਕੇ"],
                    ["S7", "Saveiye Mahalle Panjve Ke", "ਸਵਈਏ ਮਹਲੇ ਪੰਜਵੇ ਕੇ"]];
let baniNames = {};
baniNames[sectionNames[0]] = nitnem;
baniNames[sectionNames[1]] = rotationM;
baniNames[sectionNames[2]] = rotationE;
baniNames[sectionNames[3]] = extra;
baniNames[sectionNames[4]] = saveiye;

function setBaniNames(section) {
    var lang = 1;
    if (langTog == "Punjabi") {
        lang = 2;
    } 

    var labels = baniNames[section];
    console.log(baniNames[section]);
    document.getElementById(labels[0][0]).innerHTML = labels[0][lang];
    for (var i = 1; i < labels.length; i++) {
        console.log(labels[i][0]);
        document.getElementById(labels[i][0]).innerHTML = labels[i][lang];
    }
}

function toggleLanguage() {
    var langbut = document.getElementById("tog")
    langbut.innerHTML = "To " + langTog;

    if (langTog == "Punjabi") {
        langTog = "English";
    }
    else {
        langTog = "Punjabi";
    }
    
    for (var i = 0; i < sectionNames.length; i++) {
        setBaniNames(sectionNames[i]);
    }
}

function searchPage() {
    var page = document.getElementById("pageInput").value;
    if (typeof(parseInt(page)) != "number" || parseFloat(page) != Math.floor(parseInt(page))) {
        window.alert("Error: The page value " + page + " is invalid. \n \
                    Please enter a number with no decimals");
    } 
    else {
        page = parseInt(page);
        console.log(page);
        if (page < 0 || page > 1430) {
            window.alert("Error: The page value " + page + " is not within 0 and 1430! \n \
                        Please enter a number within range 0 to 1430")
        }
        else {
            var strPage = "";
            for (var i = 0; i < 4; i++) {
                strPage = (page%10) + strPage;
                page = (page - page%10) / 10;
            }
            window.open("http://srigurugranth.net/" + strPage + ".html")
        }
    }
}


window.onload = function () {
    toggleLanguage();
    for (var i = 0; i < sectionNames.length; i++) {
        console.log(sectionNames[i]);
        setBaniNames(sectionNames[i]);
    }      
}