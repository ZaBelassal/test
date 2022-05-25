fetch('https://randomuser.me/api/?results=10')
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data.results);
    })
    .catch(err => console.log(err))