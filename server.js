import express, { request, response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient() 

const app = express()

app.use(express.json())

app.listen(3000)


app.get('/users', async (req, res) => {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuários!!!' });
    }
  });
  

app.post('/users', async (req, res) => {
    const { name, age, email } = req.body;
    if (!name || !age || !email) {
      return res.status(400).json({ error: 'Dados incompletos!!!' });
    }
    
    try {
      const user = await prisma.user.create({ data: { name, age, email } });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar usuário!!!' });
    }
});
  

app.put('/users/:id', async (req, res) => {
    try {
      const user = await prisma.user.update({
        where: { id: req.params.id },
        data: req.body
      });
      res.status(200).json({message: "Usuário atualizado, verifique no banco de dados!"});
    } catch (error) {
      res.status(404).json({ error: 'Usuário não encontrado para atualizar!' });
    }
  });  

app.delete('/users/:id', async (req, res) => {
    try {
      const user = await prisma.user.delete({
        where: { id: req.params.id }
      });
      res.status(200).json({message: "Usuário excluído, verifique no banco de dados!"});
    } catch (error) {
      res.status(404).json({ error: 'Usuário não encontrado para excluir!' });
    }
});  
