const { Router } = require("express");
const router = Router();

const itemDao = require('../daos/items');

router.get("/", (req, res, next) =>
{
  res.json(itemDao.getAll())
});

router.get("/:id", (req, res, next) => 
{
  let temp = itemDao.getById(req.params.id);

  if (temp !== undefined)
  {
    res.json(temp);
    res.sendStatus(200);
  }
  else
  {
    res.sendStatus(404);
  }
});

router.post("/", (req, res, next) =>
{
  itemDao.create(req.body);
  res.sendStatus(200);
});

router.put("/:id", (req, res, next) => 
{
  // TODO: fix this function
  itemDao.updateById(req.params.id);
  res.sendStatus(200);
});

router.delete("/:id", (req, res, next) => 
{
  itemDao.deleteById(req.params.id);
  res.sendStatus(200);
});

module.exports = router;
