const Customer = require('../models/staff.js')
const { multipleMongooseToObject } = require('../../ultil/mongoose.js')

class CustomerController {
    async index(req, res, next) {
        try {
            const staffs = await Customer.find({})

            res.render('customer', {
                staffs: multipleMongooseToObject(staffs)
            })
        } catch (e) {
            console.log(e)
        }

    }

    async create(req, res, next) {
        try {
            const formData = req.body
            const customer = new Customer(formData)
            await customer.save()
            res.send({ status: true, data: customer })
        } catch (e) {
            console.log('Create cusomter ERROR!!')
            console.log(e)
        }

    }

    async edit(req, res, next) {
        try {
            const formData = req.body
            const { id } = req.params
            await Customer.findOneAndUpdate({ _id: id }, { $set: { name: formData.name, age: formData.age } })
            const customer = await Customer.findOne({ _id: id })
            res.send({ status: true, data: customer })
        } catch (e) {
            console.log('Edit customer ERROR!')
            console.log(e)
        }

    }

    async delete(req, res, next) {
        try {
            const { id } = req.params
            await Customer.deleteOne({ _id: id })
            res.send({ status: true })
        } catch (e) {
            console.log('Delete customer ERROR!!!')
            console.log(e)
        }
    }
}

module.exports = new CustomerController();