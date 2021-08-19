const { Router } = require("express");
const router = Router();

const Songs = require("../models/tunr");

router.get("/", async (req, res) => {
  res.json(await Songs.find({}).catch((err) => res.status(400).json(err));
});

router.post("/", async (req, res) => {
  res.json(
    await Songs.create(req.body).catch((err) => res.status(400).json(err))
  );
});

router.put("/:id", async (req, res) => {
  res.json(
    await Songs.findByIdAndUpdate(req.params.id, req.body, { new: true }).catch(
      (err) => res.status(400).json(err)
    )
  );
});

router.delete("/:id", async (req, res) => {
  res.json(
    await Songs.findByIdAndDelete(req.params.id).catch((err) =>
      res.status(400).json(err)
    )
  );
});
module.exports = router;
