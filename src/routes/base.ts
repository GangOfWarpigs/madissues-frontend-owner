import Base from "../pages/base/Base.vue";
import CreateProject from "../pages/base/createProject/CreateProject.vue";
import Projects from "../pages/base/projects/Projects.vue";
import ProjectsDetailed from "../pages/base/projects/pages/projectsDetailed/ProjectsDetailed.vue";
import ProjectsHome from "../pages/base/projects/pages/projectsDetailed/pages/ProjectsHome.vue";
import ProjectsStudents from "../pages/base/projects/pages/projectsDetailed/pages/ProjectsDegrees.vue";
import ProjectsTeachers from "../pages/base/projects/pages/projectsDetailed/pages/ProjectsTeachers.vue";
import ProjectsCourses from "../pages/base/projects/pages/projectsDetailed/pages/ProjectsCourse.vue";
import ProjectsConfiguration from "../pages/base/projects/pages/projectsDetailed/pages/ProjectsConfiguration.vue";


export const base = [
    {
        path: 'app' ,
        component: Base,
        children: [
            {
                path: "projects",
                name: "Projects",
                children : [
                    {
                        path: "",
                        component: Projects,
                    },
                    {
                        path: "create",
                        component: CreateProject
                    },
                    {
                        path: ":id",
                        component: ProjectsDetailed,
                        children: [
                            {
                                path: "home",
                                component: ProjectsHome
                            },
                            {
                                path: "students",
                                component: ProjectsStudents
                            },
                            {
                                path: "teachers",
                                component: ProjectsTeachers
                            },
                            {
                                path: "courses",
                                component: ProjectsCourses
                            },
                            {
                                path: "configuration",
                                component: ProjectsConfiguration
                            }
                        ]
                    }
                ]
            }
        ]
    }
]