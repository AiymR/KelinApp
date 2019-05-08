
export const getUsers = () => (
  fetch(
    'http://localhost:3001/api/users/',
    {
      method: 'GET',
      mode: 'cors',
    }
  )
)
export const getProfile = (data) => (
  fetch(
    `http://localhost:3001/api/profile/${data}/`,
    {
      method: 'GET',
      mode: 'cors',
    }
  )
)
export const createUser = (data) => (
  fetch(
    'https://jsonplaceholder.typicode.com/posts',
    {
      method: 'POST',
      body: JSON.stringify({
        title: data.title,
        body: data.body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8;"
      }
    }
  )
)
