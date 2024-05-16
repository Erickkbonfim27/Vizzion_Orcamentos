import conn from "../db/Conn";
import { Schema } from "mongoose";

const Lojista = conn.model(
    'Lojista',
    new Schema({
        Nomedaloja: { type: String, required: true },
        Telefone: { type: String, required: true },
        Email: { type: String, required:true},
        Avaliacao: {type: Object, required: false},
        OrcamentosRealizados: {type: Number, required: true},
    })
)

export default Lojista