import React from 'react';
//import './SignIn.css'; 
class SignIn extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}

	onEmailChange = (event)=> {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event)=> {
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignIn=()=> {
		console.log('onsignin');
		fetch('http://localhost:3001/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		}).then(response => response.json())
			.then(user=>{
				if (user.id) {
					this.props.loadUser(user);
					this.props.onRouteChange('home');
				}
		})	
	}

	render() {
		return (
		<article className="br3 ba purple shadow-5 mv3 mw6 center">	
			<main className="pa4 black-80">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100" 
			        	type="email" name="email-address"  id="email-address"
			        	onChange={this.onEmailChange}/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100" 
			        	type="password" name="password"  id="password"
			        	onChange={this.onPasswordChange}/>
			      </div>
			      <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
			    </fieldset>
			    <div className="">
			      <input onClick={this.onSubmitSignIn}
			      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
			      	type="submit" value="Sign in" />
			    </div>
			    <div className="lh-copy mt3 pointer">
			      <p onClick={() => this.props.onRouteChange('register')} className="f5 link dim black db">register</p>
			    </div>		
			  </div>
			</main>
		</article>	
		);
	}	  
}

export default SignIn;