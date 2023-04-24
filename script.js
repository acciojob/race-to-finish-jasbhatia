window.promises = [new Promise((resolve,reject)=>{
	resolve("p1")
},Math.random()*5000), new Promise((resolve,reject)=>{
	resolve("p2")
},Math.random()*5000), new Promise((resolve,reject)=>{
	resolve("p3")
},Math.random()*5000), new Promise((resolve,reject)=>{
	resolve("p4")
},Math.random()*5000),new Promise((resolve,reject)=>{
	resolve("p5")
},Math.random()*5000),
				  ];


Promise.any(promises).then((result)=>{
	document.getElementById("output").innerHTML=result;
})
// Do not change the code above this
// add your promises to the array `promises`
