// var langTog = "English"; //opposite of default language
// var darkTog = 0;

// const sectionNames = ["nitnem", "rotationM", "rotationE", "extra banis", "saveiye"];

// const nitnem = [["nitnem", "Nitnem", "ਨਿਤਨੇਮ"],
//                 ["N1", "Jap Ji Sahib", "ਜਪ ਜੀ ਸਾਹਿਬ", "japu"],
//                 ["N2", "Jaap Sahib", "ਜਾਪ ਸਾਹਿਬ"],
//                 ["N3", "Tav Prasaad Saveiye", "ਤ੍ਵ ਪ੍ਰਸਾਦਿ ਸਵੱਯੇ"],
//                 ["N4", "Benti Chaupee", "ਕਬਯੋ ਬਾਚ ਬੇਨਤੀ ਚੋਪਈ"],
//                 ["N5", "Anand Sahib", "ਅਨੰਦੁ ਸਾਹਿਬ"],
//                 ["N6", "Rehraas Sahib", "ਰਹਰਾਸਿ ਸਾਹਿਬ"],
//                 ["N7", "Sohila Sahib", "ਸੋਹਿਲਾ ਸਾਹਿਬ"]];

// const rotationM = [["rotationM", "Morning Banis After Nitnem", "ਨਿਤਨੇਮ ਤੋਂ ਬਾਅਦ ਸਵੇਰ ਦੀਆਂ ਬਾਣੀਆਂ"],
//                     ["RM1", "Barah Maha Maaj", "ਬਾਰਹ ਮਾਹਾ ਮਾਂਝ"],
//                     ["RM2", "Ramkali Ki Vaar", "ਰਾਮਕਲੀ ਕੀ ਵਾਰ (ਰਾਇ ਬਲਵੰਡਿ ਤਥਾ ਸਤੈ)"],
//                     ["RM3", "Choubole", "ਚਉਬੋਲੇ"],
//                     ["RM4", "Mahalla 5 Gatha", "ਮਹਲਾ ੫ ਗਾਥਾ"],
//                     ["RM5", "Karhale", "ਕਰਹਲੇ"]];

// const rotationE = [["rotationE", "Evening Banis After Nitnem", "ਨਿਤਨੇਮ ਤੋਂ ਬਾਅਦ ਸ਼ਾਮ ਦੀਆਂ ਬਾਣੀਆਂ"],
//                     ["RE1", "Basant Ki Vaar", "ਬਸੰਤ ਕੀ ਵਾਰ"],
//                     ["RE2", "Kuchaji", "ਕੁਚਜੀ"],
//                     ["RE3", "Suchaji", "ਸੁਚਜੀ"],
//                     ["RE4", "Gunvanti", "ਗੁਣਵੰਤੀ"],
//                     ["RE5", "Lavaan", "ਲਾਵਾਂ"],
//                     ["RE6", "Funhe Mahalla 5", "ਫੁਨਹੇ ਮਹਲਾ ੫"],
//                     ["RE7", "Vaar Sat", "ਵਾਰ ਸਤ"],
//                     ["RE8", "Ramkali Sad", "ਰਾਮਕਲੀ ਸਦੁ"]];

// const extra = [["extra", "Extra Banis", "ਵਾਧੂ ਬਾਣੀਆਂ"],
//                 ["E1", "Sukhmani Sahib", "ਸੁਖਮਨੀ ਸਾਹਿਬ "],
//                 ["E2", "Asa Di Vaar", "ਆਸਾ ਦੀ ਵਾਰ"], 
//                 ["E3", "Salok Sehaskritti", "ਸਲੋਕ ਸਹਸਕ੍ਰਿਤੀ"],
//                 ["E4", "Salok Mahalla 9", "ਸਲੋਕ ਮਹਲਾ ੯"],
//                 ["E5", "Shabad Hazare", "ਸ਼ਬਦ ਹਜ਼ਾਰੇ"]];

