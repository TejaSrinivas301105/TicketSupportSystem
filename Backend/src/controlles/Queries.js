import  Queries from '../models/Customer_Query_Schema.js';
export async function getdata(req,res){
    try{
        const Query = await Queries.find();
        res.status(200).json(Query)
    }catch(error){
        console.log('Error while getting data',error);
        res.status(500).json({message:'Error while Fetching!'})
    }
}

export async function getdatabyid(req,res){
    const {id} = req.params;
    try{
        const Query = await Queries.findById(id);
        res.status(200).json(Query)
    }catch(error){
        console.log('Error while getting data',error);
        res.status(500).json({message:'Error while Fetching!'})
    }
}



export async function postData(req,res){
    try{
        const {Name,email,subject,priority,category,description} = req.body;
        const NewQuery = new Queries({Name,email,subject,priority,category,description});
        await NewQuery.save();
        res.status(201).json("Create Query Successfully!")
    }
    catch(error){
        console.log('Error while creating the content',error);
        res.status(500).json({message:'Internal server error'})
    }
    
}

export async function putData(req,res){
    try{
        const {Name,email,subject,priority,category,description} = req.body;
        const update = await Queries.findByIdAndUpdate(req.params.id,{Name,email,subject,priority,category,description})
        if(!update) return res.status(404).json("404 error Not found");
        res.status(200).json("Query updated Successfully!")
    }catch(error){
        console.log('Error while updating the content',error);
        res.status(500).json({message:'Internal server error'})
    }
}

export async function deleteData(req, res) {
    try {
        const { id } = req.params;
        const deleteQuery = await Queries.findByIdAndDelete(id);
        if (!deleteQuery) {
            return res.status(404).json("404 error Not found");
        }
        res.status(200).json("Query Deleted Successfully!");
    } catch (error) {
        console.log("Error while Deleting the content", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const StatusUpdate = async (req, res) => {
    try {
        const ticket = await Queries.findByIdAndUpdate(
        req.params.id,
        { status: req.body.status },
        { new: true, runValidators: true }
        );

        if (!ticket) return res.status(404).json({ error: 'Ticket not found' });

        res.json(ticket);
    } catch (err) {
        console.error("Error updating ticket status:", err);
        res.status(500).json({ error: "Failed to update ticket" });
    }
};
