function getfile(file,callback){
   var xhr=new XMLHttpRequest();
   xhr.overrideMimeType("application/json");
   xhr.open("GET",file,true);
   xhr.onreadystatechange=function(){
     if(xhr.readyState === 4 && xhr.status=="200"){
        callback(xhr.responseText);
     }
   };
   xhr.send();
}
getfile("samp.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  basicinfo(data.basics);
  eduinfo(data.education);
  skills(data.skills);
});
var main=document.querySelector('.flex-parent');

function basicinfo(basic){
  var profile=document.getElementById("basics");
  var name=document.createElement("h3");
  name.innerHTML=basic.name;
  profile.appendChild(name);
  var phone=document.createElement("h3");
  phone.innerHTML=basic.phone;
  profile.appendChild(phone);
  var email=document.createElement("h3");
  email.innerHTML=basic.email;
  profile.appendChild(email);
  var photo=document.createElement("img");
  photo.src=basic.photo;
  profile.appendChild(photo);
  }


  var right=document.createElement("div");
  right.classList.add("content-child");
  main.appendChild(right);
  //education div
  var e1=document.createElement("div");
  e1.classList.add("edu");
  right.appendChild(e1);
  var h1=document.createElement("h1");
  h1.setAttribute("id","heading");
  h1.textContent=("Education Details");
   e1.appendChild(h1);
  function eduinfo(education){
       for(i in education){
         //course
            var h2=document.createElement("h2");
            h2.classList.add("edu1");
            h2.textContent=education[i].course;
            h1.appendChild(h2);
              //College
              var h3=document.createElement("h3");
              h3.classList.add("edu2");
              h3.textContent=education[i].college;
              h2.appendChild(h3);
              //fordata getting
              var ul=document.createElement("ul");
              ul.classList.add("edu3");
              h3.appendChild(ul);
              for(j in education){
              var li=document.createElement("li");
              li.textContent=education[i].data[j];
              ul.appendChild(li);
            }
          }
        }

console.log(right);
function skills(food){
   var table=document.createElement("table");
   var row="";
   for(var k=0;k<food.length;k++){
     row+="<tr><td><strong>"+food[k].name+"</strong></td><td>"+food[k].info+"</td></tr>";
     }
     table.innerHTML=row;
     right.appendChild(table);
}
