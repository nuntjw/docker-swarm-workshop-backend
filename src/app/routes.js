import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({ msg: 'ok' })
});

export default router;
