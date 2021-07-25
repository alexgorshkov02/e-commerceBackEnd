const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    attributes: ["id", "tag_name"],
    order: [["id", "DESC"]],
    include: [
      {
        model: Product,
        // through: ProductTag, //Just another way to join the table without an alias (as:...)
        as: "products_tags_data",
        attributes: ["id", "product_name", "price", "stock"],
        // To not display product_tag with references to IDs
        through: {
          attributes: [],
        },
      },
    ],
  })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "tag_name"],
    order: [["id", "DESC"]],
    include: [
      {
        model: Product,
        as: "products_tags_data",
        attributes: ["id", "product_name", "price", "stock"],
      },
    ],
  })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbTagData) => {
      // dbTagData - the number of affected rows
      if (!dbTagData) {
        res.status(404).json({ message: "No tag found with this id" });
        return;
      } else if (dbTagData[0] === 0) {
        res.json({
          message: `Nothing has been updated. The tag with id = ${req.params.id} has the same data`,
        });
      } else if (dbTagData[0] === 1) {
        res.json({
          message: `${dbTagData} tag with id = ${req.params.id} has been updated`,
        });
      } else {
        res.json({ message: `Something wrong has happened` });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbTagData) => {
      // dbTagData - the number of affected rows
      if (!dbTagData) {
        res.status(404).json({ message: "No tag found with this id" });
        return;
      }

      if (dbTagData === 1) {
        res.json({
          message: `${dbTagData} tag with id = ${req.params.id} has been deleted`,
        });
      } else {
        res.json({ message: `Something wrong has happened` });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
