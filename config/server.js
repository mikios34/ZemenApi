module.exports = ({ env }) => ({
  host: env('HOST', '192.168.43.74'),
  port: env.int('PORT', 1337),
});

//192.168.43.74
