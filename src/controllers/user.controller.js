import User from '../models/user.model.js';
import Skill from '../models/skill.model.js';


export const getUsers = async (req, res) => {
    const users = await User.findById(
        req.user.id
    );
    //console.log(users);
    res.json(users);
};

export const getUser = async (req, res) => {
    const user = await User.findById(req.params.id);

    if(!user) return res.status(404).json({message: "User not found"});

    res.json(user);
};

/*
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

*/
