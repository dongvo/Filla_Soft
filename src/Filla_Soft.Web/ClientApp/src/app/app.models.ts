
export class Assignee {
    id: number;
    name: string;
}

export class BoardProject {
    id: number;
    name: string;
    numberOfMember: number;
    isDeleted: boolean;
}

export class Project {
    id: number;
    name: string;
    description: string;
    isDeleted: boolean;
}