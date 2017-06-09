var bio = {
    "name": "Ravi Seth",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "+91-8090999542",
        "email": "ravi.kseth.che12@iitbhu.ac.in",
        "github": "artoffeeding",
        "twitter": "@ravikumarseth",
        "location": "Varanasi, India"
    },
    "welcomeMessage": "In anticipation of an opportunity providing intellectually and technically challenging work which resonates with my aim for achieving higher level of inter-dependence",
    "skills": ["HTML, CSS, JavaScript", "Object-Oriented Programming", "Bootstrap", "jQuery", "HTML5 Canvas","Knockout",  "C, Java", "MySQL"],
    "biopic": "images/image.jpg"
};

var education = {
    "schools": [{
        "name": "IIT(BHU) Varanasi",
        "location": "Varanasi, India",
        "degree": "B. Tech",
        "majors": ["Chemical Engineering"],
        "dates": "2012-16",
        "url": "http://www.iitbhu.ac.in/"
    }, {
        "name": "Sunbeam Academy",
        "location": "Varanasi, India",
        "degree": "High School",
        "majors": ["Physics", "Chemistry", "Mathematics"],
        "dates": "2010-11",
        "url": "http://www.sunbeamacademy.com/"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "Dec'16-present",
        "url": "https://profiles.udacity.com/u/ravikumarseth"
    }, {
        "title": "Front-End Web Developer Nanodegree",
        "school": "Free Code Camp",
        "dates": "Sep'16-present",
        "url": "https://www.freecodecamp.com/ravikumarseth"
    }]
};

var work = {
    "jobs": [{
        "employer": "XYZ Company",
        "title": "Front-End Web Developer",
        "location": "Varanasi, India",
        "dates": "2017-future",
        "description": "Work description goes here. Work description goes here. Work description goes here. Work description goes here. Work description goes here. Work description goes here. Work description goes here. Work description goes here. Work description goes here. Work description goes here. Work description goes here. Work description goes here. Work description goes here. Work description goes here. Work description goes here."
    }]
};

var projects = {
    "projects": [{
        "title": "Feed Reader Testing",
        "dates": "May 2017",
        "description": "Wrote comprehensive unit tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google's RSS API.",
        "images": ["images/feedreader-1.png"],
        "url" : "../frontend-nanodegree-feedreader"
    },{
        "title": "Neighborhood Map",
        "dates": "May 2017",
        "description": "A single-page web application, built using the Knockout framework, that displays a Google Map of an area and various points of interest. Users can search all included landmarks and, when selected, additional information about a landmark is presented from the FourSquare and APIXU APIs.",
        "images": ["images/neighborhood-map-1.jpg"],
        "url" : "../frontend-nanodegree-neighborhood-map"
    },{
        "title": "Website Optimization",
        "dates": "June 2017",
        "description": "Optimized an inefficient web application's JavaScript, CSS and assets delivery, ensuring it runs at 60fps and achieves a PageSpeed score of at least 90.",
        "images": ["images/web-optimization-1.jpg"],
        "url" : "../frontend-nanodegree-mobile-portfolio-master/views/pizza.html"
    },{
        "title": "Frogger - Classic Arcade Game Clone",
        "dates": "December 2016",
        "description": "An HTML5 Canvas powered video game, developed using the best practices in Object Oriented JavaScript.",
        "images": ["images/frogger-1.jpg", "images/frogger-2.jpg", "images/frogger-3.jpg"],
        "url" : "../frontend-nanodegree-arcade-game/"
    }, {
        "title": "Local Weather",
        "dates": "January 2017",
        "description": 'Built a Web Page which uses "HTML5 Navigator" or "IPinfo.io API"(on Navigator Error) to find location of user and then uses "Apixu: Weather API" to get local weather with 1 week forecasts.',
        "images": ["images/weather-1.jpg", "images/weather-2.jpg", "images/weather-3.jpg"],
        "url" : "../../freecodecamp/local-weather/"
    },
                {
        "title": "Random Quote Machine",
        "dates": "December 2016",
        "description": 'Built a Web Page which uses "Quotes On Design API" to generate random quotes which can be Tweeted out with a button click.',
        "images": ["images/quotes-1.jpg", "images/quotes-2.jpg", "images/quotes-3.jpg"],
        "url" : "../../freecodecamp/random-quotes/"
    },
                {
        "title": "Wikipedia Viewer",
        "dates": "January 2017",
        "description": "Using jQuery, developed an interactive page that reads all data from Wikipedia API based on query searched and then dynamically modifies the DOM to display the information.",
        "images": ["images/wiki-1.jpg", "images/wiki-2.jpg"],
        "url" : "../../freecodecamp/wiki-viewer/"
    },
                {
        "title": "Twitch Status Checker",
        "dates": "January 2017",
        "description": "Developed an interactive page that uses jQuery to read all data from Free Code Camp's Twitch API based on query searched and then dynamically modifies the DOM to display the information.",
        "images": ["images/twitch-1.jpg", "images/twitch-2.jpg"],
        "url" : "../../freecodecamp/twitch-json-api/"
    },
                {
        "title": "Portfolio",
        "dates": "November 2016 - Present",
        "description": "Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers.",
        "images": ["images/portfolio-1.jpg", "images/portfolio-2.jpg", "images/portfolio-3.jpg"],
        "url" : "../../"
    },
                {
        "title": "Interactive Resume",
        "dates": "December 2016",
        "description": "Using jQuery, developed an interactive resume application that reads all data from a JSON file and then dynamically modifies the DOM to display the information. Further customized the project by personalizing the design using CSS.",
        "images": ["images/resume-1.jpg", "images/resume-2.jpg", "images/resume-3.jpg", "images/resume-4.jpg"],
        "url" : "#"
    }]
};

