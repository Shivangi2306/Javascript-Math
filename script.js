var myArray= new Array(10);

function createArray(){
	for (var i=0;i<myArray.length;i++)
	{   //myArray.push(prompt("Enter Element:"+(i+1)));
	myArray[i]=parseInt(prompt("Enter Element:"+(i+1)));
	 console.log(myArray);
	 if (i==myArray.length) {
	 	return;
	 }
	 }
console.log("The newly formed array looks like:"+myArray);

}

createArray();

function sumArray(ar){
	var sum=0;
	for (var i=0;i<ar.length;i++)
	{
		sum+= ar[i];
	}
	return sum;
}


console.log("The sum of the elements of the above array is:"+sumArray(myArray));

function avgArray(ar){
	var avgVal=0;
	avgVal= (sumArray(ar))/(ar.length);
	return avgVal;
}

console.log("The average of the elements of the above array is:"+avgArray(myArray));

function largeNum(ar){
	var largeVal=-Infinity;
	for ( var i=0;i<ar.length;i++){
		
		if(ar[i]>largeVal)
		{
			largeVal=ar[i];
		}
		
	}
	return largeVal;
}

console.log("The largest among the elements of the above array is:"+largeNum([5,-4,100,10]));

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------


function factorialVal(numVal){
   	
   	var factVal;
   
   if (numVal>1)
   {
   	for(factVal=numVal;factVal>1;factVal--){

   		factVal	 = factVal* factorialVal(factVal-1);
   		return factVal;
   	}
   
   }
   else
   {
   	factVal=1;
   }

   return factVal;
}



var num=parseInt(prompt("Enter the number to find a factorial:"));
console.log("The factorial of: "+num+" is :"+factorialVal(num));

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------




function powerVal(baseVal,power){
	var powVal=1;
	if (power==0)
		{
			powVal;
		}
	
	else if(power==1)
		{
			powVal=baseVal;
		}

	else
		{
				for(var i=1;i<=power;i++)
			{
				powVal=powVal*baseVal;
			}
		}
	
	return powVal;
}
var baseNum=parseInt(prompt("Enter the base number:"));
var powNum=parseInt(prompt("Enter the power value of: "+baseNum+" you want to calculate: "));

alert(baseNum+" raised to a power of "+powNum+" ="+ powerVal(baseNum,powNum));
console.log(baseNum+" raised to a power of "+powNum+" equals to ="+ powerVal(baseNum,powNum));



