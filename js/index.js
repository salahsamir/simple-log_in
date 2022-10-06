///please click dblclick on button login//////////

////////////////js for sign up page////////
var nam=document.getElementById('name');
var email=document.getElementById('email1');
var pass=document.getElementById('pass1');
var btn1=document.getElementById('button1')
var p=document.querySelector(".input p")
var succes=document.querySelector('.Success')
var list=[];
if(localStorage.getItem("contant")!=null){
  list=JSON.parse(localStorage.getItem("contant"))
}else{
  list=[]
}
function logout(){
  var obj={
    nam:nam.value,
    email:email.value,
    pass:pass.value,
  }
 if(test(obj.nam) &&checkvalue()){
  list.push(obj)
  localStorage.setItem("contant",JSON.stringify(list))
 succes.classList.remove('d-none')
 p.classList.add('d-none')
}
else{
  if(checkvalue()==false ){
 succes.classList.add('d-none')
 p.classList.remove('d-none')

    p.innerHTML=" All inputs is required"}
  else{
 succes.classList.add('d-none');
 p.classList.remove('d-none')

    p.innerHTML=" already exsist"};
  }
}
function clear(){
  nam.value=""
  email.value=""
  pass.value=''

}

function checkvalue(){
  if(nam.value!="" && email.value!=""&& pass.value!=""){
    return true}
    else{

      return false
    }

}
function test(value){
  var count=0
      for(var i=0;i<list.length;i++){
        if(list[i].nam.includes(value)==true){
       count+=1
        }else{
          count=count
        }}
        if(count==0){
          return true
        }else{
          return false
        }
  }
  
function signup(){
  logout()
  clear()
}

////////////////js for index page/////
var email_html=document.getElementById('email');
var pass_html=document.getElementById('pass');
var btn=document.getElementById('button');
var par=document.querySelector('.p')
var typing=document.querySelector('#typing')
var a=document.querySelector(".a")
var list_html=[]
// var lis=[]
function index(){
  var object={
    email_html:email_html.value,
    pass_html:pass_html.value,
  }
  
  if(check_html()==false){
    list_html.push(object)  


  if(check_html() &&  checkvalue_html()){
 
 a.classList.remove('d-none')
 btn.classList.add('d-none')
  }
  else{
    
    if(checkvalue_html() && check_html()==false){
par.classList.remove('d-none');
par.innerHTML=`incorrect email or password`;
    }else{
      par.classList.remove('d-none')

    }
  }
  }


}

function check_html(){
 
  var count=0
  for(var i=0;i<list.length;i++){
    for(var j=0;j<list_html.length;j++){
      if(list[i].email==list_html[j].email_html && list[i].pass==list_html[j].pass_html){
        count+=1
        sessionStorage.setItem('name',list[i].nam)
      }else{
        count=count
      }
    }
  }
  if(count==0){
    return false
  }
  else{
   
    return true
  }


}
function checkvalue_html(){
  if( email_html.value!=""&& pass_html.value!=""){
    return true}
    else{

      return false
    }

}
//////////////////////////////////////////
var name_log;//for name[i]

name_log=sessionStorage.getItem('name')
typing.innerHTML=name_log

