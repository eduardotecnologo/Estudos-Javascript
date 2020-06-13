/*
  0 Obter um usuário
  1 Obter o numero de telefone de usuário a partir de seu ID
  2 Obter o endereço do usuário pelo ID
*/

function getUser(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      nome: 'Eduardo',
      dateNsc: new Date()
    })
  }, 1000)

}
function getPhone(idUser) {
  setTimeout(() => {
    return {
      phone: '987024149',
      ddd: 32
    }
  })
}
function getAddres(idUser) {

}

function resolveUser(erro, user) {
  console.log('user', user);
}
getUser(resolveUser);
// const phone = getPhone(user.id);


// console.log('phone', phone);