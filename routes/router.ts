import {Router,Request,Response} from 'express';

export const router = Router()   //Para crear api end points.

router.get('/mensajes',(req:Request,res:Response)=>{
    res.json({
        ok: true,
        mensaje: 'Todo Esta ok!'
    })
})

router.post('/mensajes',(req:Request,res:Response)=>{

    const cuerpo = req.body.cuerpo
    const de = req.body.de


    res.json({
        ok: true,
        cuerpo,
        de
    })
})

router.post('/mensajes/:id',(req:Request,res:Response)=>{

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id


    res.json({
        ok: true,
        cuerpo,
        de,
        id
    })
})