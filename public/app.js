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


var GreeterForm = React.createClass({

    onFormSubmit (event) {
        event.preventDefault();

        var name = this.refs.name.value;
       
        if (name.length > 0){
            this.refs.name.value = '';
            this.props.onNewName(name);
        }
    },

    render() {
        return(
            <form onSubmit = {this.onFormSubmit}>
                <input type = "text" ref = "name"/>
                <button>Set Name </button>
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
            name : this.props.name
        };
    },

    handleNewName (name) {
        this.setState({
            name : name
        });
    },

    render() {
        var name = this.state.name;     //this.props stores all of our props
        var message = this.props.message;
        return(
            <div>
                <GreeterMessage name = {name} message = {message}/>
                <GreeterForm onNewName = {this.handleNewName}/>
            </div>
        );
    }
});

var firstName = 'Anushil';

ReactDOM.render(
    <Greeter name = {firstName} message = "This is a message prop"/>,
    document.getElementById('app')
);