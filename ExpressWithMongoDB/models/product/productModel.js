const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        // lowercase: true,
        uppercase: true,
        trim: true,
        maxLength: [10, "can not add more than 10 chars"],
        minLength: 6
    },
    price: {
        type: Number,
        required: true,
        cast: false,
        min: 20000,
        max: 50000
    },
    inStock: Boolean,
    productType: {
        type: String,
        enum: ["laptop", "mobile"]
    },

    color: {
        type: Array,
        // validate: (value) => {
        //     console.log('recieved value',value);
        //     if(value.length > 2) {
        //         // value.forEach(color => {
        //         //     if(color == ""){
        //         //         console.log("color", color);
        //         //         return false
        //         //     }
        //         // });
        //         return true
        //     }
        //     return false
        // }

        // validate: {
        //     validator: (value) => {
        //         return value.length > 2
        //     },
        //     // message: 'color cant be less than 2',
        //     message: (err) => {
        //         console.log(err);
        //         return `${err.value} recieved is less than 2 `
        //     }
        // }

        validate: {
            validator: () => {
                // ------
                // ------
                return Promise.reject(100)
            },
            message: "async validate unsuccessful"
        }
    }
})

const Product = mongoose.model('product', productSchema);

module.exports = Product