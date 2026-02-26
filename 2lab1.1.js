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