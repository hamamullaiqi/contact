const { contact } = require("../../models")
const path = require("path")
const fs = require("fs")



exports.getContacts = async (req, res) => {
    try {
        let dataContacts = await contact.findAll({
            attributes : {
                exclude : ["createdAt", "updatedAt"]
            }
        })

        dataContacts = JSON.parse(JSON.stringify(dataContacts))

        dataContacts = dataContacts.map((item) => {
            return {...item, image: process.env.FILE_PATH + item.image }
        })



        res.send({
            status: "success get All Contact",
            data: {
                dataContacts
            }
        })

        
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
        
    }
}

exports.getContact = async (req, res) => {
    try {

        const { id } = req.params
        let dataContact = await contact.findOne({
            where: {
                id
            },
            attributes : {
                exclude : ["createdAt", "updatedAt"]
            }
        })

        dataContact = JSON.parse(JSON.stringify(dataContact))

        dataContact = {
            ...dataContact,
            image: process.env.FILE_PATH + dataContact.image 
        }
        



        res.send({
            status: `success get by id :${id}`,
            data: {
                dataContact
            }
        })

        
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
        
    }
}

exports.addContact = async (req, res) => {
    try {


        const dataCreate = {
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            // image : req.file.filename
        }

        
        let newContact = await contact.create(dataCreate, {
            ...dataCreate
            
        })


        newContact = JSON.parse(JSON.stringify(newContact))

        // newContact = {
        //     ...newContact,
        //     image : process.env.FILE_PATH + newContact.image
        // }


        res.send({
            status: `success Add Contact`,
            data: {
                newContact
            }
        })

        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: 'failed',
            message: 'Server Error'
        })
        
    }
}

exports.updateContact= async (req, res) => {
    try {

        const { id } = req.params

        const dataContact = await contact.findOne({
            where : {
                id
            },
            
        }) 
        

        // const replaceFile = (filePath)=> {
        //     //menggabungkan direktori controller , uploads dan nama file Product
            
        //     filePath = path.join(__dirname, "../../uploads", filePath)
        //     fs.unlink( filePath, (err) => console.log(err))
        // }


        // replaceFile(dataContact.image)

        const dataUpdate = {
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            // image : req.file.filename
        }
        

         let updateContact = await contact.update(dataUpdate, {
            where : {
                id
            },
            ...dataUpdate,
            
        })

        updateContact = JSON.parse(JSON.stringify(updateContact))

        // updateContact = {
        //     ...dataUpdate,
        //     image : process.env.FILE_PATH + updateContact.image
        // }


        
        res.send({
            status : "success",
            message : `Update product by id: ${id} success`,
            data : {
                updateContact
            }
        })
        
    } catch (error) {

        console.log(error);
        res.status(500).send({
            status: "failed",
            message: "Server Error",
        });
        
    }
}

exports.deleteContact= async (req, res) => {
    try {

        const { id } = req.params

        const dataContact = await contact.findOne({
            where : {
                id
            },
            
        }) 
        

        // const replaceFile = (filePath)=> {
        //     //menggabungkan direktori controller , uploads dan nama file Product
            
        //     filePath = path.join(__dirname, "../../uploads", filePath)
        //     fs.unlink( filePath, (err) => console.log(err))
        // }


        // replaceFile(dataContact.image)

        
        

         let deleteContact = await contact.destroy({
            where : {
                id
            },

            
        })

        


        
        res.send({
            status : "success",
            message : `Delete product by id: ${id} success`,
            data : {
                deleteContact
            }
        })
        
    } catch (error) {

        console.log(error);
        res.status(500).send({
            status: "failed",
            message: "Server Error",
        });
        
    }
}