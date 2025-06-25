const alunos = require('../database/alunos.json');

function listarAlunos() {
  return alunos;
}

module.exports = {
  listarAlunos
};
