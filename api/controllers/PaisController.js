import PaisService from './PaisService.js';

class PaisController {
  static async adicionar(req, res) {
    const {
      nome,
    } = req.body;
    try {
      const novoPais = await new PaisService(nome).adicionar();
      
      res.status(201).json({
        mensagem: 'Pais adicinado com sucesso',
        dados: novoPais,
      })
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
      })
    }
  }

  static async exibirTodos(req, res) {
    const pagina = req.query.pagina || 1;
    const limite = req.query.limite || 10;
    try {
      const paises = await new PaisService().exibirTodos({
        pagina,
        limite,
      });
      
      res.status(200).json(paises);
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
      })
    }
  }

  static async exibirUm(req, res) {
    const { id } = req.params;
    try {
      const pais = await new PaisService().exibirUm({
        id,
      });
      
      res.status(200).json(pais)
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
      })
    }
  }

  static async atualizar(req, res) {
    const {
      nome,
    } = req.body;
    const { id } = req.params;
    try {

      
      res.status(200).json({
        mensagem: '',
      })
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
      })
    }
  }

  static async deletar(req, res) {
    const { id } = req.params;
    try {
      res.status(200).json({
        mensagem: '',
      })
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
      })
    }
  }
}

export default PaisController;