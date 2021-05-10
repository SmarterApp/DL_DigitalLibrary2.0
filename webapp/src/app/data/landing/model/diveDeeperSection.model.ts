export interface DiveDeeperSection {
description: string;
links: Links[];
}

export interface Links {
    order: number;
    label: string;
    url: string;
}