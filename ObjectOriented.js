var userOne = {
	name: 'James',
	email: 'james.potter@hogwarts.wiz',
	//login function(){} es5 down is es6
	login(){
	console.log(this.name, 'Logged In');
	}
	logout() {
	console.log(this.name, 'Logged Out');
	}
}
console.log(userOne.name);
var userTwo = {
	name: 'Lily',
	email: 'lily.potter@hogwarts.wiz',
	//login function(){} es5 down is es6
	login(){
	console.log(this.name, 'Logged In');
	}
	logout() {
	console.log(this.name, 'Logged Out');
	}
}
console.log(userTwo.name);
