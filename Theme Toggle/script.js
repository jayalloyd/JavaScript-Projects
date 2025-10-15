let themeContainer=document.getElementById('theme-container');
let themeToggleBtn=document.getElementById("theme-toggle-btn");
themeToggleBtn.addEventListener('change',function() {
      if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); // Save preference
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); // Save preference
      }

      
    });
document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggleBtn.checked = savedTheme === 'dark';
  }
})