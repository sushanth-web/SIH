// theme toggle
    const toggle = document.getElementById('modeToggle');
    const sunBtn = document.getElementById('sunBtn');
    const moonBtn = document.getElementById('moonBtn');
    const alertBtn = document.getElementById('alertBtn')

    function showAlert(){
      alert("This quiz helps us understand your needs and make us proceed accordingly to recommend you the best possible courses.")
    }

    alertBtn.addEventListener('click', ()=>{
  toggle.checked=false;
  setTheme(false);
  showAlert();
});


    const preferDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(localStorage.getItem('theme')==='dark' || (!localStorage.getItem('theme') && preferDark)){
      document.documentElement.classList.add('dark');
      toggle.checked = true;
    }
    function setTheme(d){
      if(d){document.documentElement.classList.add('dark');localStorage.setItem('theme','dark')}
      else{document.documentElement.classList.remove('dark');localStorage.setItem('theme','light')}
    }
    toggle.addEventListener('change', e=> setTheme(e.target.checked));
    sunBtn.addEventListener('click', ()=>{toggle.checked=false;setTheme(false)});
    moonBtn.addEventListener('click', ()=>{toggle.checked=true;setTheme(true)});
