const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../database/alunos.json');


function readData() {
  if (!fs.existsSync(dataPath)) return [];
  const data = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(data || '[]');
}


function saveData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}


router.get('/', (req, res) => {
  const alunos = readData();
  res.json(alunos);
});


router.post('/', (req, res) => {
  const alunos = readData();
  const novoAluno = {
    id: Date.now().toString(),
    nome: req.body.nome,
    curso: req.body.curso,
    ira: parseFloat(req.body.ira),
  };
  alunos.push(novoAluno);
  saveData(alunos);
  res.status(201).json(novoAluno);
});


router.put('/:id', (req, res) => {
  const alunos = readData();
  const index = alunos.findIndex(a => a.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Aluno não encontrado.' });

  alunos[index].nome = req.body.nome;
  alunos[index].curso = req.body.curso;
  alunos[index].ira = parseFloat(req.body.ira);
  saveData(alunos);
  res.json(alunos[index]);
});


router.delete('/:id', (req, res) => {
  let alunos = readData();
  alunos = alunos.filter(a => a.id !== req.params.id);
  saveData(alunos);
  res.json({ message: 'Aluno removido com sucesso.' });
});

module.exports = router;
