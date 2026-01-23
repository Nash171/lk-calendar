import moment from 'moment';
import { holidays } from './holidays.js';

var today = moment();
var display_month = today.clone().startOf('month');

export function updateToday() {
    today = moment();
}

export function nextYear() {
    display_month.add(1, 'years');
}

export function prevYear() {
    display_month.subtract(1, 'years');
}

export function nextMonth() {
    display_month.add(1, 'months');
}

export function prevMonth() {
    display_month.subtract(1, 'months');
}

export function getYear() {
	return display_month.format("YYYY");
}

export function getMonth() {
	return display_month.format("MMMM");
}

export function getDays(year, month) {
    
    var days_cur_month = display_month.daysInMonth();
    var days_last_month = (display_month.day()+6)%7||7;
     
    var datei = display_month.clone().subtract(days_last_month, 'days');
    
    var days = [];
    
    for (var di = 0; di < 42; di++) {
        days.push({
            date: datei.date(),
            today: today.isSame(datei, 'day'),
            cur_month: di>=days_last_month&&(di<days_last_month+days_cur_month),
            holiday: holidays[datei.format('YYMMDD')]||[]
        });
        datei.add(1, 'days');
        console.log(days[di]);
    }

    return days;
}

export function getWallpaperImage() {
    // Rotate through 3 wallpaper images based on day of month
    const day = today.date();
    const imageNumber = (day % 3) + 1;
    return `../images/wallpaper/${imageNumber}.png`;
}