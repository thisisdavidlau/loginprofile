function showProfile(){

//CREATE VARIABLES FOR MAIN PROFILE DIV, FIRST, AND LAST NAME VALUES
	var profile = document.getElementById('profile')
	var firstName = document.getElementById('firstName').value
	var lastName = document.getElementById('lastName').value


//LOOPS THROUGH ALL RADIO BUTTONS IN WITH NAME OF "GENDER" (form var radiosGender)
	var gender = ""
	var radiosGender = document.getElementsByName('gender')

	for (var i = 0, length = radiosGender.length; i < length; i++) {
	    if (radiosGender[i].checked) {
	        // do whatever you want with the checked radio
	        var gender = (radiosGender[i].value);

	        // only one radio can be logically checked, don't check the rest
	        break;
	    }
	}

//CREATE VARIABLES FOR EMAIL VALUE AND PHONE VALUE FROM FORM
	var email = document.getElementById('email').value
	var phoneNum = document.getElementById('phone#').value

//CREATE VARIABLES FOR COLOR FORM AND COLOR VALUE PICKED
	var colorForm = document.getElementById('color')
	var colorPicked = colorForm.options[colorForm.selectedIndex].value


//LOOPS THROUGH RADIO OPTIONS WITH NAME OF 'CONTINENT'
	var continent = ""
	var radiosContinent = document.getElementsByName('continent')

	for (var i = 0, length = radiosContinent.length; i < length; i++) {
	    if (radiosContinent[i].checked) {
	        // do whatever you want with the checked radio
	        var continent = (radiosContinent[i].value);
	      

	        // only one radio can be logically checked, don't check the rest
	        break;
	    }
	}


//CREATE VARIABLES FOR BUTTON AND NEW DIV
	var button = document.getElementById('button')
	var newProfileDiv = document.getElementById('newProfileDiv')


//HIDE FORM WHEN BUTTON IS CLICKED
	profile.className = "hideProfile"
	newProfileDiv.className = ""


	function profileInfo(firstN, lastN, gen, emailaddr, phoneNumber, color, continentBorn){
		this.firstN = firstN
		this.lastN = lastN
		this.gen = gen
		this.emailaddr = emailaddr
		this.phoneNumber = phoneNumber
		this.color = color
		this.continentBorn = continentBorn
	}

//NEW VAR USER TO CALL FROM FUNCTION PROFILEINFO
	var user = new profileInfo(firstName, lastName, gender, email, phoneNum, colorPicked, continent)

//CREATE TEXTNODES FOR EVERY VALUE
	var fullName = document.createTextNode('Name: ' + user.firstN + " " + user.lastN)
	var genderText = document.createTextNode('Gender: ' + user.gen)
	var emailText = document.createTextNode('E-mail: ' + user.emailaddr)
	var phonetext = document.createTextNode('Phone Number: ' + user.phoneNumber)
	var colortext = document.createTextNode('Team Color: ' + user.color)
	var continentText = document.createTextNode('Continent Born: ' + user.continentBorn)

//CREATE ELEMENTS FOR ALL TEXTNODES
	var h1Name = document.createElement('h1')
	var pGender = document.createElement('p')
	var pEmail = document.createElement('p')
	var pPhone = document.createElement('p')
	var pcolor = document.createElement('p')
	var pcontinent = document.createElement('p')



//APPEND EACH ELEMENT INTO THE NEW DIV
	newProfileDiv.appendChild(h1Name)
	newProfileDiv.appendChild(pGender)
	newProfileDiv.appendChild(pEmail)
	newProfileDiv.appendChild(pPhone)
	newProfileDiv.appendChild(pcolor)
	newProfileDiv.appendChild(pcontinent)

//APPEND EACH TEXTNODEINTO THEIR RESPECTIVE ELEMENT
	h1Name.appendChild(fullName)
	pGender.appendChild(genderText)
	pEmail.appendChild(emailText)
	pPhone.appendChild(phonetext)
	pcolor.appendChild(colortext)
	pcontinent.appendChild(continentText)


}

//GIVES THE BUTTON AN EVENT SO WHEN IS CLICKED, RUN FUNCTION SHOWPROFILE
button.addEventListener('click', showProfile, false)











