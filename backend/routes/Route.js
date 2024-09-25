const {Router}=require('express');
const {alltodoTasks,saveTasks,updateTasks,deleteTasks, getalltodoTasks}=require("../controllers/Controllers")

const router=Router();

router.get('/get',getalltodoTasks);
router.post('/save',saveTasks);
router.put('/update/:id',updateTasks);
router.delete('/delete/:id',deleteTasks);

module.exports=router;
