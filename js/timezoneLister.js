async function loadJsonAndDisplayUTC() {
    var list = document.getElementById('selUTC');
    let rawData = await fetch('/json/timezones.json');
    let UTCs = await rawData.json();
    for (let timeOffset of UTCs) {

      list.innerHTML = list.innerHTML +
      '<option value="' + timeOffset.UTC + '">' + timeOffset.UTC + '</option>';
  }
}

  async function loadJsonAndDisplayTimezones() {

    var ele = document.getElementById('selmajor');
    let rawData = await fetch('/json/cities.json');
    let tzs = await rawData.json();

    for (let tz of tzs) {
      ele.innerHTML = ele.innerHTML +
      '<option value="' + tz.Timezone + '">' + tz.Timezone + '</option>';
    }
  }


  
