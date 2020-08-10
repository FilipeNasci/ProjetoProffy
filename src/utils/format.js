const subjects = [
    'Artes',
    'Biologia',
    'Ciências',
    'Educação física',
    'Física',
    'Geografia',
    'História',
    'Matemática',
    'Português',
    'Química'
];
const weekdays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
];

function convertHourToMinutes(time) {
    const [hour, minutes] = time.split(':');
    return Number((hour * 60) + minutes);
}

function getSubject(subjectNumber) {
    return subjects[+subjectNumber - 1];
}

module.exports = { subjects, weekdays, getSubject, convertHourToMinutes }