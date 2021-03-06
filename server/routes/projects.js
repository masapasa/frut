const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const User = require("../models/User")
router.post("/projects", (req, res) => {
  Project.create({
    title: req.body.title,
    description: req.body.description,
    user: req.user._id,
    issue: []
  }).then(project => {
      res.json(project);
      User.findOneAndUpdate({_id: req.user._id}, 
        { $push: { projects: project._id }}).then(() => console.log("added"))
    })
    .catch(error => {
      res.json(error);
    });
});
router.get('/projects', (req, res) => {
  Project.find({}).then(project => {
    res.json(project)
  }).catch(error => {
    res.json(error);
  });
})

router.get('/userprojects', (req, res) => {
  Project.find({user:req.user._id}).then(project => {
    res.json(project)
  }).catch(error => {
    res.json(error);
  });
})

router.get("/projects/:id", (req, res) => {
  Project.findById(req.params.id)
    // .populate("issues")
    .populate({
      path: "issues",
      populate: {
        path: "user"
      }
    })

    .then(project => {
      res.json(project);
    })
    .catch(error => {
      res.json(error);
    });
});
router.put("/projects/:id", (req, res) => {
  Project.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      // .status() optional
      res.status(200).json({ message: "ok" });
    })
    .catch(error => {
      res.json(error);
    });
});
router.delete("/projects/:id", (req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => {
      // .status() optional
      res.status(200).json({ message: "ok" });
    })
    .catch(error => {
      res.json(error);
    });
});
module.exports = router