bio.display = function displayBio() {

    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            $("#skills").append(HTMLskills.replace("%data%", skill));
        });
    }

    var formattedMobile = HTMLmobile.replace("#", "callto: " + bio.contacts.mobile).replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("#", "mailto: " + bio.contacts.email).replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("#", "https://github.com/" + bio.contacts.github).replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("#", "https://twitter.com/" + bio.contacts.twitter.slice(1)).replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("#", "https://www.google.co.in/search?q=" + bio.contacts.location).replace("%data%", bio.contacts.location);

    $("#topContacts, #footerContacts").append(formattedMobile);
    $("#topContacts, #footerContacts").append(formattedEmail);
    $("#topContacts, #footerContacts").append(formattedGithub);
    $("#topContacts, #footerContacts").append(formattedTwitter);
    $("#topContacts, #footerContacts").append(formattedLocation);
};

work.display = function displayWork() {
    $("#workExperience").append(HTMLworkStart);

    for (var i = 0; i < work.jobs.length; i++) {
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);

        var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle + formattedWorkLocation;

        $(".work-entry:last").append(formattedWorkEmployerTitle);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkDesc);
    }
};

projects.display = function displayProjects() {

    $("#projects").append(HTMLprojectStart);

    projects.projects.forEach(function(project) {
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
        project.images.forEach(function(image) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", image));
        });
    });
};

education.display = function displayEducation() {

    $("#education").append(HTMLschoolStart);

    education.schools.forEach(function(school) {

        var formattedSchoolName = HTMLschoolName.replace("#", school.url).replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;

        $(".education-entry:last").append(formattedNameDegree);
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));

        var formattedSchoolMajors = "";
        var schoolMajorsLength = school.majors.length;

        for (var i = 0; i < schoolMajorsLength; i++) {
            formattedSchoolMajors += school.majors[i];
            if (i !== (schoolMajorsLength - 1)) {
                formattedSchoolMajors += ", ";
            }
        }

        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", formattedSchoolMajors));
    });

    $("#education").append(HTMLonlineClasses);

    $("#education").append(HTMLschoolStart);

    education.onlineCourses.forEach(function(onlineCourse) {

        var formattedOnlineTitle = HTMLonlineTitle.replace("#", onlineCourse.url).replace("%data%", onlineCourse.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;

        $(".education-entry:last").append(formattedTitleSchool);
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", onlineCourse.dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", onlineCourse.url));
    });
};

function displayGoogleMap() {
    $("#mapDiv").append(googleMap);
}

bio.display();
//work.display();
projects.display();
education.display();
displayGoogleMap();

//Uncomment below code to add Internationalize Name Button

/*

$("#main").append(internationalizeButton);

function inName(){
    var nameArray = [];
    var name = bio.name;
    nameArray = name.trim().split(" ");
    nameArray[0] = nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
    nameArray[1] = nameArray[1].toUpperCase();
    name = nameArray.join(" ");
    return name;
}

*/