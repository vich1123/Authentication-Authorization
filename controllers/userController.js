exports.getUserInfo = async (req, res) => {
    try {
      res.status(200).json({ user: req.user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  