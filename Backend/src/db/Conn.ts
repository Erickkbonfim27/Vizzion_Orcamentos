import mongoose from 'mongoose';

async function main() {
    await mongoose.connect('mongodb://localhost:27017/orcamais');
    console.log('Conectou ao Banco de Dados');
}

main().catch((error) => console.log(error));

export default mongoose;