// const saveiye = [["saveiye", "Bhatta De Saveiye", "ਭੱਟਾਂ ਦੇ ਸਵੱਯੇ"],
//                     ["S1", "Saveiye Sri Mukhbak Mahalla 5-1", "ਸਵੱਯੇ ਸ੍ਰੀ ਮੁਖਬਾਕ੍ਯ ਮਹਲਾ ੫ - ੧"],
//                     ["S2", "Saveiye Sri Mukhbak Mahalla 5-2", "ਸਵੱਯੇ ਸ੍ਰੀ ਮੁਖਬਾਕ੍ਯ ਮਹਲਾ ੫ - ੨"],
//                     ["S3", "Saveiye Mahalle Pehle Ke", "ਸਵਈਏ ਮਹਲੇ ਪਹਿਲੇ ਕੇ"],
//                     ["S4", "Saveiye Mahalle Dooje Ke", "ਸਵਈਏ ਮਹਲੇ ਦੂਜੇ ਕੇ"],
//                     ["S5", "Saveiye Mahalle Teeje Ke", "ਸਵਈਏ ਮਹਲੇ ਤੀਜੇ ਕੇ"],
//                     ["S6", "Saveiye Mahalle Chauthe Ke", "ਸਵਈਏ ਮਹਲੇ ਚਉਥੇ ਕੇ"],
//                     ["S7", "Saveiye Mahalle Panjve Ke", "ਸਵਈਏ ਮਹਲੇ ਪੰਜਵੇ ਕੇ"]];

// const colorSettings = [["*", "color", "black", "white"],
//                         ["header", "background-color", "orange", "#111111"],
//                         ["header", "border-color", "black", "white"],
//                         ["#sggs", "border-color", "black", "white"],
//                         ["#baniSelection", "background-color", "orange", "black"],
//                         ["body", "background-color", "beige", "#222222"],
//                         [".baniOptions", "border-color", "#05f", "orange"],
//                         [".optionsHeading", "color", "#05f", "orange"],
//                         ["#pageInput", "color", "black", "black"]];

// let baniNames = {};
// baniNames[sectionNames[0]] = nitnem;
// baniNames[sectionNames[1]] = rotationM;
// baniNames[sectionNames[2]] = rotationE;
// baniNames[sectionNames[3]] = extra;
// baniNames[sectionNames[4]] = saveiye;

// function setBaniNames(section) {
//     var lang = 1;
//     if (langTog == "Punjabi") {
//         lang = 2;
//     } 

//     var labels = baniNames[section];
//     document.getElementById(labels[0][0]).innerHTML = labels[0][lang];
//     for (var i = 1; i < labels.length; i++) {
//         document.getElementById(labels[i][0]).innerHTML = labels[i][lang];
//     }
// }

// function toggleLanguage() {
//     var langbut = document.getElementById("tog")
//     langbut.innerHTML = "To " + langTog;

//     if (langTog == "Punjabi") {
//         langTog = "English";
//     }
//     else {
//         langTog = "Punjabi";
//     }
    
//     for (var i = 0; i < sectionNames.length; i++) {
//         setBaniNames(sectionNames[i]);
//     }
// }

function searchPage() {
    var page = document.getElementById("pageInput").value;
    if (typeof(parseInt(page)) != "number" || parseFloat(page) != Math.floor(parseInt(page))) {
        window.alert("Error: The page value " + page + " is invalid. \n \
                    Please enter a number with no decimals");
    } 
    else {
        page = parseInt(page);
        if (page < 0 || page > 1430) {
            window.alert("Error: The page value " + page + " is not within 0 and 1430! \n \
                        Please enter a number within range 0 to 1430")
        }
        else {
            // var strPage = "";
            // for (var i = 0; i < 4; i++) {
            //     strPage = (page%10) + strPage;
            //     page = (page - page%10) / 10;
            // }
            window.open("http://sttm.co/g/" + page);
        }
    }
}


// window.onload = function () {
//     toggleLanguage();
//     for (var i = 0; i < sectionNames.length; i++) {
//         setBaniNames(sectionNames[i]);
//     }
//     toggleDarkMode();      
// }


// function toggleDarkMode() {
//     if (darkTog == 0) {
//         darkTog = 1;
//     }
//     else {
//         darkTog = 0;
//     }

