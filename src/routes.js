const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteNBookByIdHandler
} = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addBookHandler
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllBooksHandler
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getBookByIdHandler
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editBookByIdHandler
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNBookByIdHandler
  }
]

module.exports = routes
