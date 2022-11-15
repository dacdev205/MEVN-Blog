const Blog = require("../models/blogs");
const fs = require("fs");
module.exports = class API {
    //fetch all blogs
    static async fetchAllBlog(req, res) {
        try {
            const blogs = await Blog.find();
            res.status(200).json(blogs);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }

    //fetch blog by id
    static async fetchBlogByID(req, res) {
        const id = req.params.id;
        try {
            const blog = await Blog.findById(id);
            res.status(200).json(blog);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
}

    
    //fetch blog by id
    static async createBlog(req, res) {
        const blog = req.body;
        const imagename =req.file.filename;
        blog.image = imagename;
        try {
            await Blog.create(blog);
            res.status(201).json({message: "Blog created successfully"});
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    }

    //update blog
    static async updateBlog(req, res) {
        const id = req.params.id;
        let new_image = "";
        if(req.file) {
            new_image = req.file.filename;
            try {
                fs.unlinkSync("./uploads/" + req.body.old_image);
            } catch (err) {
                console.log(err);
            }
        } else {
            new_image = req.body.old_image;
        }
        const newBlog = req.body;
        newBlog.image = new_image;

        try {
            await Blog.findByIdAndUpdate(id, newBlog);
            res.status(200).json({message: "Blog updated successfully"});
        } catch (err) {
            res.status(404).json({message: err.message});
        }
    }

    //delete blog
    static async deleteBlog(req, res) {
        const id = req.params.id;
        try {
            const result = await Blog.findByIdAndDelete(id);
            if(result.image !="") {
                try {
                    fs.unlinkSync("./uploads/" + result.image);
                } catch (err) {
                    console.log(err)
                }
            }
            res.status(200).json({message: "Blog deteted succesfully"});
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }
}