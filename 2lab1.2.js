function* DayGenerator() {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let i = 0;

    while (true) {
        if (i>= days.length) {
            i = 0;
        }
        yield days[i];
        i++;
    }
}

const days = DayGenerator();

for (let i = 0; i < 28; i++) {
console.log(days.next().value);
}
function runWithTimeout(iterator, seconds) {
    const end = Date.now() + seconds * 1000;
  while (Date.now() < end) {
    console.log(iterator.next().value);
    }
    console.log("Stop");
}

const seconds = 5; 
runWithTimeout(DayGenerator(), seconds);