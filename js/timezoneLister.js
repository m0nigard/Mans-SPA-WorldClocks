// A function declaration
// we use the word "async" in order to be able
// to use await inside the function
// (needed in order to wait for json and deserialization)
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

    // load content from the url /products.json
    // (and wait until we have done so)
    let rawData = await fetch('/json/cities.json');
    // deserialize the json (wait for it)
    let tzs = await rawData.json();
  
    // loop through the products and build some html
    for (let tz of tzs) {
      // the backticks indicate of a special type
      // of string - called a template literal
      // template literal can span over several lines
      // and contain javascript epressions: ${...}
      ele.innerHTML = ele.innerHTML +
      '<option value="' + tz.Timezone + '">' + tz.Timezone + '</option>';
    }
  }


  
