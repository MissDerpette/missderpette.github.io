const webDevelopmentList = [
    "JavaScript",
    "HTML5",
    "CSS3",
  ];
  
  const librariesList = [
    "Bootstrap",
    "JQuery",
  ];
  
  const databaseList = [
    "Firebase",
    "Authentication",
    "Firebase",
    "Store",
    "SQLite",
  ];
  
  const frameworksList = [
    "Vue.JS",
    "Vuex",
    "Vue-router",
    "Node.JS",
    "Express.JS",
  ];
  
  const othersList = [
    "NPM",
    "Postman",
    "Git",
    "Rest API",
    "Bash",
  ];
  
  const softwarePhilosophiesList = [
    "C.R.U.D. Operations",
    "S.O.L.I.D. Principle",
    "D.R.Y. Principle",
    "Clean Coding",
    "Scrum Methodologies",
    "Software Development Life Cycle",
  ];


// carousel
var index = 0;
var slides = document.querySelectorAll('.slides');
carousel();

function carousel(){
	if (slides.length > 0){
		var x = document.getElementsByClassName('slides');
		for (var i = 0; i < x.length; i++){
			x[i].style.display = "none";
		}
		index++;
		if (index > x.length){index = 1}
			x[index-1].style.display = "block";
		setTimeout(carousel, 3000);
	}
}