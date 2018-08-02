//child componenet
var GreeterMessage = React.createClass({

    render () {
        var name = this.props.name;
        var message = this.props.message;
     
        return(
            <div>
                <h1>Hello, {name} !</h1>
                <p>{message}</p>
            </div>
        );
    }
});

//child component
var GreeterForm = React.createClass({

    onFormSubmit (event) {
        event.preventDefault();

        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;
       
        if (name.length > 0){
            this.refs.name.value = '';
            updates.name = name;
        }

        if (message.length > 0) {
            this.refs.message.value = '';
            updates.message = message;
        }
        
        this.props.onNewData(updates);
    },

    render() {
        return(
            <form onSubmit = {this.onFormSubmit}>
                <div>
                    <input type = "text" placeholder = "Enter name" ref = "name"/>
                </div>
                <div> 
                    <textarea placeholder = "Enter message" ref = "message"/>
                </div>
                <div>
                    <button>Submit</button>
                </div> 
            </form>
        );
    }
});

//It's a React Component 
var Greeter = React.createClass({    
    //default 
    getDefaultProps () {
        return {
            name : "React",
            message : "default message"
        };
    },

    getInitialState () {
        return {
            name : this.props.name,
            message : this.props.message
        };
    },

    handleNewData (updates) {
        this.setState(updates);
        // this.props.message = "new message"   // updating props value is not allowed in react,no change is done
    },

    render() {
        var name = this.state.name;     //this.props stores all of our props
        var message = this.state.message;
       
        return(
            <div>  
                <GreeterMessage name = {name} message = {message}/>
                <GreeterForm onNewData = {this.handleNewData}/>
            </div>
        );
    }
});

var firstName = 'Anushil';

ReactDOM.render(
    <Greeter name = {firstName} message = "This is a message prop"/>,
    document.getElementById('app')
);