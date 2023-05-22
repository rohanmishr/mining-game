//abbreviatie numbers
let suffixes = ["", "k", "M", "B","T", "qd", "Qn", "sx", "Sp", "O", "N", "de", "Ud", "DD", "tdD", "qdD", "QnD", "sxD", "SpD", "OcD",
        "NvD", "Vgn", "UVg", "DVg", "TVg", "qtV", "QnV", "SeV", "SPG", "OVG", "NVG", "TGN", "UTG", "DTG", "tsTG", "qtTG", "QnTG", "ssTG",
        "SpTG", "OcTG", "NoTG", "QdDR", "uQDR", "dQDR", "tQDR", "qdQDR", "QnQDR", "sxQDR", "SpQDR", "OcQDDr", "NoQDDr", "QGNT", "uQGNT",
        "dQGNT", "tQGNT", "qdQGNT", "QnQGNT", "sxQGNT", "SpQGNT", "OcQGNT", "NoQGNT", "SXGNT", "USXGNT", "DSXGNT", "TSXGNT", "qtSXGNT",
        "QnSXGNT", "SeSXGNT", "SPSXGNT", "OSPXGNT", "NSXGNT", "SPGNT", "USPGNT", "DSPGNT", "TSPGNT", "qtSPGNT", "QnSPGNT", "SeSPGNT",
        "OcSPGNT", "NSPGNT", "OCGNTL", "uOCGNTL", "dOCGNTL", "tOCGNTL", "qdOCGNTL", "QnOCGNTL", "sxOCGNTL", "SpOCGNTL", "OcOCGNTL",
        "NOCGNTL", "NVGNTL", "uNVGNTL", "dNVGNTL", "tNVGNTL", "qdNVGNTL", "QnNVGNTL", "sxNVGNTL", "SpNVGNTL", "OcNVGNTL", "NoNVGNTL",
        "CENT", "uCENT", "dCENT", "tCENT", "qdCENT", "QnCENT", "sxCENT", "SpCENT", "OcCENT", "NoCENT", "inf"
        ];
function numToSuffix(num, fixed) {
    if (num === null) { return null; }
    if (num === 0) { return '0'; }
    fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
    var b = (num).toPrecision(2).split("e"), 
        k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 100) / 3), // floor at decimals, ceiling at 100 zeroes
        c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3) ).toFixed(1 + fixed), 
        d = c < 0 ? c : Math.abs(c), 
        e = d + suffixes[k];
    return e;
}

function suffixToNum(num) {
    if (parseInt(num) === num) {
      return num;
    }
  
    var suffix = "";
    for (var i = num.length - 1; i >= 0; i--) {
      if (isNaN(parseInt(num[i]))) {
        suffix = num[i] + suffix;
      } else {
        break;
      }
    }
  
    var index = suffixes.indexOf(suffix);
    if (index !== -1) {
      var zeroes = index * 3;
      var number = parseFloat(num.slice(0, num.length - suffix.length));
      number = number * Math.pow(10, zeroes);
      return number;
    }
  
    // If the suffix is not found, return NaN or handle it as desired
    return '(suffix_parsing_error")';
}
  
//function to turn strings into better looking ones
function toDisplay(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}

//main process
function tick(){
    try{
        $("#money")[0].innerHTML = `$${numToSuffix(Profile.money,1)}`;
        $("#research")[0].innerHTML = `${numToSuffix(Profile.research,1)} RP`;
        $("#capacity")[0].innerHTML = `Capacity: ${Profile.capacity}/${Profile.maxCapacity}`;
    } catch(e) {
        console.log(e);
    }
}

setInterval(() => {
    tick();
}, 1);