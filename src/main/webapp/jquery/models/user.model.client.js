function User(username, password, firstName, lastName) {
  this.username = username;
  this.password = password;
  this.firstName = firstName;
  this.lastName = lastName;

  this.setUsername = setUsername;
  this.getUsername = getUsername;
  
  this.setPassword = setPassword;
  this.getPassword = getPassword;
  
  this.setfirstName = setfirstName;
  this.getfirstName = getfirstName;
  
  this.setlastName = setlastName;
  this.getlastName = getlastName;

  function setUsername(username) {
    this.username = username;
  }
  function getUsername() {
    return this.username;
  }
  
  function setPassword(password) {
	this.password = password;
  }
  
  function getPassword() {
	return this.password;
  }
  
  function setFirstName(firstName) {
	  this.firstName = firstName;
  }
  
  function getFirstName() {
	  return this.firstName;
  }
  
  function setLastName(lastName) {
	  this.lastName = lastName;
  }
  
  function getlastName() {
	  return this.lastName;
  }
  
}
