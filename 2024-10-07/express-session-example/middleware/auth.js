export const checkAuth = (req, res, next) => {
    if(req.session.prisijunges)
        return next();

    res.status(401).send('Neautentifikuotas vartotojas');
}