//     for (var i = 0; i < colorSettings.length; i++) {
//         var item = colorSettings[i][0];
//         var attr = colorSettings[i][1];
//         var val = colorSettings[i][2 + darkTog];
//         $(item).css(attr , val);
//     }

//     var list = ["#06f", "black", "#d72", "white"];
//     $("li").hover(function() {
//         $(this).css("color", list[2 * darkTog]);
//     }, function() {
//         $(this).css("color", list[2 * darkTog + 1]);
//     });

//     $("button").hover(function() {
//         $(this).css({"color": "orange", "background-color" : "black"});
//     },
//     function() {
//         $(this).css({"color": "black", "background-color": "#eeeeff"});
//     });
// } 


// Version 2 Code
(function (global) {

// var sections = [{
//                     "sec-name": "nitnem",
//                     "pun-label": "ਨਿਤਨੇਮ",
//                     "eng-label": "Nitnem"
//                 },
//                 {
//                     "sec-name": "rotationM",
//                     "pun-label": "ਨਿਤਨੇਮ ਤੋਂ ਬਾਅਦ ਸਵੇਰ ਦੀਆਂ ਬਾਣੀਆਂ",
//                     "eng-label": "After Nitnem Morning Banis"
//                 },
//                 {
//                     "sec-name": "rotationE",
//                     "pun-label": "ਨਿਤਨੇਮ ਤੋਂ ਬਾਅਦ ਸ਼ਾਮ ਦੀਆਂ ਬਾਣੀਆਂ",
//                     "eng-label": "After Nitnem Evening Banis"
//                 },
//                 {
//                     "sec-name": "extra-banis",
//                     "pun-label": "ਵਾਧੂ ਬਾਣੀਆਂ",
//                     "eng-label": "Extra Banis"
//                 },
//                 {
//                     "sec-name": "saveiye",
//                     "pun-label": "ਸਵੱਯੇ (ਭੱਟਾਂ ਦੇ)",
//                     "eng-label": "Saveiye (Bhatta De)"
//                 }];
var sections = [{
    "sec-name": "nitnem",
    "pun-label": "ਨਿਤਨੇਮ",
    "eng-label": "Nitnem"
},
{
    "sec-name": "rotationM",
    "pun-label": "ਨਿਤਨੇਮ ਤੋਂ ਬਾਅਦ: ਸਵੇਰ ਬਾਣੀਆਂ",
    "eng-label": "After Nitnem Morning Banis"
},
{
    "sec-name": "rotationE",
    "pun-label": "ਨਿਤਨੇਮ ਤੋਂ ਬਾਅਦ: ਸ਼ਾਮ ਬਾਣੀਆਂ",
    "eng-label": "After Nitnem Evening Banis"
},
{
    "sec-name": "extra-banis",
    "pun-label": "ਵਾਧੂ ਬਾਣੀਆਂ",
    "eng-label": "Extra Banis"
},
{
    "sec-name": "saveiye",
    "pun-label": "ਸਵੱਯੇ (ਭੱਟਾਂ ਦੇ)",
    "eng-label": "Saveiye (Bhatta De)"
}];
var optionsHtmlUrl = "snippets/options-list-item-snippet.html";
var baniListHtmlUrl = "snippets/bani-list-item-snippet.html";
var declare = {};

declare.currLang = null;
declare.activeElement = null;
const noHover = "#111";
const onHover = "#222";
const onSelect = "#383838";
function highlightActiveElement(name) {
    var prevActive = "#" + declare.activeElement;
    $("#" + declare.activeElement).css("border-right", "0px");
    $("#" + declare.activeElement).css("background-color", noHover);
    $("#" + declare.activeElement).hover(
        function () {$(prevActive).css("background-color", onHover)},
        function () {$(prevActive).css("background-color", noHover)} );

    declare.activeElement = name;
    $("#" + declare.activeElement).css("border-right", "6px solid #f72");
    $("#" + declare.activeElement).css("background-color", onSelect);
    $("#" + declare.activeElement).hover(
        function () {$("#"+name).css("background-color", onSelect)},
        function () {$("#"+name).css("background-color", onSelect)});
}

function insertIntoHTML(html, toReplace, replaceWith) {
    toReplace = "{{" + toReplace + "}}";
    html = html.replace(new RegExp(toReplace, "g"), replaceWith);
    return html;
}

document.addEventListener("DOMContentLoaded", function (event) {

    window.$ajaxUtils.sendGetRequest(optionsHtmlUrl, buildOptionsList, false);

    function buildOptionsList(optionsHTML) {
        console.log(optionsHTML);
        var htmlToInsert = "<h2 class='text-center'>Bani Options</h2><ul>";
        for (var i = 0; i < sections.length; i++) {
            var optionsCopy = optionsHTML;
            optionsCopy = insertIntoHTML(optionsCopy, "optionLoadBanis", "$declare.loadItems('" + sections[i]["sec-name"] + "');");
            optionsCopy = insertIntoHTML(optionsCopy, "optionTitle", sections[i]["pun-label"]);
            optionsCopy = insertIntoHTML(optionsCopy, "optionID", sections[i]["sec-name"]);
            htmlToInsert += optionsCopy;
        }

        console.log(htmlToInsert);
        htmlToInsert += "</ul>";
        document.querySelector("#options").innerHTML = htmlToInsert;
        declare.optionsListHeight = $("#options > ul").css("height").slice(0, -2);
        console.log("options Height: " + declare.optionsListHeight);
        
        declare.activeElement = "nitnem";
        declare.currLang = "eng-label";
        declare.toggleLanguageLabels();     
    }   

});



declare.loadItems = function (sectionName) {
    var lang = $declare.currLang;
    global.$ajaxUtils.sendGetRequest(
        "data/" + sectionName + "-data.json",
        function (response) {
            console.log(lang);
            createBaniLinks(response, lang);
        },
        true);
    highlightActiveElement(sectionName);
};



function createBaniLinks(sectionData, currLang) {
    document.querySelector("#sectionTitle").textContent = sectionData["title"][currLang];
    var linkHTML = "";
    var baniList = sectionData["bani-list"];

    window.$ajaxUtils.sendGetRequest(
        baniListHtmlUrl,
        function (baniListHtml) {
            for (var i = 0; i < baniList.length; i++) {
                var listItemBuild = insertIntoHTML(baniListHtml, "baniName", baniList[i][currLang]);
                var link = "https://www.sikhitothemax.org/";
                if (baniList[i]["sundar-gutka"] == true) {
                    link += "sundar-gutka/";
                }
                listItemBuild = insertIntoHTML(listItemBuild, "baniLink", link + baniList[i]["link"]);

                linkHTML += listItemBuild;
            }
            document.querySelector("#baniList > ul").innerHTML = linkHTML;
            $("#baniList").css("min-height", "0px");
            $("#options").css("min-height", "0px");
            if ($("#baniList").css("height").slice(0, -2) > $("#options").css("height").slice(0, -2)) {
                $("#options").css("min-height", $("#baniList").css("height"));
            }
            else {
                $("#baniList").css("min-height", $("#options").css("height"));
            }
            var optionsListHeight = $("#options").css("height").slice(0, -2) - $("#options > h2").css("height").slice(0, -2);
            $("#options > ul").css("height", optionsListHeight);

            if (window.innerWidth < 768) {
                $("#options").collapse("hide");
            }
        },
        false);
}

declare.toggleLanguageLabels = function() {
    if ($declare.currLang == "pun-label") {
        $declare.currLang = "eng-label";
        document.querySelector("#toggleLang").innerHTML = "To Punjabi";
    }
    else {
        $declare.currLang = "pun-label";
        document.querySelector("#toggleLang").innerHTML = "To English";
    }

    for (var i = 0; i < sections.length; i++) {
        document.querySelector("#" + sections[i]["sec-name"]).innerHTML = sections[i][$declare.currLang];
    }

    $declare.loadItems($declare.activeElement);
};

global.$declare = declare;
}) (window);


