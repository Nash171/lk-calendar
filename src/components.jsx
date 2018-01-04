import React from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';
import { HOLIDAY_TYPE } from './holidays.js';

export class Days extends React.Component {
    
    render() {

		var days = this.props.days.map( (day, i) => {

			var className = classNames({
				'day-block': true,
				'today': day.today,
				'cur-month': day.cur_month,
				'sunday': i%7==6,
				'saturday': i%7==5
			});

			return <Day key={i.toString()} className={className} date={day.date} holidays={day.holiday}/>;
		});

        return (
        	<div className='days-container'>					
				{days}
			</div>
        );
	}
	
}

function Day(props){

	var holidays = props.holidays.map( (holiday, i) => {

		var className = classNames({
			'holiday': true,
			'poya': holiday.type == HOLIDAY_TYPE.POYA,
			'pubbankmerc': holiday.type == HOLIDAY_TYPE.PUBBANKMERC,
			'pubbank': holiday.type == HOLIDAY_TYPE.PUBBANK,
			'bank': holiday.type == HOLIDAY_TYPE.BANK
		});

		return (
        	<div key={i} className={className} title={holiday.desc}></div>
        );
	})

	return (
		<div className='day-block-container'>
            <div className={props.className}>
            	{props.date}
				{holidays.length ? <div className='holidays'>{holidays}</div> : null}
        	</div>
        </div>
	);
}

export class DayNames extends React.Component {
    
    render() {

		var daynames = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((dayname, i)=>{
			
			var className = classNames({
				'day-name': true,
				'sunday': i==6,
				'saturday': i==5
			});
			
			return <DayName key={i.toString()} dayname={dayname} className={className}/>;
		});

        return (
        	<div className='day-names'>
				{daynames}
			</div>
        );
    }
}

function DayName(props){
	return (
		<div className={props.className}>
            {props.dayname}
        </div>
	);
}

export class CalendarHeader extends React.Component {
    
	constructor(props) {
		super(props);
		
		this.nextYear = this.nextYear.bind(this);
		this.prevYear = this.prevYear.bind(this);
		this.nextMonth = this.nextMonth.bind(this);
		this.prevMonth = this.prevMonth.bind(this);
	}
	
	nextYear() {
		this.props.nextYear();
	}

	prevYear() {
		this.props.prevYear();
	}

	nextMonth() {
		this.props.nextMonth();
	}

	prevMonth() {
		this.props.prevMonth();
	}
	
	render() {
        return (
        	<div className='calendar-header'>
				<div className='year'>{this.props.year}</div>
				<div className='control-btns'>
					<div className='control-btn up-btn icon-up-dir' onClick={this.nextYear}></div>
					<div className='control-btn down-btn icon-down-dir' onClick={this.prevYear}></div>
				</div>
				<div className='month'>{this.props.month}</div>
				<div className='control-btns'>
					<div className='control-btn up-btn icon-up-dir' onClick={this.nextMonth}></div>
					<div className='control-btn down-btn icon-down-dir' onClick={this.prevMonth}></div>
				</div>
			</div>
        );
    }
}

export class CalendarFooter extends React.Component {
    
    render() {
        return (
        	<div className='calendar-footer'>
				<div className='ref'><div className='icon poya'></div>Poyaday</div>
				<div className='ref'><div className='icon pubbankmerc'></div>Public, Bank, Merchantile</div>
				<div className='ref'><div className='icon pubbank'></div>Public, Bank</div>
				<div className='ref'><div className='icon bank'></div>Bank</div>
				<a className='like-us icon-facebook-rect' href="https://www.facebook.com/lkcalendar" target="_blank">
            	</a>
			</div>
        );
    }
}

