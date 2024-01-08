const jwt = require('jsonwebtoken');

const ROLE_LIST = require('../../config/roles_list');


exports.verifyToken = async (req, res) => {
    // const token = req.header('x-auth-token');
    const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.decode(token, { complete: true }).payload;

        return res.status(200).json({
            userId: decoded.sub,
            user: decoded.username,
            roles: decoded['cognito:groups']?.includes(ROLE_LIST.ADMIN) ? [ROLE_LIST.ADMIN] : [ROLE_LIST.USER]
        });
    } catch (err) {
        console.error("err", err);
        return res.status(401).json({ msg: err.message });
    }
};