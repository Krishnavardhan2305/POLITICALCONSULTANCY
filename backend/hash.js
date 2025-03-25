import bcrypt from 'bcrypt'
const hashPassword = async () => {
    const password = "jkr123"; 
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password:", hashedPassword);
};

hashPassword();
