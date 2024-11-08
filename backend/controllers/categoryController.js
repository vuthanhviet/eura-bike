import categoryModel from "../models/categoryModel.js";

//Add category
const addCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const exists = await categoryModel.findOne({ name })
        if(exists){
            return res.json({ success: false, message: "Category already exists" });
        }
        const categoryData = { name }
        console.log(categoryData)
        const newCategory = new categoryModel({ name })
        const category = await newCategory.save();
        res.json({success: true, message:"Category Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})
    }
}
//List Category
const listCategory = async (req, res) => {
    try {
        const categories = await categoryModel.find({});
        res.json({success: true, categories})
    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})
    }
}
//Remove Category
const removeCategory = async (req, res) => {
    try {
        await categoryModel.findByIdAndDelete(req.body.id)
        res.json({success: true, message: "Category Removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})
    }
}

export { addCategory, removeCategory, listCategory }