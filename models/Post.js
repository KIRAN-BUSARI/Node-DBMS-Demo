const pool = require("../config/db.js");
class Post {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }

    async save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;
        let sql = `INSERT INTO posts(title, body, created_at) VALUES ('${this.title}','${this.body}','${createdAtDate}')`;

        const [newPost, _] = await pool.execute(sql);

        return newPost;
    }

    static findAll() {
        let sql = "SELECT * FROM posts;";
        return pool.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM posts WHERE id = ${id}; `;
        return pool.execute(sql);
    }
}

module.exports = Post;