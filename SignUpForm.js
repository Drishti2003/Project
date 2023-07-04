
// function related to sign up
function SignUpDetail(){
    var pn=document.getElementById("pname").value;
    var un=document.getElementById("uname").value;
    var em=document.getElementById("email").value;
    var pa=document.getElementById("passwd").value;
    // if(pn.value=="" && un.value=="" && em.value=="" && pa.value==""){
    //     alert("please fill all the fields")
    // }else{
    document.writeln("<center>"+"Your Info"+"<br/>"+"Person Name:"+pn+"<br/>"+"User Name:"+un+"<br/>"+"Email:"+em+"<br>"+"Password:"+pa+"</center>")
    // }
}