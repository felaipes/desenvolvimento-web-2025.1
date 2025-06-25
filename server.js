const express = require('express');
const path = require('path');
const app = express();


app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));


const alunoRoutes = require('./routes/alunoRoutes');
app.use('/api/alunos', alunoRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
