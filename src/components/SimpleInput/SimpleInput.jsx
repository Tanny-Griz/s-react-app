import React from 'react';
import '../Button/Button';
import Input from '../Input/Input';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

class SimpleInput extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            text: 'Here the text will appear',
            inputText: '',
            radio: '0',
            data: [] 
        }
        this.showText = this.showText.bind(this);
        this.showRadio = this.showRadio.bind(this);
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
          .then(res => res.json())
          .then(json => this.setState({ data: json }));
      }

    componentWillMount() {
        this.setState({
            selectedOption: null,
        })
    }

    showText(e) {
        this.setState({ inputText: e.target.value});
    }
    showRadio(e) {
        this.setState({ radio: e.target.value});
    }
    showSelect = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    render() {
       return (
        <div>
            <div className="box">
                <p>{this.state.text}</p>
                <Input type={'text'} onChange={this.showText}/>
                <p>{this.state.inputText}</p>
            </div>
            <div className="box">
                <p>Check</p>
                <label htmlFor={'one'}>1</label>
                <Input 
                    id='one' 
                    type={'radio'} 
                    name='radio'
                    value='1'
                    onChange={this.showRadio}
                    />
                <label htmlFor={'two'}>2</label>
                <Input 
                    id='two' 
                    type={'radio'} 
                    name='radio'
                    onChange={this.showRadio}
                    value='2'
                    />
                <label htmlFor={'three'}>3</label>
                <Input 
                    id='three' 
                    type={'radio'} 
                    name='radio'
                    onChange={this.showRadio}
                    value='3'
                    />
                <label htmlFor={'four'}>4</label>
                <Input 
                    id='four' 
                    type={'radio'} 
                    name='radio'
                    onChange={this.showRadio}
                    value='4'
                    />
                <p>{this.state.radio}</p>
            </div>
            <div className="box">
                <Select
                    value={this.state.selectedOption}
                    onChange={this.showSelect}
                    options={options}
                    className="mb-20"
                />
                <Select
                    defaultValue={options[0]}
                    isMulti
                    name="colors"
                    options={options}
                    className="mb-20"
                    classNamePrefix="select"
                />
            </div>
            
        </div>
    ) 
    }
    
}

export default SimpleInput