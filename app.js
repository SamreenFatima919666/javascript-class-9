// let num=prompt("enter any number")
// console.log(num+=4)
// console.log(num-=4)
// console.log(num*=4)
// console.log(num/=4)
// console.log(num%=4)
// console.log(num)


// var date=new Date();
// // console.log(date.toLocaleTimeString())
// console.log(date.toLocaleDateString())

// let dayname=['sunday','monday' ,'tuesday' , 'wednesday' ,'thursday' ,'friday' ,'saturday']
// let dayvalue=new Date().getDate()

// console.log(dayname(dayvalue))


// console.log(date.toLocaleDateString());
//toLocaleTimeString() => time
// toLocaleDateString() => date
// toLocaleString() => date and time
// getDay() => current day but in range format 0-6 , 0 means sunday

let currentDate = new Date();
// console.log(currentDate);

// console.log('Current Day: '+currentDate.getDay());//0-6 0-sun
// console.log('Current Month: '+currentDate.getMonth());//0-11 0-jan
// console.log('Current Date: '+currentDate.getDate());//1-31
// console.log('Current Year: '+currentDate.getFullYear());//no range 
// console.log('Current Hour: '+currentDate.getHours());//0-23 0-12:am 23-11:pm
// console.log('Current Mins: '+currentDate.getMinutes());//0-59 0- 1 min
// console.log('Current Secs: '+currentDate.getSeconds());//0-59 0-1sec
// console.log('Current MilliSecs: '+currentDate.getMilliseconds());//0-999 1 sec = 1000millisec
// console.log(currentDate.getTime());
// console.log(currentDate.getTimezoneOffset());//timezone offset

document.writeln(currentDate);
document.writeln('Current Day: '+currentDate.getDay());//0-6 0-sun
document.writeln('Current Month: '+currentDate.getMonth());//0-11 0-jan
document.writeln('Current Date: '+currentDate.getDate());//1-31
document.writeln('Current Year: '+currentDate.getFullYear());//no range 
document.writeln('Current Hour: '+currentDate.getHours());//0-23 0-12:am 23-11:pm
document.writeln('Current Mins: '+currentDate.getMinutes());//0-59 0- 1 min
document.writeln('Current Secs: '+currentDate.getSeconds());//0-59 0-1sec
document.writeln('Current MilliSecs: '+currentDate.getMilliseconds());//0-999 1 sec = 1000millisec
document.writeln(currentDate.getTime());
document.writeln(currentDate.getTimezoneOffset());//timezone offset
