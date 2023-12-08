import User from '../models/user.model.js';
import Study from '../models/study.model.js';

export const getStudies = async (req, res) => {
    const studies = await Study.find({
        idUser: req.user.id
    });

    res.json(studies);
};

export const getStudy = async (req, res) => {
    const study = await Study.findById(req.params.id);

    if(!study) return res.status(404).json({message: "Study not found"});

    res.json(study);
};

export const createStudy = async (req, res) => {
    const { names } = req.body;
    const newStudy = new Study({
        names, 
        idUser: req.user.id
    })

    const savedStudy = await newStudy.save();
    res.json(savedStudy);
};

export const updateStudy = async (req, res) => {
    const study = await Study.findByIdAndUpdate(req.params.id, req.body, {
        new: true //Se coloca esto para que nos de el dato nuevo y no el viejo.
    });

    if(!study) return res.status(404).json({message: "Study not found"});

    res.json(study);
};

export const deleteStudy = async (req, res) => {
    const study = await Study.findByIdAndDelete(req.params.id);

    if(!study) return res.status(404).json({message: "Study not found"});

    res.sendStatus(204);
};


