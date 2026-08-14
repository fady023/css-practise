
var names = ["fed", "sam", "shed","lolo","toto"];

// names.push("lolo");
// names.pop();

//========================================

// names.unshift("added");
// names.shift()
// delete names[0]

//========================================

//  names.splice(1,2,"ram","kid");

var a = names.slice(0,names.length);


 a.forEach((x, y, z) => {
    document.write(x + " => index : " + y  + " <br>");
})

/* for(var i of names){
    document.write("<b>" + i +"</b> <br>")
}
 */
//========================================
/* for(var i=0;i<a.length;i++){
    document.write(a[i]+"<br>")
} */
/*   for(var x in names){
      document.write("hello <b>" + names[x] + "</b> welcome <br>")
  } */


/*   for(var y of names){
      document.write("hi <b>" + y + " </b> welcome <br>")
  } */



 
