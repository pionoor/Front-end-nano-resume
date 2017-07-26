/*
This is empty on purpose! Your code to build the resume will go here.
 */
//-------------------------------------------Bio-------------------------------------------------------
var bio = {
	"name": "Noor Thabit",
	"role": "Software Engineer",
	"contacts": {
		"mobile": "281-xxx-xxx",
		"email": "pionoor@gmail.com",
		"github": "pionoor",
		"twitter": "pionoor",
		"location": "Plano, TX"
		},
	"welcomeMessage": "Hi there!",
	"skills": ["C++", "Java", "Swift", "HTML/CSS"],
	"biopic": "images/fry.jpg",
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcomMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

		$("#header").append(formattedName);
		$("#header").append(formattedRole);

		$("#header, #footerContacts").append(formattedMobile);
		$("#header, #footerContacts").append(formattedEmail);
		$("#header, #footerContacts").append(formattedTwitter);
		$("#header, #footerContacts").append(formattedGithub);
		
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomMsg);

		$("#header").append(HTMLskillsStart);
		for (var item in bio.skills) {
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[item]);
			$("#skills").append(formattedSkills);
		}
		
	}
};
//-----------------------------------------Education--------------------------------------

var education = {
	"schools": [{
		"name": "Texas A&M University",
		"location": "College Station",
		"degree": "Bachelors of Science",
		"major": "Computer Science",
		"dates": "Jan 2012 - Dec 2016",
		"url": "www.tamu.edu"
	}],
	"onlineCourses" : [{
		"title" : "Front-End Nanodegree",
		"school" : "Udacity",
		"dates" : "Aug 2017 - Sep 2017",
		"url" : "www.Udacity.com"
	}],
	"display" : function(){
		$("#education").append(HTMLschoolStart);
		education.schools.forEach(function(school){
			var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);

			$(".education-entry").append(formattedSchoolName);
			$(".education-entry").append(formattedSchoolDegree);
			$(".education-entry").append(formattedSchoolDates);
			$(".education-entry").append(formattedSchoolLocation);
			$(".education-entry").append(formattedSchoolMajor);
		});

		$(".education-entry").append(HTMLonlineClasses);
 		education.onlineCourses.forEach(function(course){
			var formattedonlineTitle = HTMLonlineTitle.replace("%data%", course.title);
			var formattedonlineSchool = HTMLonlineSchool.replace("%data%", course.school);
			var formattedonlineDates = HTMLonlineDates.replace("%data%", course.dates);
			var formattedonlineURL = HTMLonlineURL.replace("%data%", course.url);
			
			$(".education-entry").append(formattedonlineTitle);
			$(".education-entry").append(formattedonlineSchool);
			$(".education-entry").append(formattedonlineDates);
			$(".education-entry").append(formattedonlineURL);

		});
	}
};

//-------------------------------------work----------------------------------------------

var work = {
	"jobs": [{
		"employer": "Infosys",
		"title": "Software Engineer",
		"location": "Plano, TX",
		"dates": "Aug 2012 – Jan 2013",
		"description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim"
	}, {
		"employer": "Infosys",
		"title": "URA",
		"location": "Bryan/College Station, Texas",
		"dates": "Jul 2015 – Dec 2015",
		"description": "Under the supervision of Dr. Anxiao Jiang, I studied and researched Error-Correcting Codes. The main research work focuses on error-correction of texts in English as a case study. It proposed a scheme that combines language-based decoding with ECC decoding."
	}, {
		"employer": "Houston Community College",
		"title": "Math Tutor",
		"location": "Houston, Texas",
		"dates": "Apr 2012 – Dec 2012",
		"description": "College Algebra, and Calculs tutoring."
	}, {
		"employer": "Staples",
		"title": "Resident Technician",
		"location": "Houston, Texas",
		"dates": "Oct 2010 – Aug 2011",
		"description": "Under the supervision of Dr. Anxiao Jiang, I studied and researched Error-Correcting Codes. The main research work focuses on error-correction of texts in English as a case study. It proposed a scheme that combines language-based decoding with ECC decoding."
	}],
	"display" : function() {
		$("#workExperience").append(HTMLworkStart);
		work.jobs.forEach(function(job) {
			var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
			var formattedworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
			var formattedworkTitle = HTMLworkTitle.replace("%data%", job.title);
			var formattedworkEmployerTiltle = formattedworkEmployer + formattedworkTitle;
			var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);
			var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
			$(".work-entry:last").append(formattedworkEmployerTiltle);
			$(".work-entry:last").append(formattedWorkDates);
			$(".work-entry:last").append(formattedworkLocation);
			$(".work-entry:last").append(formattedworkDescription);
		});
	}
};
//---------------------------------------Projects--------------------------------------
var projects = {
	"projects": [{
		"title": "Clean XKCD",
		"dates": "2015",
		"description": "A clean, and user-friendly interface that uses xkcd.com API to display the content of the website in a native app. The app supports pinch gestures, in addition, it allows the user to save any comic picture directly to their local photo library.",
		"images": []
	}, {
		"title": "Gesture Ball Maze Project",
		"dates": "Mar 2016 - May 2016",
		"description": "An automated version of the labyrinth ball maze game that is controlled by hand motion via a Leap Motion device. Mechanically, the board will be controlled by two servos; each one responsible for tilting the around its axis. See figure below. The palm of the player's hand will represent the plane of the game. By tilting the palm of the hand, the plane of the board will tilt accordingly. This can be achieved by connecting the Leap Motion to a standalone PC that processes the data and sends it to a micro-controller. The micro-controller then translates the data to corresponding voltage values that animate the servos",
		"images": []
		}],
	"display" : function() {
		projects.projects.forEach(function(project) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
			var formattedProjectDate = HTMLprojectDates.replace("%data%", project.dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
			var formattedProjectImage = HTMLprojectImage.replace("%data%", project.images);
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDate);
			$(".project-entry:last").append(formattedProjectDescription);
			$(".project-entry:last").append(formattedProjectImage);
		});
	}
};

//--------------------------------------functions------------------------------------------


function inName(fullName) {
	var firstLast = fullName.split(" ");
	return firstLast[0].slice(0, 1).toUpperCase() + firstLast[0].slice(1).toLowerCase() + " " + firstLast[1].toUpperCase();
}
//--------------------------------------Main---------------------------------------------



inName("Noor Thabit");
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);


initializeMap();



