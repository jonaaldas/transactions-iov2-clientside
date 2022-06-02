import axios from 'axios'

export const getTransactionsRequest = async () => {
  return await axios.get('https://transactions-managment.herokuapp.com/transactions', {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  })
}

export const createTransactionsRequest = async (post) => {
  return await axios.post('https://transactions-managment.herokuapp.com/transactions/add/', post,{
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  })
}

export const archiveTransactionRequest = async (id) => {
  return await axios.delete('https://transactions-managment.herokuapp.com/transactions/' + id,{
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  })
}

export const deleteTransactionRequest = async (id) => {
  return await axios.delete('https://transactions-managment.herokuapp.com/transactions/delete/' + id,{
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  })
}

export const getSingleTransactionToEditRequest = async (id) => {
  return await axios.get('https://transactions-managment.herokuapp.com/transactions/edit/' + id,{
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  })
}

export const getSingleTransactionToViewRequest = async (id) => {
  return await axios.get('https://transactions-managment.herokuapp.com/transactions/' + id,{
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  })
}

export const editTransactionRequest = async (id, newFields) => {
  return await axios.put('https://transactions-managment.herokuapp.com/transactions/' + id, newFields,{
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  })
}


export const getAllArchivedTransactionsRequest = async () => {
  return await axios.get('https://transactions-managment.herokuapp.com/transactions/archived',{
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  })
}

export const restoreASingleTransactionRequest = async (id) => {
  return await axios.get('https://transactions-managment.herokuapp.com/transactions/restore/archived/' + id,{
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  })
}