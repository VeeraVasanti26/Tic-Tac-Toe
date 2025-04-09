let count=0;
    function fun()
    {
      let b1=document.querySelector('.text1').innerHTML;
      let b2=document.querySelector('.text2').innerHTML;
      let b3=document.querySelector('.text3').innerHTML;
      let b4=document.querySelector('.text4').innerHTML;
      let b5=document.querySelector('.text5').innerHTML;
      let b6=document.querySelector('.text6').innerHTML;
      let b7=document.querySelector('.text7').innerHTML;
      let b8=document.querySelector('.text8').innerHTML;
      let b9=document.querySelector('.text9').innerHTML;
      
        if((b1==='X') || (b1==='O'))
        {
            if((b1===b2) && (b2===b3))
          {
            document.querySelector('.text1').style.color = "green"; 
            document.querySelector('.text2').style.color = "green"; 
            document.querySelector('.text3').style.color = "green"; 
            document.querySelector('.l').innerHTML=`&#127881;player <span class="set">"${b1}"</span>`;
            po();
      
          }
          else if((b1===b4) && (b4===b7))
          {
            document.querySelector('.text1').style.color = "green"; 
            document.querySelector('.text4').style.color = "green"; 
            document.querySelector('.text7').style.color = "green"; 
            document.querySelector('.l').innerHTML=`&#127881;player <span class="set">"${b7}"</span>`;
            po();
          }
          else if((b1===b5) && (b5===b9))
          {
            document.querySelector('.text1').style.color = "green"; 
            document.querySelector('.text5').style.color = "green"; 
            document.querySelector('.text9').style.color = "green"; 
            document.querySelector('.l').innerHTML=`&#127881;player <span class="set">"${b1}"</span>`;
            po();
          }
          else if((b9==='X') || (b9==='O'))
        {
          if((b7===b8) && (b8===b9))
          {
            document.querySelector('.text7').style.color = "green"; 
            document.querySelector('.text8').style.color = "green"; 
            document.querySelector('.text9').style.color = "green"; 
            document.querySelector('.l').innerHTML=`&#127881;player <span class="set">"${b7}"</span>`;
            po();
          }
          else  if((b3===b6) && (b6===b9))
          {
            document.querySelector('.text3').style.color = "green"; 
            document.querySelector('.text6').style.color = "green"; 
            document.querySelector('.text9').style.color = "green"; 
            document.querySelector('.l').innerHTML=`&#127881;player <span class="set">"${b3}"</span>`;
            po();
          }
          else if((b5==='X') || (b5==='O') )
        {
            if((b4===b5) && (b5===b6))
          {
            document.querySelector('.text4').style.color = "green"; 
            document.querySelector('.text6').style.color = "green"; 
            document.querySelector('.text5').style.color = "green"; 
            document.querySelector('.l').innerHTML=`&#127881;player <span class="set">"${b4}"</span>`;
            po();
          }
          if((b2===b5) && (b5===b8))
          {
            document.querySelector('.text2').style.color = "green"; 
            document.querySelector('.text5').style.color = "green"; 
            document.querySelector('.text8').style.color = "green"; 
            document.querySelector('.l').innerHTML=`&#127881;player <span class="set">"${b2}"</span>`;
            po();
          }
          if((b7===b5) && (b5===b3))
          {
            document.querySelector('.text7').style.color = "green"; 
            document.querySelector('.text5').style.color = "green"; 
            document.querySelector('.text3').style.color = "green"; 
            document.querySelector('.l').innerHTML=`&#127881;player <span class="set">"${b3}"</span>`;
            po();
          }
        }
        }
        else if((b5==='X') || (b5==='O') )
        {
            if((b4===b5) && (b5===b6))
          {
            document.querySelector('.text4').style.color = "green"; 
            document.querySelector('.text5').style.color = "green"; 
            document.querySelector('.text6').style.color = "green"; 
            document.querySelector('.l').innerHTML=`&#127881;player <span class="set">"${b4}"</span>`;
            po();
          }
          if((b2===b5) && (b5===b8))
          {
            document.querySelector('.text5').style.color = "green"; 
            document.querySelector('.text2').style.color = "green"; 
            document.querySelector('.text8').style.color = "green"; 
            document.querySelector('.l').innerHTML=`&#127881;player <span class="set">"${b2}"</span>`;
            po();
          }
          if((b7===b5) && (b5===b3))
          {
            document.querySelector('.text7').style.color = "green"; 
            document.querySelector('.text5').style.color = "green"; 
            document.querySelector('.text8').style.color = "green"; 
            document.querySelector('.l').innerHTML=`&#127881;player <span class="set">"${b3}"</span>`;
            po();
          }
        }

        }
        else if((b9==='X') || (b9==='O'))
        {
          if((b7===b8) && (b8===b9))
          {
            document.querySelector('.text7').style.color = "green"; 
            document.querySelector('.text8').style.color = "green"; 
            document.querySelector('.text9').style.color = "green"; 
            document.querySelector('.l').innerHTML=`&#127881;player <span class="set">"${b7}"</span>`;
            po();
          }
          else  if((b3===b6) && (b6===b9))
          {
            document.querySelector('.text3').style.color = "green"; 
            document.querySelector('.text6').style.color = "green"; 
            document.querySelector('.text9').style.color = "green"; 
            document.querySelector('.l').innerHTML=`&#127881;player <span class="set">"${b3}"</span>`;
            po();
          }
          else if((b5==='X') || (b5==='O') )
        {
            if((b4===b5) && (b5===b6))
          {
            document.querySelector('.text4').style.color = "green"; 
            document.querySelector('.text5').style.color = "green"; 
            document.querySelector('.text6').style.color = "green"; 
            document.querySelector('.l').innerHTML=`&#127881;player <span class="set">"${b4}"</span>`;
            po();
          }
          if((b2===b5) && (b5===b8))
          {
            document.querySelector('.text2').style.color = "green"; 
            document.querySelector('.text5').style.color = "green"; 
            document.querySelector('.text8').style.color = "green"; 
            document.querySelector('.l').innerHTML=`&#127881;player <span class="set">"${b2}"</span>`;
            po();
          }
          if((b7===b5) && (b5===b3))
          {
            document.querySelector('.text7').style.color = "green"; 
            document.querySelector('.text5').style.color = "green"; 
            document.querySelector('.text3').style.color = "green"; 
            document.querySelector('.l').innerHTML=`&#127881;player <span class="set">"${b3}"</span>`;
            po();
          }
        }
        }
        else if((b5==='X') || (b5==='O') )
        {
            if((b4===b5) && (b5===b6))
          {
            document.querySelector('.text4').style.color = "green"; 
            document.querySelector('.text5').style.color = "green"; 
            document.querySelector('.text6').style.color = "green"; 
            document.querySelector('.l').innerHTML=`&#127881;player <span class="set">"${b4}"</span>`;
            po();
          }
          if((b2===b5) && (b5===b8))
          {
            document.querySelector('.text2').style.color = "green"; 
            document.querySelector('.text5').style.color = "green"; 
            document.querySelector('.text8').style.color = "green"; 
            document.querySelector('.l').innerHTML=`&#127881;player <span class="set">"${b2}"</span>`;
            po();
          }
          if((b7===b5) && (b5===b3))
          {
            document.querySelector('.text7').style.color = "green"; 
            document.querySelector('.text5').style.color = "green"; 
            document.querySelector('.text3').style.color = "green"; 
            document.querySelector('.l').innerHTML=`&#127881;player <span class="set">"${b3}"</span>`;
            po();
          }
        }
        
        
        
      }
     function ro()
     {
      let b1=document.querySelector('.text1').innerHTML;
      let b2=document.querySelector('.text2').innerHTML;
      let b3=document.querySelector('.text3').innerHTML;
      let b4=document.querySelector('.text4').innerHTML;
      let b5=document.querySelector('.text5').innerHTML;
      let b6=document.querySelector('.text6').innerHTML;
      let b7=document.querySelector('.text7').innerHTML;
      let b8=document.querySelector('.text8').innerHTML;
      let b9=document.querySelector('.text9').innerHTML;
      if(((b1==='X') || (b1==='O')) && ((b2==='X') || (b2==='O')) && ((b3==='X') || (b3==='O')) && ((b4==='X') || (b4==='O')) && ((b5==='X') || (b5==='O')) && ((b6==='X') || (b6==='O')) && ((b7==='X') || (b7==='O')) && ((b8==='X') || (b8==='O')) && ((b9==='X') || (b9==='O')))
        {
          document.querySelector('.l').innerHTML=`&#128078;It's a <span class="set">"Tie"</span>`;
        }
           
     }
      function po()
      {
        document.querySelector('.text1').disabled=true;
            document.querySelector('.text2').disabled=true;
            document.querySelector('.text3').disabled=true;
            document.querySelector('.text4').disabled=true;
            document.querySelector('.text5').disabled=true;
            document.querySelector('.text6').disabled=true;
            document.querySelector('.text7').disabled=true;
            document.querySelector('.text8').disabled=true;
            document.querySelector('.text9').disabled=true;
      }
      function fon()
      {
        document.querySelector('.text1').innerHTML="";
        document.querySelector('.text2').innerHTML="";
        document.querySelector('.text3').innerHTML="";
        document.querySelector('.text4').innerHTML="";
        document.querySelector('.text5').innerHTML="";
        document.querySelector('.text6').innerHTML="";
        document.querySelector('.text7').innerHTML="";
        document.querySelector('.text8').innerHTML="";
        document.querySelector('.text9').innerHTML="";
        document.querySelector('.text1').disabled=false;
        document.querySelector('.text2').disabled=false;
        document.querySelector('.text3').disabled=false;
        document.querySelector('.text4').disabled=false;
        document.querySelector('.text5').disabled=false;
        document.querySelector('.text6').disabled=false;
        document.querySelector('.text7').disabled=false;
        document.querySelector('.text8').disabled=false;
        document.querySelector('.text9').disabled=false;
        document.querySelector('.l').innerHTML="";
        document.querySelector('.text1').classList.remove('oto');
        document.querySelector('.text2').classList.remove('on');
        document.querySelector('.text3').classList.remove('oto');
        document.querySelector('.text4').classList.remove('on');
        document.querySelector('.text5').classList.remove('oto');
        document.querySelector('.text6').classList.remove('on');
        document.querySelector('.text7').classList.remove('oto');
        document.querySelector('.text8').classList.remove('on');
        document.querySelector('.text9').classList.remove('oto');
        document.querySelector('.text1').classList.remove('on');
        document.querySelector('.text2').classList.remove('oto');
        document.querySelector('.text3').classList.remove('on');
        document.querySelector('.text4').classList.remove('oto');
        document.querySelector('.text5').classList.remove('on');
        document.querySelector('.text6').classList.remove('oto');
        document.querySelector('.text7').classList.remove('on');
        document.querySelector('.text8').classList.remove('oto');
        document.querySelector('.text9').classList.remove('on');
        document.querySelector('.text1').style.color = "white"; 
        document.querySelector('.text2').style.color = "white"; 
        document.querySelector('.text3').style.color = "white";
        document.querySelector('.text4').style.color = "white"; 
        document.querySelector('.text5').style.color = "white"; 
        document.querySelector('.text6').style.color = "white";
        document.querySelector('.text7').style.color = "white"; 
        document.querySelector('.text8').style.color = "white"; 
        document.querySelector('.text9').style.color = "white";
  
  }
  
  

    