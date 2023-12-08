import User from '../models/user.model.js';
import Project from '../models/project.model.js';

export const getProjects = async (req, res) => {
    const projects = await Project.find({
        idUser: req.user.id
    });

    res.json(projects);
};

export const getProject = async (req, res) => {
    const project = await Project.findById(req.params.id);

    if(!project) return res.status(404).json({message: "Project not found"});

    res.json(project);
};

export const createProject = async (req, res) => {
    const { names, description, link } = req.body;
    const newProject = new Project({
        names, 
        description,
        link,
        idUser: req.user.id
    })

    const savedProject = await newProject.save();
    res.json(savedProject);
};

export const updateProject = async (req, res) => {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
        new: true //Se coloca esto para que nos de el dato nuevo y no el viejo.
    });

    if(!project) return res.status(404).json({message: "Project not found"});

    res.json(project);
};

export const deleteProject = async (req, res) => {
    const project = await Project.findByIdAndDelete(req.params.id);

    if(!project) return res.status(404).json({message: "Project not found"});

    res.sendStatus(204);
};


