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
    const response = await api.get<OrganizationReadModel[]>("/organizations/");
    if(response.status !== 200) throw Error("Failed getting organiztions")
    return response.data
};

export const getOrganizationById = async function (id : string) : Promise<OrganizationReadModel> {
    const response = await api.get<OrganizationReadModel>("/organizations/" + id + "/");
    if(response.status !== 200) throw Error("Failed getting organiztions")
    return response.data
};
