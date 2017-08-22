// JavaScript Document
function navBuilder(){
	var nav="";
	nav+="<label for='show-menu' class='show-menu'>Show Menu</label>";
	nav+="<input type='checkbox' id='show-menu' role='button'>";
	nav+="<ul id='menu'>";
	nav+="<li><a href='index.html'>Home</a></li>";
	nav+="<li>";
	nav+="<a href='#'>About</a>";
	nav+="<ul class='hidden'>";
	nav+="<li><a href='applications.html'>Applications</a></li>";
	nav+="<li><a href='math.html'>Math</a></li>";
	nav+="</ul>";
	nav+="</li>";
	nav+="<li>";
	nav+="<a href='#'>Applications</a>";
	nav+="<ul class='hidden'>";
	nav+="<li><a href='rosterBuilder.html'>Roster Builder</a></li>";
	nav+="<li><a href='jamTracker.html'>Jam Tracker</a></li>";
	nav+="<li><a href='blockerClock.html'>Blocker Clock</a></li>";
	nav+="<li><a href='jamStats.html'>Jam Stats</a></li>";
	nav+="<li><a href='blockStats.html'>Blocker Stats</a></li>";
	nav+="</ul>";
	nav+="</li>";
	nav+="<li><a href='#'>Support</a>";
    nav+="<ul class='hidden'>";
	nav+="<li><a href='tips.html'>Tips and Tricks</a></li>";
    nav+="<li><a href='files.html'>Sample Files</a></li>";
	nav+="<li><a href='contact.html'>Contact</a></li>";
	nav+="</ul>";
    nav+="</li>";
	nav+="</ul>";
	document.getElementById("navigation").innerHTML=nav
}