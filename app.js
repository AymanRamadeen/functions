var itemOrder = '';

function getorder() {
 

var order = prompt('what do you want turkish or cappuccino');

while (order !== 'turkish' && order !== 'cappuccino') {
  order = prompt('what do you want turkish or cappuccino');
}



if (order === 'cappuccino') {
  itemOrder = '<img src="https://cdn.relevance.com/wp-content/uploads/2019/09/Content-Marketing-Strategy-for-a-Coffee-Shop-750x430.jpg"/>';
} else if (order === 'turkish') {
  itemOrder = '<img src="https://images.adsttc.com/media/images/5de8/74f9/3312/fdbc/3500/005b/newsletter/Culturist_5.jpg?1575515353"/>';
}
}
getorder() ;

function getcups() {
    var noCups = prompt('how many cups do you want?');

    var result = '';
    
    for (var i = 0; i < noCups; i++) {
      result = result + itemOrder;
    }
    document.write(result);
}
getcups() ;


