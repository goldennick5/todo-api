const todoModel = require('./todoModel')

class TodoController {

  async createTodo(req, res) {
    try {
      const { title, description } = req.body;
      const todo = await todoModel.create({ title, description });
      res.status(201).json({ todo });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to create todo' });
    }
  };

  async getTodo(req, res) {
    try {
      const todos = await todoModel.findAll();
      res.status(200).json({ todos })
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to get todos' });
    }
  };

  async getOneTodo(req, res) {
    try {
      const { id } = req.params;
      const todo = await todoModel.findOne({ where: { id } });
      res.status(200).json({ todo });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to get todo' });
    }
  };

  async updateOneTodo(req, res) {
    try {
      const { id } = req.params;
      const { title, description } = req.body;
      const updateTodo = await todoModel.update({ title, description }, { where: { id } });
      res.status(200).json({ message: `updated todo number ${updateTodo}` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to update todo' });
    }
  }

  async deleteTodo(req, res) {
    try {
      const { id } = req.params;
      const deleteTodo = await todoModel.destroy({ where: { id } });
      res.status(200).json({ message: "deleted todo with id: " + deleteTodo });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to delete todo' });
    }
  };
}

module.exports = new TodoController()