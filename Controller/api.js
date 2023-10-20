const db = require('../Database/schema');

const createBook = async (req, res)=>{
    try{

        const { title, author } = req.body;

        if(!(title || author)){
            res.status(200).send('Both titile and author is required');
        }
        
        const existingBook = await db.findOne({title: title})
        if(existingBook){
           return  res.status(200).send('Book already exists');
        }

        const data = await db.create({
            title,
            author
        })

        data.save();

        res.status(200).json(data)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'})
    }
}


const getBookById = async( req, res)=>{
   try{
     const { id } = req.params;

    if(!id){
        return res.status(200).send('id is require filed');
    }

    const data = await db.findById({_id:id})

    if(!data){
        return res.status(400).send('Book id is not correct')
    }

    res.status(200).send(data)
}
catch(err){
    console.log(err);
    res.status(500).send('Internal server error')
}

}


const getAllBook = async (req, res) => {
    try {
        const data = await db.find();
        res.status(200).json(data); // Send the data as a JSON response
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error'); // Corrected typo: "seerver" to "server"
    }
};


const updateBook = async( req, res)=>{
    try{

        const { id }= req.params;

        if(!id){
            return res.status(200).send('Book id is required');
        }

        const updateData = req.body;

        const data = await db.findByIdAndUpdate(id, updateData, { new: true });

        if(!data){
            return res.status(400).send('ID is  not found');
        }

       

    
        res.status(200).send(data)

    }catch(err){
        console.log(err);
        res.status(500).send('Internal server error')
    }
}



const deleteBook =async( req, res)=>{

    try{

        const { id } =req.params;

        if(!id){
           return res.status(200).send('Id is required')
        }

        const data = await db.findByIdAndDelete({_id: id})

        if(!data){
            return res.status(200).send('Id not found')
        }

        res.status(200).send('Successfully delete')
    }catch(err){
        console.log(err);
        res.status(500).send("Internal server error")
    }
}



module.exports= {
    createBook,
    getAllBook,
    getBookById,
    updateBook,
    deleteBook
}