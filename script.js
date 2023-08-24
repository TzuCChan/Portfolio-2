let theme = localStorage.getItem('theme')
if (theme == null) {
  setTheme('light')
}

let themeModes = document.getElementsByClassName("theme-mode");