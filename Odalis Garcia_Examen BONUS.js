var str = 'https://purchase.hotmart.com/purchase';
    
var str_array = str.split('.');
str_array[0] = str_array[0].toUpperCase();

str = '';
str_array.forEach(unir);

function unir(item, index){
    if(str != '') str += '.';
    str += item;
}

console.log(str);