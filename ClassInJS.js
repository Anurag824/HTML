class User{
	constructor(name, email){
		this.name=name;
		this.email=email;
		this.score=0;
		console.log('creating new user', name);
	}
}
login(){
	console.log(this.name, 'Logged In');
	}
logout() {
	console.log(this.name, 'Logged Out');
	}
	class Admin extends User{
		deleteUser(user){
			users=users.filter(u=>{
				return u.email!=user.email;
			});
		}
	}
	var admin=new Admin('Dumbledore','hagrid.dumbledore@hogwarts.wiz');
var userOne=new User('Harry', 'harry.potter@hogwarts.wiz');
var userTwo=new User('Ron', 'harry.potter@hogwarts.wiz');
updateScore()
{
	this.score++;
	console.log(this.name,' score is ',this.score);
	return this;
}
//userOne.login().logout();
//userOne.login().updateScore().updateScore().logout();
