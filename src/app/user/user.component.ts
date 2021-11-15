import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class USERComponent implements OnInit {
  username:String='';
  shouldRegister:Boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  reg()
  {
    alert("Registering"); 
  }
  validate()
  {
    this.shouldRegister=false;
    alert("Validating->"+this.username);

    // if userName is empty
    if(this.username=='')
    alert("Empty Username exiting");
    else if (this.username.length<6)
    {
      alert("minimum length is 6");

    }
    else
    {
      this.shouldRegister=true;
      alert("Validate Successful,Enabling Register button");
    }

    
  }

}
