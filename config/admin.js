module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '61c952926bd0e346c7ac0db8b1371882'),
  },
});
