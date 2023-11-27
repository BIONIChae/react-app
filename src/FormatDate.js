export default function FormatDate(props) {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    const day = daysOfWeek[props.date.getDay()];
    const date = props.date.getDate();
    let hours = props.date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    return `${day} ${date}, ${hours}:${minutes}`;
  }
