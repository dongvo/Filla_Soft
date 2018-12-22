import { IssueType, IssueStatus, IssueResolution, IssuePriority } from "./issues.models";

export const IssueTypeFake: Array<IssueType> = [
    {id: 1, name: 'Story', date: new Date(2018, 4, 12), creator: 'Andrei Timohi' },
    {id: 2, name: 'Bug', date: new Date(2018, 4, 12), creator: 'Andrei Timohi' },
    {id: 3, name: 'New requirement', date: new Date(2018, 4, 12), creator: 'Andrei Timohi' },
    {id: 4, name: 'New function', date: new Date(2018, 4, 12), creator: 'Andrei Timohi' }
]

export const IssueStatusFake: Array<IssueStatus> = [
    {id: 1, name: 'Open', date: new Date(2018, 4, 12), creator: 'Andrei Timohi' },
    {id: 2, name: 'Resolved', date: new Date(2018, 4, 12), creator: 'Andrei Timohi' },
    {id: 3, name: 'Inprogress', date: new Date(2018, 4, 12), creator: 'Andrei Timohi' },
    {id: 4, name: 'Closed', date: new Date(2018, 4, 12), creator: 'Andrei Timohi' },
    {id: 5, name: 'Reopened', date: new Date(2018, 4, 12), creator: 'Andrei Timohi' }
]

export const IssueResolutionFake: Array<IssueResolution> = [
    {id: 1, name: 'Unresolved', date: new Date(2018, 4, 12), creator: 'Andrei Timohi' },
    {id: 2, name: 'Resolved', date: new Date(2018, 4, 12), creator: 'Andrei Timohi' },
    {id: 3, name: 'Backlog', date: new Date(2018, 4, 12), creator: 'Andrei Timohi' }
]

export const IssuePriorityFake: Array<IssuePriority> = [
    {id: 1, name: 'Major', date: new Date(2018, 4, 12), creator: 'Andrei Timohi' },
    {id: 2, name: 'Blocker', date: new Date(2018, 4, 12), creator: 'Andrei Timohi' },
    {id: 3, name: 'Critical', date: new Date(2018, 4, 12), creator: 'Andrei Timohi' },
    {id: 4, name: 'Minor', date: new Date(2018, 4, 12), creator: 'Andrei Timohi' },
    {id: 5, name: 'Trivial', date: new Date(2018, 4, 12), creator: 'Andrei Timohi' }
]