var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
	render : function(){

		return (
			<div> Hello World React JS Program {this.props.name} </div>
		)

	}
});

var FriendsContainer = React.createClass({
   render: function(){
   	var name = 'Sam';
   	var friends_names = ["Ram","Lakshman","Bharath"];
   	return (
   		<div>
   		<HelloWorld name="Jags" />
   		<h3>Name: {name} </h3>
   		<ShowList friends={friends_names}/>   		
   		</div>
   	)
   }
});

var ShowList   = React.createClass({
	

	render: function(){
		var friend_list = this.props.friends.map(function(friend){
		return <li>{friend}</li>
		});
		return(
			<ul>
				{friend_list}
			</ul>
		)

	}

});

ReactDOM.render(
	<FriendsContainer />,	
	document.getElementById('app')
);
