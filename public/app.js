
//It's a React Component 
var Greeter = React.createClass({
    
    getDefaultProps () {
        return {
            name : " ",
            message : "default message"
        };
    },

    render() {
        var name = this.props.name;     //this.props stores all of our props
        var message = this.props.message;
        return(
            <div>
                <h1>Hello, {name} </h1>
                <p>
                    <b>This is the greeter component!  </b> 
                            {message + '!!!'} -by: Anushil
                </p>
            </div>
        );
    }
});

var firstName = 'Anushil';

ReactDOM.render(
    <Greeter name = {firstName} message = "This is a message prop"/>,
    document.getElementById('app')
);