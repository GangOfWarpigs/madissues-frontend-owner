import Base from "../pages/base/Base.vue";
import CreateProject from "../pages/base/createProject/CreateProject.vue";
import Projects from "../pages/base/projects/Projects.vue";
import ProjectsDetailed from "../pages/base/projects/pages/projectsDetailed/ProjectsDetailed.vue";


export const base = [
    {
        path: 'app' ,
        component: Base,
        children: [
            {
                path: "projects",
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
                        component: ProjectsDetailed
                    }
                ]
            }
        ]
    }
]