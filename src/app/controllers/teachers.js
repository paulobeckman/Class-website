const { age, date, graduation } = require('../../lib/utils')
const Intl = require('intl')
const Teacher = require('../models/Teacher')


module.exports = {
    index(req, res) {
        
        let { filter, page, limit } = req.query

        page = page || 1
        limit = limit || 2
        let offset = limit * (page - 1)

        const params = {
            filter,
            page,
            limit,
            offset,
            callback(teachers) {
                
                const pagination = {
                    total : Math.ceil(teachers[0].total / limit),
                    page
                } 

                let teacherAll = teachers.map(teacher => {
                    const subjects_taught = teacher.subjects_taught.split(",")

                    const teacherSubjects_taught = {
                        ...teacher,
                        subjects_taught: subjects_taught
                    }

                    return teacherSubjects_taught
                })

                return res.render("teachers/index", {teachers: teacherAll, pagination, filter})
            }
        }
        
        Teacher.paginate(params)


    },

    create(req, res) {
        return res.render("teachers/create")

    },

    post(req, res) {
        const keys = Object.keys(req.body)

        for(key of keys){
            if(req.body[key] == ""){
                return res.send ('Please, fill all fields!')
            }
        }

        Teacher.create(req.body, function(teacher){
            return res.redirect(`/teachers/${teacher.id}`)
        })
    },

    show (req, res) {
        Teacher.find(req.params.id, function(teacher){
            if(!teacher) return res.send("Teacher not found!")

            teacher.age = age(teacher.birth)
            teacher.subjects_taught = teacher.subjects_taught.split(",")
            teacher.schooling = graduation(teacher.schooling)
            teacher.created_at = date(teacher.created_at).format

            return res.render("teachers/show", { teacher })
        })
    },

    edit (req, res) {
        Teacher.find(req.params.id, function(teacher) {
            teacher.birth = date(teacher.birth).iso
            
            return res.render("teachers/edit", {teacher})
        })
    },
    
    put (req, res) {
        const keys = Object.keys(req.body)

        for(key of keys){
            if(req.body[key] == ""){
                return res.send ('Please, fill all fields!')
            }
        }

        Teacher.update(req.body, function(err, results){
            return res.redirect(`/teachers/${req.body.id}`)
        })
    },

    delete (req, res) {
        Teacher.delete(req.body.id, function(){
            return res.redirect(`/teachers`)
        })
    },
}