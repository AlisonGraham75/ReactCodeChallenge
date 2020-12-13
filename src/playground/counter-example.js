//count - set default prop value to 0

class Counter extends React.Component {

    constructor(props) {
        //Get access to this.props
        super(props);
        //Fix the 'this' context
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        //set up a default state
        this.state = {
            count: 0
        };
    }
    
    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);
            if (!isNaN(count)) {
                this.setState(() => ({ count }));
            }
       
        } catch (e) {
          // Do nothing at all
        }
      }
      componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
          localStorage.setItem('count', this.state.count);
        }
      }

    handleAddOne () {
        //send setState method the state that you want to change. 
        //if you try to manipulate it directly without the set state, it 
        //wont autorerender
        
        this.setState((previousState) =>{
            return {
                count: previousState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState( (previousState) => {
            return {
                count: previousState.count -1
            };
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>Reset</button>
        </div> 
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));