const jwt = require('jsonwebtoken');

/**
 * Generate a JSON Web Token
 * @param {string} userId - The ID of the user to include in the token payload.
 * @returns {string} - The generated JWT.
 */
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '1h', // Token validity (adjust as needed)
  });
};

module.exports = generateToken;
