/**
 * GET /
 * New admin homepage
 */
exports.homepage = async (req, res)=>{
    const locals ={
        title : "Dashboard",
        description : "add delete edit update page"
    }

    res.render('index', locals)
}
/**
 * GET /
 * New admin Form
 */
exports.addMobil= async (req, res)=>{
    const locals ={
        title : "Tambah Mobil",
        description : "add page"
    }

    res.render('admin/add', locals)
}
/**
 * POST /
 * post mobil baru
 */

exports.postMobil= async (req, res)=>{

    console.log(req.body)


    const locals ={
        title : "Tambah Mobil",
        description : "add page"
    }

    res.render('admin/add', locals)
}