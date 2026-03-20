export function* DayGenerator() {
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

export function runWithTimeout(iterator, seconds) {
    const end = Date.now() + seconds * 1000;
  while (Date.now() < end) {
    console.log(iterator.next().value);
    }
    console.log("Stop");
}
