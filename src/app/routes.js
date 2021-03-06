import express from "express";

const router = express.Router();

router.post("/hello", (req, res) => {
  const { name } = req.body;
  return res.json({ msg: `Hello, ${name}` });
});

export default router;
