const express = require('express');
const router = express.Router();

router.get("/", (req, res, data) => {

    if (data) {
        res.status(200).json({ data })
    } else {
        res.status(200).json({ message: "Il n'y a plus de tâches" })
    }
});

router.get("/:id", (req, res) => {

    const id = req.params.id;

    if (parseInt(id)) {

        try {
            res.status(200).json({ id: id });
        } catch (error) {
            res.status(400).json({ message: error });
        }

    } else {
        res.status(400).json({ message: "The ID should be an integer" });
    }
});

router.post("/:id", (req, res) => {

    res.status(200).json({ message: "New task ided " + req.body.id + " added successfully !" })

});
router.put("/:id", (req, res) => {

    res.status(200).json({ message: "Task ided " + req.body.id + " successfully modified !" })

});

router.put("/:id", (req, res) => {

    res.status(200).json({ message: "Task ided " + req.body.id + " successfully modified !" })

});

router.patch("/complete/:id", (req, res) => {

    res.status(200).json({ message: "Task ided " + req.body.id + " done !" })

});

router.delete("/:id", (req, res) => {

    res.status(200).json({ message: "Task ided " + req.body.id + " successfully deleted !" })

});


module.exports = router;