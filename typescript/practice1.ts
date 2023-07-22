interface Person {
    name: string;
    age: number;
    gender: 'F' | 'M';
    job?: string;
}

const person1: Person = {
    name: '강민지',
    age: 17,
    gender: 'F',
    job: 'student',
};

const personPrint = ({ name, age, gender, job }: Person) => {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Gender: ${gender}`);
    if (job) {
        console.log(`Job: ${job}`);
    }
};

personPrint(person1);
