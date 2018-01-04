import React from 'react';
import { render } from 'react-dom';
import { CalendarHeader, DayNames, Days, CalendarFooter } from './components.jsx';
import * as util from './util.js';

class App extends React.Component {
    
	constructor(props) {
    	super(props);

    	this.state = {
    		year: util.getYear(),
    		month: util.getMonth(),
    		days: util.getDays()
    	};

    	setInterval(() => {
			util.updateToday();
			this.setData();
		}, 60000);
		
		this.nextYear = this.nextYear.bind(this);
		this.prevYear = this.prevYear.bind(this);
		this.nextMonth = this.nextMonth.bind(this);
		this.prevMonth = this.prevMonth.bind(this);
	}
	  
  	setData() {
  		this.setState({
			year: util.getYear(),
    		month: util.getMonth(),
    		days: util.getDays()
  		});
	}
	  
	nextYear() {
		util.nextYear();
		this.setData();
	}

	prevYear() {
		util.prevYear();
		this.setData();
	}

	nextMonth() {
		util.nextMonth();
		this.setData();
	}

	prevMonth() {
		util.prevMonth();
		this.setData();
	}

    render() {
        return (
        	<div className='calendar-container'>
        		<div className='wallpaper-window'></div>

				<CalendarHeader year={this.state.year} nextYear={this.nextYear} prevYear={this.prevYear} month={this.state.month} nextMonth={this.nextMonth}  prevMonth={this.prevMonth}/>
				<DayNames />	
				<Days date={this.state.date} days={this.state.days}/>
				<CalendarFooter />
        	</div>
        );
    }
}

render( <App/> , document.getElementById('app'));