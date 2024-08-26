function redirect(link) {
  window.open(link, "_blank");
}

const openAbout = document.getElementById('openAbout')
const closeAbout = document.getElementById('closeAbout')
const modal = document.querySelector("dialog")

openAbout.onclick = function(){
  modal.show()
}
closeAbout.onclick = function(){
  modal.close()
}
