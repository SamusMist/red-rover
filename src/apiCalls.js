const fetchData = {
  getData(url : string) {
    return fetch(url)
      .then(response => {
        if(!response.ok) {
          throw new Error("error")
        } else {
          return response.json()
        }
      })
  }
}

export default fetchData;
