var ip = "";

function ip2int(ip) {
    return ip.split('.').reduce(function(ipInt, octet) { return (ipInt<<8) + parseInt(octet, 10)}, 0) >>> 0;
}

// $.ajax({
//     type: 'GET',
//     dataType:'json',
//     async:false,
//     url:'https://httpbin.org/ip',
//     success: function(responseData) {
//         ip = ip2int(responseData.origin);
//         console.log(ip)
//     },
//     error: function(XMLHttpRequest, textStatus, errorThrown){
//         console.log('Error');
//     }
// })

window.onload = function() {

    var url = 'https://glasstea0.pythonanywhere.com/log/';

    var r = new XMLHttpRequest();
    r.open('GET', url)
    r.onload = function() {
        console.log(r.responseText);
    }
    r.send();

    // console.log(navigator.userAgent)
};

