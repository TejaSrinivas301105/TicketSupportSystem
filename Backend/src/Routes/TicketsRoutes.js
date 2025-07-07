import express from 'express';
import { deleteData, getdata, getdatabyid, postData, putData,StatusUpdate } from '../controlles/Queries.js';

const router = express.Router();

router.get('/',getdata);
router.get('/:id',getdatabyid)
router.post('/',postData)
router.put('/:id',putData)
router.delete('/:id',deleteData)
router.put('/:id/status', StatusUpdate);


export default router;