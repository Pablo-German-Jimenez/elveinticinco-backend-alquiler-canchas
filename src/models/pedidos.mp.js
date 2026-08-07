import mongoose, {Schema} from "mongoose";
const pedidoSchema = new Schema({
    productos:[{
        producto: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },
        cantidad: {
            type: Number,
            required: true,
            min: [1, "La cantidad debe ser al menos 1"] 
        }
         }],
         paymentId:{
            type: String,
            required: true,
            sparse:true,
         },
         total:{
            type:Number,
            required:true,
         },
         estado:{
            type:String,
            required:true,
            enum:["pendiente", "completado", "cancelado"]},
         },{timestamps:true});

         const Pedido = mongoose.model("pedido",pedidoSchema);

         export default Pedido;