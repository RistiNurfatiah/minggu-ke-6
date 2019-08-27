const seminar = 'setia budi';

const janjian = kondisi=> new Promise((resolve, reject) => {
    if (kondisi === 'ketiduran') {
        resolve('saya ketiduran lupa mengikuti seminar');
    } else {
        reject('saya ingin mengikuti seminar');
    }
});

janjian(seminar)
    .then(res => console.log(res))
    .catch(err => console.error(err));
