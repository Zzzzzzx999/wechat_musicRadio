const db = require("../db/index")

// 这是获取文章分类列表数据的路由
exports.getArticleCates=(req,res)=>{
    // is_delete=0 表示没有被标记为 删除 的数据
    const sqlStr = `select * from ev_article_cate where is_delete=0 order by id asc`
    db.query(sqlStr,(err,results)=>{
        if(err) return res.cc(err)
        res.send({
            status:0,
            message:'获取文章分类数据成功',
            data:results
        })
    })
}

exports.addArticleCates= (req,res)=>{
    // res.send('ok')
    const sql = 'select * from ev_article_cate where name=? or alias=?'
    db.query(sql,[req.body.name,req.body.alias],(err,results)=>{
        if(err) return res.cc(err)
        if(results.length == 2) return res.cc('分类名称与别名被占用且不在同一行，请更换后重试！')
        if(results.length == 1 && results[0].name == req.body.name && results[0].alias == req.body.alias) return res.cc('分类名称与别名都被占用，请更换后重试！')
        if(results.length == 1 && results[0].name == req.body.name) return res.cc('分类名称被占用，请更换后重试！')
        if(results.length == 1 && results[0].alias == req.body.alias) return res.cc('分类别名被占用，请更换后重试！')
        
        const sqlStr = `insert into ev_article_cate set ?`
        db.query(sqlStr,[req.body],(err,results)=>{
            if(err) return res.cc(err)
            if(results.affectedRows !== 1) return res.cc('新增文章分类失败！')
            res.cc('新增文章分类成功！',0) 
        })
    })
}

exports.deleteCateById = (req,res)=>{
    const sqlStr = 'update ev_article_cate set is_delete=1 where id=?'
    db.query(sqlStr,[req.params.id],(err,results)=>{
        if(err) return res.cc(err)
        if(results.affectedRows !== 1) return res.cc('删除文章分类失败！')
        res.cc('删除文章分类成功！',0)
    })
}

exports.getArtCateById = (req,res)=>{
    const sqlStr = 'select * from ev_article_cate where id=?'
    db.query(sqlStr,[req.params.id],(err,results)=>{
        if(err) return res.cc(err)
        if(results.length !== 1) res.cc('获取文章分类数据失败！')
        res.send({
            status:0,
            message:'获取文章分类数据成功！',
            data:results[0],
        })
    })
}

exports.updateCateById = (req,res)=>{
    const sqlStr = 'select * from ev_article_cate where Id<>? and (name=? or alias=?)'
    db.query(sqlStr,[req.body.Id,req.body.name,req.body.alias],(err,results)=>{
        if(err) res.cc(err)
        if(results.length == 2) res.cc('分类名称与别名被占用,请更换后重试！')
        if(results.length == 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) res.cc('分类名称与别名被占用,请更换后重试！')
        if(results.length == 1 && results[0].name === req.body.name) res.cc('分类名称被占用,请更换后重试！')
        if(results.length == 1 && results[0].alias === req.body.alias) res.cc('分类别名被占用,请更换后重试！')
        const sql = 'update ev_article_cate set ? where id=?'
        db.query(sql,[req.body,req.body.Id],(err,results)=>{
            if(err) return res.cc(err)
            if(results.affectedRows !== 1) return res.cc('更新文章分类数据失败！')
            res.cc('更新文章分类数据成功！')
        })
    })
}