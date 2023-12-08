import User from '../models/user.model.js';
import Experience from '../models/experience.model.js';

export const getExps = async (req, res) => {
    const exps = await Experience.find({
        idUser: req.user.id
    });

    res.json(exps);
};

export const getExp = async (req, res) => {
    const exp = await Experience.findById(req.params.id);

    if(!exp) return res.status(404).json({message: "Experience not found"});

    res.json(exp);
};

export const createExp = async (req, res) => {
    const { names, position, time, description} = req.body;
    const newExp = new Experience({
        names,
        position,
        time, 
        description,
        idUser: req.user.id
    })

    const savedExp = await newExp.save();
    res.json(savedExp);
};

export const updateExp = async (req, res) => {
    const exp = await Experience.findByIdAndUpdate(req.params.id, req.body, {
        new: true //Se coloca esto para que nos de el dato nuevo y no el viejo.
    });

    if(!exp) return res.status(404).json({message: "Experience not found"});

    res.json(exp);
};

export const deleteExp = async (req, res) => {
    const exp = await Experience.findByIdAndDelete(req.params.id);

    if(!exp) return res.status(404).json({message: "Experience not found"});

    res.sendStatus(204);
};


