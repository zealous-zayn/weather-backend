const fetchData = () => new Promise((resolve, reject) => {
  fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then(response => resolve(response)).catch((err)=>reject(err))
});

export default fetchData;