import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class USERComponent implements OnInit {
  username: String = '';
  rslt: String = '';
  r1: String = '';
  USERS: Array<String> = ['admin', 'raj', 'kaj'];
  shouldRegister: Boolean = false;
  msg: String = '';
  test: String = `Lorem ipsum is a (Additional Comments)  pseudo-Latin text used in web <a href='https://thisisverylongwebsite.com'>Awesome </a> design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum\'s still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.

    In a professional context it often happens that <b> https://google.com </b> private or (Additional Comments) corporate <a href='www.google.com' >Awesome </a>  clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements. Besides, random text risks to be unintendedly humorous or offensive, an unacceptable risk in corporate environments. Lorem ipsum and its many variants have been employed since the early 1960ies, and quite likely since the sixteenth century.`;
  constructor() { }

  ngOnInit(): void {


    this.fixCode();

   
  }
  fixCode() {
    // fix for [code] issue 

    // let temp=this.test.split('(Additional Comments)');
    // temp=temp.splice(1);
    // this.test=temp.join(" ");


    var rx = /<a\s+(?:[^>]*?\s+)?href=([\"\'])(.*?)\1\s*\>.*\<\/a\>/igm;
    let match = rx.exec(this.test.toString());

    do {
      if(match!=null)
      this.test=this.test.replace(match[0],match[2])
    } while((match = rx.exec(this.test.toString())) !== null);



    var cmnt = this.test.split(' ');
    var z = '';
    var cur_len = 0;
    for (var k in cmnt) {

      // scenario : if the word is a hyperlink
      if(cmnt[k].startsWith('https')||cmnt[k].startsWith('http')||cmnt[k].startsWith('www'))
      {
        let fmtLink='[<i> Click <a href="'+cmnt[k]+'">here</a></i> ]';
        z+=" "+fmtLink;
        cur_len+=14;
      }
else
      // scenario 1 : current word length is less than 55
      if (cur_len + cmnt[k].length <= 55) {
        cur_len += cmnt[k].length+1;
        z += ' ' + cmnt[k];
      }
      else {
        // we need to add a <br> to push this word to next line.

        cur_len = cmnt[k].length+1;
        z += '<br>' + cmnt[k];
      }


    }

    this.rslt = z;

  }
  reg() {
    alert("Registering");
    this.USERS.push(this.username);
    this.msg = "Users Registered";
    this.username = '';
  }
  validate() {
    this.shouldRegister = false;
    this.msg = 'Validating ' + this.username;

    // if userName is empty
    if (this.username == '')
      this.msg = 'Error: Username is empty.';
    else if (this.username.length < 6) {
      this.msg = 'Error: minimum length is 6';

    } else if (this.USERS.includes(this.username)) {
      this.shouldRegister = false;

      this.msg = 'Error: User Already Exists. Can not use it ';
    }
    else {
      this.shouldRegister = true;
      this.msg = 'Validate Successful,Enabling Register button';



    }


  }

}
