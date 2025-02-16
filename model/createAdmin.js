// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const User = require("../schema/user");
//
// async function createAdmin() {
//     try {
//         const hashedPassword = await bcrypt.hash('1,6xj_Txppj,v@8/NIWbBpO;£t0&l_6', 10);
//
//         const admin = new User({
//             email: 'boubacar@ansarvoyage.com',
//             password: hashedPassword,
//             role: 'admin',
//             lastLogin: null
//         });
//
//         await admin.save();
//         console.log('Admin user created successfully');
//     } catch (error) {
//         console.error('Error creating admin user:', error);
//     } finally {
//         mongoose.connection.close();
//     }
// }
//
// module.exports = {createAdmin}