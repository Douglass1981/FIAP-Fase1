const bcrypt = require('bcrypt');

async function generateHashForPassword(password) {
  const saltRounds = 12; // O mesmo saltRounds que você usaria no seu backend
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    console.log(`Hash para "${password}": ${hash}`);
  } catch (error) {
    console.error('Erro ao gerar o hash:', error);
  }
}

generateHashForPassword('senha123'); // A senha que você quer que o bcrypt transforme em hash