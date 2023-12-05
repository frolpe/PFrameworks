import User from '../models/user.model.js';
import Skill from '../models/skill.model.js';

export const getSkills = async (req, res) => {
    const skills = await Skill.find({
        idUser: req.user.id
    });

    res.json(skills);
};

export const getSkill = async (req, res) => {
    const skill = await Skill.findById(req.params.id);

    if(!skill) return res.status(404).json({message: "Skill not found"});

    res.json(skill);
};

export const createSkill = async (req, res) => {
    const { names, description } = req.body;
    const newSkill = new Skill({
        names, 
        description,
        idUser: req.user.id
    })

    const savedSkill = await newSkill.save();
    res.json(savedSkill);
};

export const updateSkill = async (req, res) => {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
        new: true //Se coloca esto para que nos de el dato nuevo y no el viejo.
    });

    if(!skill) return res.status(404).json({message: "Skill not found"});

    res.json(skill);
};

export const deleteSkill = async (req, res) => {
    const skill = await Skill.findByIdAndDelete(req.params.id);

    if(!skill) return res.status(404).json({message: "Skill not found"});

    res.sendStatus(204);
};


