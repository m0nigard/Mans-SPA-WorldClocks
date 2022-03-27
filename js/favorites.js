function addOwnCity() {
    var select = document.getElementById('selUTC');
    let value = select.options[select.selectedIndex].value;
    invertedValue = invertTimezone(value);

    city = document.getElementById('userInput').value;

    var favObject = { 'Timezone': invertedValue, 'City': city }

    if (localStorage.getItem('favorites') == null) {
        localStorage.setItem('favorites', '[]');
    }
    var old_fav = JSON.parse(localStorage.getItem('favorites'));
    old_fav.push(favObject);

    localStorage.setItem('favorites', JSON.stringify(old_fav));
}

function viewOwnCitys() {
    var ele = document.getElementById('selmajor');
    if (localStorage.getItem('favorites') != null) {
        var array = localStorage.getItem('favorites');
        array = JSON.parse(array);
        for (let favs of array) {
            addOption('[label="Favorites"]', favs.City, favs.Timezone);
        }
    }
}

addOption = function(optGroup, text, value) {
    var optGroup = document.querySelector(optGroup);
    var option = document.createElement("option");
    option.value = value;
    option.innerHTML = text;
  
    optGroup.appendChild(option);
}

function invertTimezone(timezone){
    if(timezone == "Etc/GMT+1"){
        timezone = "Etc/GMT-1"
    } else if (timezone == "Etc/GMT+2") {
        timezone = "Etc/GMT-2"
    } else if (timezone == "Etc/GMT+3") {
        timezone = "Etc/GMT-3"
    } else if (timezone == "Etc/GMT+4") {
        timezone = "Etc/GMT-4"
    } else if (timezone == "Etc/GMT+5") {
        timezone = "Etc/GMT-5"
    } else if (timezone == "Etc/GMT+6") {
        timezone = "Etc/GMT-6"
    } else if (timezone == "Etc/GMT+7") {
        timezone = "Etc/GMT-7"
    } else if (timezone == "Etc/GMT+8") {
        timezone = "Etc/GMT-8"
    } else if (timezone == "Etc/GMT+9") {
        timezone = "Etc/GMT-9"
    } else if (timezone == "Etc/GMT+10") {
        timezone = "Etc/GMT-10"
    } else if (timezone == "Etc/GMT+11") {
        timezone = "Etc/GMT-11"
    } else if (timezone == "Etc/GMT+12") {
        timezone = "Etc/GMT-12"
    } else if (timezone == "Etc/GMT-1") {
        timezone = "Etc/GMT+1"
    } else if (timezone == "Etc/GMT-2") {
        timezone = "Etc/GMT+2"
    } else if (timezone == "Etc/GMT-3") {
        timezone = "Etc/GMT+3"
    } else if (timezone == "Etc/GMT-4") {
        timezone = "Etc/GMT+4"
    } else if (timezone == "Etc/GMT-5") {
        timezone = "Etc/GMT+5"
    } else if (timezone == "Etc/GMT-6") {
        timezone = "Etc/GMT+6"
    } else if (timezone == "Etc/GMT-7") {
        timezone = "Etc/GMT+7"
    } else if (timezone == "Etc/GMT-8") {
        timezone = "Etc/GMT+8"
    } else if (timezone == "Etc/GMT-9") {
        timezone = "Etc/GMT+9"
    } else if (timezone == "Etc/GMT-10") {
        timezone = "Etc/GMT+10"
    } else if (timezone == "Etc/GMT-11") {
        timezone = "Etc/GMT+11"
    } else if (timezone == "Etc/GMT-12") {
        timezone = "Etc/GMT+12"
    } else{
        timezone = "Etc/GMT+0"
    }
    return timezone;
}
  