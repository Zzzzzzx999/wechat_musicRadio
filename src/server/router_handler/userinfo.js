const db = require('../db/index.js')
// 导入处理密码的模块
const bcrypt = require('bcryptjs')

// 获取用户基本信息的处理函数
exports.getUserInfo = (req,res)=>{
    // const sqlStr = 'select id,username,nickname,email,user_pic from ev_users where id=?'
    const sqlStr = 'select * from rewards'
    db.query(sqlStr,(err,results)=>{
        if(err) return res.cc(err)
        // if(results.length !== 1) return res.cc('获取用户信息失败！')
        res.send({
            status:0,
            message:'获取用户信息成功！',
            data:results
        })
    })
}
// 更新用户基本信息的处理函数
exports.updateUserInfo = (req,res)=>{
    // 定义待执行的 SQL 语句
    const sqlStr = 'update ev_users set ? where id=?'
    db.query(sqlStr,[req.body,req.body.id],(err,results)=>{
        if(err) return res.cc(err)
        if(results.affectedRows !== 1) return res.cc('更新用户的基本信息失败!')
        res.cc('更新用户信息成功',0)
    })
}
// 更新用户密码的处理函数
exports.updatePassword = (req,res)=>{
    // 根据 id 查询用户的信息
    const sqlStr = 'select * from ev_users where id = ?'
    db.query(sqlStr,req.user.id,(err,results)=>{
        if(err) return res.cc(err)
        if(results.length !== 1 ) return res.cc('用户不存在！')
        // 判断密码是否正确
        const compareResult = bcrypt.compareSync(req.body.oldPwd,results[0].password)
        if(!compareResult) return res.cc('旧密码错误')

        const sql = 'update ev_users set password=? where id=?'
        const newPwd = bcrypt.hashSync(req.body.newPwd,10)
        db.query(sql,[newPwd,req.user.id],(err,results)=>{
            if(err) return res.cc(err)
            if(results.affectedRows !== 1) return res.cc('更新密码失败！')
            res.cc('更新密码成功！',0)
        })
    })
}
// 更新用户头像的处理函数
exports.updateAvatar = (req,res)=>{
    const sqlStr = 'update ev_users set user_pic=? where id=?'
    db.query(sqlStr,[req.body.avatar,req.user.id],(err,results)=>{
        if(err) return res.cc(err)
        if(results.affectedRows !== 1) return res.cc('更新用户头像失败！')
        res.cc('更新用户头像成功',0)
    })
}