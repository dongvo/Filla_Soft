import { SelectOptionModelBase } from "../models/comon.model";

export const IssueStatuses: Array<SelectOptionModelBase> = [
    {id: 1, name: 'Open'},
    {id: 2, name: 'Closed'},
    {id: 3, name: 'In Progress'},
    {id: 4, name: 'Resolved'},
    {id: 5, name: 'Reopened'}
]

export const IssuePriorities: Array<SelectOptionModelBase> = [
    {id: 1, name: 'Blocker'},
    {id: 2, name: 'Critical'},
    {id: 3, name: 'Major'},
    {id: 4, name: 'Minor'},
    {id: 5, name: 'Trivial'}
]

export const IssueTypes: Array<SelectOptionModelBase> = [
    {id: 1, name: 'Blocker'},
    {id: 2, name: 'Critical'},
    {id: 3, name: 'Major'},
    {id: 4, name: 'Minor'},
    {id: 5, name: 'Trivial'}
]