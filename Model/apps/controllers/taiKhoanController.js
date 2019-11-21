import taiKhoanService from '../services/taiKhoanService';

import Util from '../utils/Utils';

const util = new Util();

class taiKhoanController {
  static async getAllTK(req, res) {
    try {
      const allTK = await taiKhoanService.getAllTaiKhoan();
      if (allTK.length > 0) {
        util.setSuccess(200, 'TK ton tai', allTK);
      } else {
        util.setSuccess(200, 'Tai Khoan found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async DeleteTK (req,res) {
    let { id } = req.params ; 
    if(!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }
    try {
      let XoaTK = await taiKhoanService.deleteTK(id);
      if(XoaTK){
        util.setSuccess(200, 'TK xoa thanh cong')

      }
      else {
        util.setError(400,'Xoa khong thanh cong')
      }
      return util.send(res)
      
    } catch (error) {
      util.setError(400,error)
      return util.send(res)
    }
  }

  
  static async addBook(req, res) {
    if (!req.body.title || !req.body.price || !req.body.description) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newBook = req.body;
    try {
      const createdBook = await BookService.addBook(newBook);
      util.setSuccess(201, 'Book Added!', createdBook);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedBook(req, res) {
    const alteredBook = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateBook = await BookService.updateBook(id, alteredBook);
      if (!updateBook) {
        util.setError(404, `Cannot find book with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Book updated', updateBook);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getABook(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theBook = await BookService.getABook(id);

      if (!theBook) {
        util.setError(404, `Cannot find book with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Book', theBook);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }


}

export default taiKhoanController;