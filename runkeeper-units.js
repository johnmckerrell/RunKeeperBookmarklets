function isKM(unit){
    return !!unit.match(/km/);
}
function convertUnitText(unit){
    if(isKM(unit)){
        return 'miles';
    }else{
        return'km';
    }
}
function convertUnit(distance,unit){
    var val;
    if(isKM(unit)){
        val = Number(distance)/0.621371192
    }else{
        val = Number(distance)*0.621371192
    }
    return Math.round(val*10)/10;
}
function replaceUnits(rootPattern, unitPattern, distancePattern) {
    $(rootPattern).each(function(i,div) {
        var unit = $($(div).find(unitPattern).get(0));
        var distance = $($(div).find(distancePattern).get(0));
        if (unit.length && distance.length) {
            unit.text(convertUnitText(unit.text()));
            distance.text(convertUnit(distance.text(),unit.text()));
        }
    })
}

if(!window.bookmarklet) {
    window.bookmarklet={}
}
window.bookmarklet["toggleunits"] = function() {
    replaceUnits('.activityMonth','.distanceUnit','.distance');
    replaceUnits('#statsDistance','.unitText','.mainText');
}
window.bookmarklet["toggleunits"]()
