const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = user.generateToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error('User not found');

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) throw new Error('Wrong password');

    const token = user.generateToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;