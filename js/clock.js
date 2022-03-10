function drawClock() {
    const deg = 6;
    const hh = document.querySelector('#hh');
    const mm = document.querySelector('#mm');
    const ss = document.querySelector('#ss');

    var select = document.getElementById('selmajor');
    let value = select.options[select.selectedIndex].value;

    let tz = value;

    let hour = new Date().toLocaleString("en-GB", { timeZone: tz, hour: '2-digit' })
    let minute = new Date().toLocaleString("en-GB", { timeZone: tz, minute: '2-digit' })
    let second = new Date().toLocaleString("en-GB", { timeZone: tz, second: '2-digit' })
    let dhour = new Date().toLocaleString("en-GB", { timeZone: tz, hour: '2-digit' })
    let dminute = new Date().toLocaleString("en-GB", { timeZone: tz, minute: '2-digit' })
    let dsecond = new Date().toLocaleString("en-GB", { timeZone: tz, second: '2-digit' })
    let ahour = hour * 30;
    let aminute = minute * deg;
    let asecond = second * deg;
    hh.style.transform = `rotateZ(${ahour + (aminute / 12)}deg)`;
    mm.style.transform = `rotateZ(${aminute}deg)`;
    ss.style.transform = `rotateZ(${asecond}deg)`;
   
    dminute = dminute < 10 ? "0" + dminute : dminute;
    dsecond = dsecond < 10 ? "0" + dsecond : dsecond;

    document.getElementById('dclock').innerHTML = dhour + ":" + dminute + ":" + dsecond;

}
