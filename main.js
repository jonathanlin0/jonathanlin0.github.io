// var ip = "";

// function ip2int(ip) {
//     return ip.split('.').reduce(function(ipInt, octet) { return (ipInt<<8) + parseInt(octet, 10)}, 0) >>> 0;
// }

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

// window.onload = function() {
//     var url = 'http://127.0.0.1:5001/log/';
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.onload = function() {
//         console.log(xhr.responseText);
//     };
//     xhr.onerror = function() {
//         console.log('Error connecting to the URL');
//     };
//     xhr.send();
// };

