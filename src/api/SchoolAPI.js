const addNew = (target, object) => {
  const url = `https://cors-anywhere.herokuapp.com/https://demaira-dance-api.herokuapp.com/${target}/`
  console.log(url)
  return fetch((url), {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(object)
  })
}

const fetchObjects = (target, objectId='') => {
  const url = `https://cors-anywhere.herokuapp.com/https://demaira-dance-api.herokuapp.com/${target}/${objectId}`
  return fetch(url)
    .then((response) => {return response.json()})
}

const editObject = (target, objectId, object) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://demaira-dance-api.herokuapp.com/${target}/${objectId}/`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: "PATCH",
    body: JSON.stringify(object)
  })
}

const deleteObject = (target, objectId) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://demaira-dance-api.herokuapp.com/${target}/${objectId}/`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
    body: JSON.stringify(objectId)
  })
}

export default {
  addNew: addNew,
  fetchObjects: fetchObjects,
  editObject: editObject,
  deleteObject: deleteObject
}