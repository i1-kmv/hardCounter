import React from 'react';
import logo from './logo.svg';
import './App.css';
import Settings from "./components/SettingBlock/Settings";
import Counter from "./components/CounterBlock/Counter";


class App extends React.Component {


    state = {
        settingButtons: 'set',
        counterButtons: ['inc', 'reset'],
        areaItem: ['max value', 'start value'],
        valueVisual: "enter values and press 'set'",
        startValue: '',
        maxValue: '',
        inputClassGood: 'good',
        inputClassBad: 'bad'
    }


    componentDidMount = () => {
        this.restoreState()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let maxValue = +this.state.maxValue
        let startValue = +this.state.startValue

        if ((startValue >= maxValue) && (prevState.startValue !== this.state.startValue)) {
            this.setState({
                valueVisual: "Incorrect value"
            }, () => {
                this.saveState();
            });
        } else if ((startValue < 0) && (prevState.startValue !== this.state.startValue)) {
            this.setState({
                valueVisual: "Incorrect value"
            }, () => {
                this.saveState();
            });
        } else if ((startValue < maxValue) && (prevState.startValue !== this.state.startValue)) {
            this.setState({
                valueVisual: this.state.valueVisual
            }, () => {
                this.saveState();
            });

        }

    }


    saveState = () => {

        let stateAsString = JSON.stringify(this.state)
        localStorage.setItem("state", stateAsString);
    }

    restoreState = () => {

        let stateAsString = localStorage.getItem("state")

        let state = JSON.parse(stateAsString)

        this.setState(state);

    }


    counterReset = () => {

        let newValue = this.state.startValue;

        this.setState({
            valueVisual: newValue
        })
    };


    counterInc = () => {
        let newValue = ++this.state.valueVisual;
        if (this.state.valueVisual >= this.state.startValue && this.state.valueVisual <= this.state.maxValue) {
            this.setState({
                valueVisual: newValue
            });
        } else {
            return false;
        }

    }

    setStart = () => {
        if (Number(this.state.startValue) >= 0 && Number(this.state.startValue) < Number(this.state.maxValue)) {
            this.setState({
                valueVisual: this.state.startValue
            }, () => {
                this.saveState();
            })
        }
    }

    setStartValue = (e) => {

        let newStartValue = e.currentTarget.value;
        this.setState({
            startValue: newStartValue
        }, () => {
            this.saveState();
        })

    }


    setMaxValue = (e) => {
        let newMaxValue = e.currentTarget.value;
        this.setState({
            maxValue: newMaxValue
        }, () => {
            this.saveState();
        })
    }


    onFocusActive = () => {

        if (Number(this.state.startValue > 0) || Number(this.state.startValue) < Number(this.state.maxValue)) {
            this.setState({
                valueVisual: "enter values and press 'set'"
            }, () => {
                this.saveState();
            })
        }
    }


    render = () => {


        let inputClass = (e) => {
            if (Number(this.state.startValue) >= 0 && Number(this.state.startValue) < Number(this.state.maxValue) || this.state.startValue === '' || this.state.maxValue === '') {
                return this.state.inputClassGood;
            } else {
                return this.state.inputClassBad;
            }
        }

        return (
            <div className="App">
                <Settings setStartValue={this.setStartValue} setMaxValue={this.setMaxValue} setStart={this.setStart}
                          startValue={this.state.startValue} maxValue={this.state.maxValue}
                          settingButtons={this.state.settingButtons} areaItem={this.state.areaItem}
                          onFocusActive={this.onFocusActive}
                          inputClass={inputClass} valueVisual={this.state.valueVisual}/>
                <Counter counterInc={this.counterInc} counterReset={this.counterReset}
                         counterButtons={this.state.counterButtons} valueVisual={this.state.valueVisual}
                         startValue={this.state.startValue} maxValue={this.state.maxValue}/>
            </div>
        )
    }
}

export default App;