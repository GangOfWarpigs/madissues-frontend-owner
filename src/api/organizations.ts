import api, {apiCall} from "./client.ts";

export interface CreateOrganizationRequest {
    name: string,
    logo: string,
    description: string,
    contact_info: string,
    primary_color: string,
    secondary_color: string
}   

export const createOrganization = async function (request: CreateOrganizationRequest ) {
    const response = await api.post<apiCall<{ token: string; }>>("/organizations/", {
        ...request
    });
    if (response.data.error) {
        throw Error(response.data.error.error_message);
    }
    return response.data.success
};

export interface OrganizationReadModel{
    id: string,
    owner_id: string,
    name: string,
    logo: string,
    description: string,
    contact_info: string,
    primary_color: string,
    secondary_color: string
}
export const getAllOrganizations = async function () : Promise<OrganizationReadModel[]> {
    const response = await api.get<apiCall<OrganizationReadModel[]>>("/organizations/");
    if(response.status !== 200) throw Error("Failed getting organiztions")
    return response.data.success
};

export const getOrganizationById = async function (id : string) : Promise<OrganizationReadModel> {
    const response = await api.get<apiCall<OrganizationReadModel>>("/organizations/" + id + "/");
    if(response.status !== 200) throw Error("Failed getting organiztions")
    return response.data.success
};


export interface CourseReadModel {
    id: string,
    owner_id: string,
    name: string,
    icon: string,
    primary_color: string,
    secondary_color: string
}

export const getOrganizationCourses = async function (id : string) : Promise<CourseReadModel[]> {
    const response = await api.get<apiCall<CourseReadModel[]>>("/organizations/" + id + "/courses/");
    if(response.status !== 200) throw Error("Failed getting organiztions")
    return response.data.success
};

export interface TeacherReadModel {
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    office_link: string,
    courses: [
    string
    ]
}

export const getOrganizationTeachers = async function (id : string) : Promise<TeacherReadModel[]> {
    const response = await api.get<apiCall<TeacherReadModel[]>>("/organizations/" + id + "/teachers/");
    if(response.status !== 200) throw Error("Failed getting organiztions")
    return response.data.success
};

export interface DegreesReadModel {
    id: string,
    name: string,
}

export const getOrganizationDegrees = async function (id : string) : Promise<DegreesReadModel[]> {
    const response = await api.get<apiCall<DegreesReadModel[]>>("/organizations/" + id + "/degrees/");
    if(response.status !== 200) throw Error("Failed getting organiztions")
    return response.data.success
};
