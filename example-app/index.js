import { DayGenerator, runWithTimeout} from 'my-library';


const days = DayGenerator();
for (let i = 0; i < 28; i++) {
    console.log(days.next().value);
}

const seconds = 3;
runWithTimeout(DayGenerator(), seconds);