
export class NewProjectViewModel {
    name: string;
    description: string;
    member: Array<number> = new Array();
}

export class ProjectOverview {
    id: number;
    name: string;
    numberOfMember: number;
    description: string;
    isDeleted: boolean;
}

export class ProjectAccount {
    id: number;
    firstName: string;
    lastName: string;
    emai: string;
}

export const ListProjectSortType: any = {
    ID_ASC: 'id_asc',
    ID_DESC: 'id_desc',
    NAME_ASC: 'name_asc',
    NAME_DESC: 'name_desc'
}
