export interface DesignSystemComponent {
    id: string;
    name: string;
    aliases?: string[];
    communityDocs?: CommunityDocumentation[];
    implementations?: ComponentImplementation[];
    preview?: string;
    backlog: string;
    state: COMPONENT_STATES;
}
export interface CommunityDocumentation {
    type: DOCUMENTATION_TYPES;
    organisation: ORGANISATIONS;
    href: string;
}
export interface ComponentImplementation {
    organisation: ORGANISATIONS;
    type: COMPONENT_TYPES;
    implementation: string;
    package?: string;
    story?: string;
}
export declare enum COMPONENT_TYPES {
    CSS = "CSS",
    HTML = "HTML",
    WEB_COMPONENT = "Web Component",
    REACT = "React",
    VUE = "Vue",
    ANGULAR = "Angular",
    FIGMA = "Figma"
}
export declare enum ORGANISATIONS {
    DEN_HAAG = "Gemeente Den Haag",
    UTRECHT = "Gemeente Utrecht",
    NLDS = "NL Design System"
}
export declare enum COMPONENT_STATES {
    TODO = "Help Wanted",
    COMMUNITY = "Community",
    NL_UNSTABLE = "Candidate",
    NL_STABLE = "Hall of fame"
}
export declare enum DOCUMENTATION_TYPES {
    UX = "UX",
    A11Y = "A11y",
    COPY = "Content richtlijnen"
}
export declare const componentIndex: DesignSystemComponent[];
export default componentIndex;
