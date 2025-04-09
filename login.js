function Check1() {
  const s=document.querySelector('.name').value 
  if(s=='') {
    document.querySelector('.para1').innerHTML='(Please enter the name)';
  }

}