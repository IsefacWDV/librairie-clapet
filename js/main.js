window.onload = function() {
   body = document.querySelector('body')
   setTimeout(function () {
       body.classList.add('loaded')
   }, 1000)
}