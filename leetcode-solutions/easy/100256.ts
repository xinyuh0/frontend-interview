function findLatestTime(s: string): string {
  let hour = s.slice(0, 2);
  let minute = s.slice(3);

  if (minute[0] === "?") {
    minute = "5" + minute[1];
  }

  if (minute[1] === "?") {
    minute = minute[0] + "9";
  }

  if (hour[0] === "?") {
    hour = (Number(hour[1].replace("?", "0")) <= 1 ? "1" : "0") + hour[1];
  }

  if (hour[1] === "?") {
    hour = hour[0] + (hour[0] === "0" ? "9" : "1");
  }

  return hour + ":" + minute;
}

console.log(findLatestTime("??:?0"));
