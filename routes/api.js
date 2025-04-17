const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
  res.json({
    message: '안녕하세요! 은비님의 API입니다 😄',
    date: new Date(),
    status: 'success'
  });
});

module.exports = router;
