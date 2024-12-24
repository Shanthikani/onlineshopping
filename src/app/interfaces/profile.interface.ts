export interface Profile {
    username:string;
    password:string;
    email:string;
    roles:Role[];
}
export interface Role
{
    id:number;
    roleName:string;
}

