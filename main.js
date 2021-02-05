//https://stackoverflow.com/questions/13540751/how-get-total-sum-from-input-box-values-using-javascript
//http://jsfiddle.net/ox7o3u1h/

var btn = document.getElementById('btn');


btn.addEventListener('click', addQty);


function addQty(e){
	e.preventDefault();
	
	
	var qtySrc = document.querySelector('.qtySrc');
	var qtyDst = document.querySelectorAll('.qtyDst');
	var total = document.querySelector('#total');
	
	var sum = 0;
	for( var i = 0; i < qtyDst.length; i++ ){
		qtyDst[i].value = qtySrc.value;
		sum = sum + Number(qtyDst[i].value);
		console.log(sum);
		
	};
	total.innerHTML = '<span>' + '$'  + ' '+sum+'</span>';
	
	
};