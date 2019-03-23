function attachEventsListeners() {
    let button = document.getElementById('convert');
    button.addEventListener('click', function() {
        let fromUnit = document.getElementById('inputUnits');
        let resultFrom = 0;
        let fromNumber =(document.getElementById('inputDistance'));
        let toNumber =(document.getElementById('outputDistance'));
        let toUnit = document.getElementById('outputUnits');
        let resultTo = 0;
        switch(fromUnit.value) {
            case 'km': resultFrom = fromNumber.value * 1000; break;
            case 'm': resultFrom = fromNumber.value * 1; break;
            case 'cm': resultFrom = fromNumber.value * 0.01; break;
            case 'mm': resultFrom = fromNumber.value * 0.001; break;
            case 'mi': resultFrom = fromNumber.value * 1609.34; break;
            case 'yrd': resultFrom = fromNumber.value * 0.9144; break;
            case 'ft': resultFrom = fromNumber.value * 0.3048; break;case 'in': resultFrom = fromNumber.value * 0.0254; break;
        }
        switch(toUnit.value) {
            case 'km': resultTo = resultFrom / 1000; break;
            case 'm': resultTo = resultFrom / 1; break;
            case 'cm': resultTo = resultFrom / 0.01; break;
            case 'mm': resultTo = resultFrom / 0.001; break;
            case 'mi': resultTo = resultFrom / 1609.34; break;
            case 'yrd': resultTo = resultFrom / 0.9144; break;
            case 'ft': resultTo = resultFrom / 0.3048; break;
            case 'in': resultTo = resultFrom / 0.0254; break;


        }
        toNumber.value = resultTo;
    })
    
}