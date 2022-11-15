const express = require("express");
const router = require("express").Router();
const API = require("../controllers/api");
const multer = require("multer");

//multer middleware
let storage = multer.diskStorage({
    destination: function (req, file,cb) {
        cb(null, "uploads");
    },
    filename: function (req, file,cb) {
        cb(null,file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
});

let upload = multer({
    storage: storage,
}).single("image")

router.get("/", API.fetchAllBlog);
router.get("/:id",API.fetchBlogByID);
router.post("/", upload, API.createBlog);
router.patch("/:id",upload, API.updateBlog);
router.delete("/:id",API.deleteBlog);
module.exports = router;