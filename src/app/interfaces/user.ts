import { FlowChart } from './flowchart';

export interface User {
    name: string,
    nick: string;
    email: string; 
    uid: any,
    premium: boolean,
    avatar: string,
    flowCharts: Array<FlowChart>,
}