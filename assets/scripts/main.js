import $ from 'jquery';
import {date, hello} from './utilities';

hello('RRRhody');

console.info(`The current date is ${date()}`);
console.info(`The current time is ${date('time')}`);
console.info(`The current date and time is ${date('full')}`);
