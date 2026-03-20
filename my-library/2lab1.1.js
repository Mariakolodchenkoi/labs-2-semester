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

