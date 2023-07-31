const sidemenu = document.getElementById("sidemenu")

const openmenu = () => {
  sidemenu.style.right = "0"
  sidemenu.style.transition ="0.5s"
}

const closemenu = () => {
  sidemenu.style.right = "-200px"
}

// about menu

const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-links");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-links")
  document.getElementById(tabname).classList.add("active-tab")
}