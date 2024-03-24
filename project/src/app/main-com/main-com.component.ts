import { Component } from '@angular/core';

@Component({
  selector: 'app-main-com',
  templateUrl: './main-com.component.html',
  styleUrls: ['./main-com.component.css']
})
export class MainComComponent {
  start_but:boolean=false;
  start_game(){
    this.start_but=true;


  }
  user:number=0;
  num:number=0;
  res:number=0;
  l_img_url:string="assets/images/l_pap.jpeg";
  r_img_url:string="assets/images/r_pap.jpeg";

  t_match :number=0;

  h_win:number=0;
  h_draw:number=0;
  h_loss:number=0;

  m_win:number=0;
  m_draw:number=0;
  m_loss:number=0;
  but_pap:boolean=false;
  but_roc:boolean=false;
  but_sci:boolean=false;




  paper(){
    this.user=10;
    this.num=Math.floor(Math.random()*3)+1;
    this.res=this.user+this.num;
    this.final(this.res);



  }
  rock(){
    this.user=20;
    this.num=Math.floor(Math.random()*3)+1;
    this.res=this.user+this.num;
    this.final(this.res);

  }
  sci(){
    this.user=30;
    this.num=Math.floor(Math.random()*3)+1;
    this.res=this.user+this.num;
    this.final(this.res);

  }
  pap_draw(){
    this.t_match=this.t_match+1;
    this.h_draw=this.h_draw+1;
    this.m_draw=this.m_draw+1;
    this.l_img_url="assets/images/l_pap.jpeg";
    this.r_img_url="assets/images/r_pap.jpeg";
    this.but_roc=true;
    this.but_sci=true;
    this.but_pap=false;


  }
  pap_win(){
    this.t_match=this.t_match+1;
    this.h_win=this.h_win+2;
    this.m_loss=this.m_loss+1;
    this.l_img_url="assets/images/l_pap.jpeg";
    this.r_img_url="assets/images/r_roc.jpeg";
    this.but_pap=true;
    this.but_sci=true;
    this.but_roc=false;



  }
  pap_loss(){
    this.t_match=this.t_match+1;
    this.m_win=this.m_win+2;
    this.h_loss=this.h_loss+1;
    this.l_img_url="assets/images/l_pap.jpeg";
    this.r_img_url="assets/images/r_sci.jpeg";
    this.but_roc=true;
    this.but_pap=true;
    this.but_sci=false;




  }
  rock_draw(){
    this.t_match=this.t_match+1;
    this.h_draw=this.h_draw+1;
    this.m_draw=this.m_draw+1;
    this.l_img_url="assets/images/l_roc.jpeg";
    this.r_img_url="assets/images/r_roc.jpeg";
    this.but_pap=true;
    this.but_sci=true;
    this.but_roc=false;


  }
  rock_win(){
    this.t_match=this.t_match+1;
    this.h_win=this.h_win+2;
    this.m_loss=this.m_loss+1;
    this.l_img_url="assets/images/l_roc.jpeg";
    this.r_img_url="assets/images/r_sci.jpeg";
    this.but_pap=true;
    this.but_roc=true;
    this.but_sci=false;

  }
  rock_loss(){
    this.t_match=this.t_match+1;
    this.m_win=this.m_win+2;
    this.h_loss=this.h_loss+1;
    this.l_img_url="assets/images/l_roc.jpeg";
    this.r_img_url="assets/images/r_pap.jpeg";
    this.but_roc=true;
    this.but_sci=true;
    this.but_pap=false;


  }
  sci_draw(){
    this.t_match=this.t_match+1;
    this.h_draw=this.h_draw+1;
    this.m_draw=this.m_draw+1;
    this.l_img_url="assets/images/l_sci.jpeg";
    this.r_img_url="assets/images/r_sci.jpeg";
    this.but_pap=true;
    this.but_roc=true;
    this.but_sci=false;


  }
  sci_win(){
    this.t_match=this.t_match+1;
    this.h_win=this.h_win+2;
    this.m_loss=this.m_loss+1;
    this.l_img_url="assets/images/l_sci.jpeg";
    this.r_img_url="assets/images/r_pap.jpeg";
    this.but_roc=true;
    this.but_sci=true;
    this.but_pap=false;


  }
  sci_loss(){
    this.t_match=this.t_match+1;
    this.m_win=this.m_win+2;
    this.h_loss=this.h_loss+1;
    this.l_img_url="assets/images/l_sci.jpeg";
    this.r_img_url="assets/images/r_roc.jpeg";
    this.but_pap=true;
    this.but_sci=true;
    this.but_roc=false;


  }

    final(a:number){
      if(this.t_match<5){
      switch(a){
        case 11:
          this.pap_win();
          break;
        case 12:
          this.pap_loss();
          break;
        case 13:
          this.pap_draw();
          break;
        case 21:
          this.rock_win();
          break;
        case 22:
          this.rock_loss();
          break;
        case 23:
          this.rock_draw();
          break;
        case 31:
          this.sci_win();
          break;
        case 32:
          this.sci_loss();
          break;
        case 33:
          this.sci_draw();
          break;



      }

    }else{
    this.start_but=false;
    this.user=0;
    this.num=0;
    this.res=0;
    this.t_match=0;

    this.h_win=0;
    this.h_draw=0;
    this.h_loss=0;

    this.m_win=0;
    this.m_draw=0;
    this.m_loss=0;

     }



  }
}
