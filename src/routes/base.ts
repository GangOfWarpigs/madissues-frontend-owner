import Base from "../pages/base/Base.vue";
import CreateProject from "../pages/base/createProject/CreateProject.vue";
import Projects from "../pages/base/projects/Projects.vue";
import ProjectsDetailed from "../pages/base/projects/pages/projectsDetailed/ProjectsDetailed.vue";
import ProjectsHome from "../pages/base/projects/pages/projectsDetailed/pages/ProjectsHome.vue";
import ProjectsStudents from "../pages/base/projects/pages/projectsDetailed/pages/ProjectsDegrees.vue";
import ProjectsTeachers from "../pages/base/projects/pages/projectsDetailed/pages/ProjectsTeachers.vue";
import ProjectsCourses from "../pages/base/projects/pages/projectsDetailed/pages/ProjectsCourse.vue";
import ProjectsConfiguration from "../pages/base/projects/pages/projectsDetailed/pages/ProjectsConfiguration.vue";
import ProjectGeneralSettings from "@/pages/base/projects/pages/projectsDetailed/pages/ProjectGeneralSettings.vue";
import ProjectOrganizationSettings from "@/pages/base/projects/pages/projectsDetailed/pages/ProjectOrganizationSettings.vue";
import ProjectIntegrations from "@/pages/base/projects/pages/projectsDetailed/pages/ProjectIntegrations.vue";
import ProjectChange from "@/pages/base/projects/pages/projectsDetailed/pages/ProjectChange.vue";

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
                                name: "home",
                                component: ProjectsHome
                            },
                            {
                                path: "degrees",
                                name: "degrees",
                                component: ProjectsStudents
                            },
                            {
                                path: "teachers",
                                name: "teachers",
                                component: ProjectsTeachers
                            },
                            {
                                path: "courses",
                                name: "courses",
                                component: ProjectsCourses
                            },
                            {
                                path: "configuration",
                                component: ProjectsConfiguration,
                                children: [
                                    {
                                        path: "general",
                                        component: ProjectGeneralSettings
                                    },
                                    {
                                        path: "organization",
                                        component: ProjectOrganizationSettings
                                    },
                                    {
                                        path: "integrations",
                                        component: ProjectIntegrations
                                    },
                                    {
                                        path: "change",
                                        component: ProjectChange
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]