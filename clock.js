// JavaScript Document
const data = {
  year: 0,
  month: 0,
  day: 0,
  weekday: '',
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
  timeZoneOffset: '',  
  updateTime: function() {
    const now = new Date();
    this.year = now.getFullYear();
    this.month = now.getMonth() + 1; 
    this.day = now.getDate();
    this.weekday = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][now.getDay()]; 
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
    this.milliseconds = now.getMilliseconds(); 
    const offset = now.getTimezoneOffset();  
    const sign = offset > 0 ? "-" : "+";  
    const hours = Math.floor(Math.abs(offset) / 60);  
    const minutes = Math.abs(offset) % 60;  

    this.timeZoneOffset = `UTC${sign}${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  },
  formatTime: function() {
    let timeString = `${this.year}年${this.month < 10 ? '0' + this.month : this.month}月${this.day < 10 ? '0' + this.day : this.day}日 ` +
           `${this.weekday} ` +
           `${this.hours < 10 ? '0' + this.hours : this.hours}:${this.minutes < 10 ? '0' + this.minutes : this.minutes}:${this.seconds < 10 ? '0' + this.seconds : this.seconds} `;
        
    if (this.minutes == 20) {
      timeString += "\n站起来活动一下吧！";
    }    if (this.minutes == 50) {
      timeString += "\n站起来活动一下吧！";
    }

    return timeString;
  }
};
function updateClock() {
  data.updateTime(); 
  document.getElementById('clock').textContent = data.formatTime(); 
}
updateClock();
setInterval(updateClock, 1); 
