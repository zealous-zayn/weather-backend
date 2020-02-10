const fetchData = (zipCode) => new Promise((resolve, reject) => {
  fetch(`http://localhost:3003/?zipCode=${zipCode}`)
    .then(res => res.json())
    .then(response => resolve(response)).catch((err)=>reject(err))
});

export default fetchData;