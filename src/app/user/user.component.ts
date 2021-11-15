import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class USERComponent implements OnInit {
  username:String='';
  USERS:Array<String>=['admin','raj','kaj'];
  shouldRegister:Boolean=false;
  msg:String='';
  constructor() { }

  ngOnInit(): void {
  }

  reg()
  {
    alert("Registering"); 
    this.USERS.push(this.username);
    this.msg="Users Registered";
    this.username='';
  }
  validate()
  {
    this.shouldRegister=false;
    this.msg='Validating '+this.username;

    // if userName is empty
    if(this.username=='')
    this.msg='Error: Username is empty.';
    else if (this.username.length<6)
    {
      this.msg='Error: minimum length is 6';

    }else if (this.USERS.includes(this.username) )
    {
      this.shouldRegister=false;
    
      this.msg='Error: User Already Exists. Can not use it ';
    }
    else
    {
      this.shouldRegister=true;
      this.msg='Validate Successful,Enabling Register button';
    
      
      
    }

    
  }

}
