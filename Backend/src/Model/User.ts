import Conn from '../db/Conn'
const { Schema } = Conn

const User = Conn.model(
    'User',
    new Schema({
        Nome: { type: String, required: true },
        Email: { type: String, required: true },
        NomeEmpresa: { type:String, required: false },
        Endereco: { type:String, required: true, },
        Obras: { type: Array, required: false },
        Documento: { type: String, required: true },
        Senha: { type: String, required: true },
        Orcamentos: { type: Array, required: false },
    }, {timestamps: true},)
)

export default User
