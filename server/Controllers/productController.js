


const addProduct = async (req, res)=>{
    let info = {
        nama: req.body.nama,
        sewa: req.body.sewa,
        ukuran: req.body.ukuran,
        foto: req.body.foto,    
        published : req.body.published ? req.body.published: false

    }

    const product = await Product.create(info);
    res.status(200).send(product);
    console.log(product);
}

const getAllProduct = async (req, res)=>{
    let products = await Product.findAll({
    })
    res.send(products)
}
const getOneProduct = async (req, res)=>{
    let id = req.params.id
    let products = await Product.findOne({where: {id:id}});
    res.status(200).send(products)
}
const updateProduct = async (req, res)=>{
    let id = req.params.id
    const product = await Product.update(req.body, {where : {id:id}})
    
    res.status(200).send(product);
}

const deleteProduct = async (req, res)=>{
    let id = req.params.id
    await Product.destroy({where : {id:id}});


    res.status(200).redirect('/');
}

const getPublishedProduct = async (req , res) =>{
    const products = await Product.findAll({where : {published:true}})

    res.status(200).send(products);
}

module.exports={
    addProduct, 
    getAllProduct,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct
}