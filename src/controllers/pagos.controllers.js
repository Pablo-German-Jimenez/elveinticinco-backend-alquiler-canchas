import {MercadoPagoConfig,Preference} from 'mercadopago';

//Inicialización del cliente con tu Access token desde el .env

const client = new MercadoPagoConfig({
    accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
});

export const crearOrdenCarrito =async(req,res)=>{
    try{
        const {items} = req.body;

        const preference = new Preference(client);

        const result = await preference.create({
            body:{
                items:items||[
                    {
                        title:'Alquiler Cancha / Producto',
                        unit_price:100,
                        quantity:1,
                        currency_id:'ARS',
                    },
                ],
                back_urls:{
                    sucess:"https://tu-frontend.vercel.app/payment-success",
                    failure:"https://tu-frontend.vercel.app/payment-failure",
                    pending:'https://tu-frontend.vercel.app/payment-pending',
                },
                auto_return:'approved',
            },
        });

        return res.status(200).json({
            id:result.id,
            init_point:result.init_point,
        });
    }catch(error){
        console.error('Error al crear la orden de MercadPago',error);
        return res.status(500).json({
            mensaje:"Error interno al procesar el pago con MercadoPago",
            error:error.message,
        });
    }
};

export const recibirWebHook=async(res,req)=>{
    const payment=req.query;
    if(payment.type==='payment'){
        const paymentId = payment['data.id'];
        console.log('Notificación de pago recibida ID',paymentId);
    }
    return res.sendStatus(200);
}catch(error){
    console.error('Error procesado Webhook',error)
    return res.status(500).json({error:error.message});
}
