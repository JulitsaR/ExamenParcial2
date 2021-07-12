const mongoose = require('mongoose');

const SabritasSchema = new mongoose.Schema({


    codigo:{
        type: Number,
        required:true,
        unique: true
    },
    nombre:{
        type: String,
      
    },
    gramos:{
        type: Number
    
    },
    precio:{
        type: Number
    },

    //fechareg:{
        
        // `lastActiveAt` is a date
     //   lastActiveAt: Date
  //  }
})

const Sabritas = mongoose.model('Sabritas', SabritasSchema);

module.exports = Sabritas;