import { SelectOptionModelBase } from "../../../shared/models/comon.model";

export class Issue {
    id: number;
    key: string;
    summary: string;
    type: number;
    status: number;
    priority: number;
    resolution: number;
    createdDate: Date;
    updatedDate: Date;
    reporterID: string;
    reporterName: string;
    assigneeID?: string;
    assigneeName?: string;
}

export class IssueDetails extends Issue{

}

export class StatusFilter {
    status: number;
    name: string;
}

export class IssueType extends SelectOptionModelBase {
    // id: number;
    // name: string;
}

export class IssueStatus extends SelectOptionModelBase {
    // id: number;
    // name: string;
}

export class IssuePriority extends SelectOptionModelBase {
    // id: number;
    // name: string;
}

export class IssueResolution extends SelectOptionModelBase {
    // id: number;
    // name: string;
}