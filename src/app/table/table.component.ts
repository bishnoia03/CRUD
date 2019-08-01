import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {  
public  names="";
gate=false;
contactlist;
id;
name;
trade;
mobile;
ss="bishnoi";
aa=1;
color="black,red";
sss;
ssss;
z;
  constructor() { }
  fun4(){
    this.sss="You select Red Button";
  }
  fun5(){
    this.ssss="You select Black Button";
  }
  fun6(){
    this.z="You select exit Button";
  }
fun(){
  if(this.gate)
   {
     this.gate=false;
   }
   else{
     this.gate=true;
   }
}

model:any={};
addemp(){
  this.contactlist.push(this.model);
  this.model={};
  
}
pass;
password= "123";
fun2(pas){
if(this.password == pas)
{
  console.log("aman");
  this.pass=1;
}
}
deleteContact(id){
for(var i=0; i<this.contactlist.length; i++)
{
  if(this.contactlist[i]["id" ] ==id)
  {
    this.contactlist.splice(i,1);
  }
}
}
// deleteContact(i){
//   this.contactlist.splice(i,1);
// }
myvalue;
editemp(k){
  this.model.id=this.contactlist[k].id;
this.model.name=this.contactlist[k].name;
this.model.trade=this.contactlist[k].trade;
this.model.mobile=this.contactlist[k].mobile;
this.myvalue=k;
}
upemp(){
let k=this.myvalue;
for(let i=0; i<this.contactlist.length; i++){
if(i==k){
  this.contactlist[i]=this.model;
  this.model={};
}
}
}
fun3(){
  alert("Data Updated");
}

  ngOnInit() {
    this.contactlist=[
      {id:'1',name:'Aman',trade:'Mca',mobile:'8295716429'},
      {id:'2',name:'Navjot',trade:'Recpt.',mobile:'8295716429'},
      {id:'3',name:'Vishal',trade:'Selling',mobile:'2131316429'},
      {id:'4',name:'happy',trade:'Marketing',mobile:'8295479229'},
      {id:'5',name:'Aman',trade:'Mca',mobile:'9895716429'},
      {id:'6',name:'happy',trade:'Marketing',mobile:'8295479229'}
    ]
  }
}