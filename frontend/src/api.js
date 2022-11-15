import axios from "axios";
const url = "/api/blog"

export default class API {
    static async getAllBlog(){
        const res = await axios.get(url);
        return res.data;
    }
    static async getBlogById(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }

    static async addBlog(blog){
        const res = await axios.post(url, blog);
        return res.data;
    }

    static async updateBlog(id,blog){
        const res = await axios.patch(`${url}/${id}`, blog);
        return res.data;
    }
    static async deleteBLog(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}