// exports.verifyRoles = (...allowedRoles) => {
//     return (req, res) => {
//         if (!req?.roles) {
//             return res.status(401).send({ message: 'Unauthorized' });
//         }
//         const rolesArray = [...allowedRoles];
//         const isAllowed = rolesArray.some((role) => req.roles.includes(role));
//         // if (isAllowed) {
//         //     next();
//         // } else {
//         //     return res.status(403).send({ message: 'Forbidden' });
//         // }

//         if (!isAllowed) {
//             return res.status(403).send({ message: 'Forbidden' });
//         }
//         return res.status(200).json({ msg: 'Authorized' });
//     };
// }

exports.verifyRoles = (req, res) => {
    const allowedRoles = req.body.roles;

    if (!req?.roles) {
        return res.status(401).send({ message: 'Unauthorized' });
    }
    const rolesArray = [...allowedRoles];
    const isAllowed = rolesArray.some((role) => req.roles.includes(role));

    if (!isAllowed) {
        return res.status(403).send({ message: 'Forbidden' });
    }

    return res.status(200).json({ msg: 'Authorized' });
}