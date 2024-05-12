import api, {apiCall} from "./client.ts";

export const signInFn = async function (request: { email: string; password: string; }) {
    const response = await api.post<apiCall<{ token: string; }>>("/owners/signin/", {
        ...request
    });
    if (response.data.error) {
        throw Error(response.data.error.error_message);
    }
    return response.data.success
};
export interface SignUpRequest {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    verify_password: string;
    phone_number: string;
};

export const signUpFn = async function (request: SignUpRequest ) {
    const response = await api.post<apiCall<{ token: string; }>>("/owners/signup/", {
        ...request
    });
    if (response.data.error) {
        throw Error(response.data.error.error_message);
    }
    return response.data.success
};

export interface Owner {
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    phone_number: string
}
export async function getOwner() {
    const request = await api.get<apiCall<Owner>>("/owners/me/");
    if (request.data.error !== null) throw Error(request.data.error.error_message);
    console.log(request.data.success as Owner);
    return request.data.success as Owner;
} 