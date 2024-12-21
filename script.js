fetch('hh13cx1tqhn569sspe88v2ajkw987uyc@hook.us2.make.com', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: "Alex Seisler",
        email: "aseisler7045@stevenscolege.edu",
        message: "Puzzle 80"
    }),
})
.then(response => console.log('Success:', response.status))
.catch(error => console.error('Error:', error));