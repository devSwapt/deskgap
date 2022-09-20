declare global {
    namespace NodeJS {
        interface Process {
            resourcesPath: string;
        }
        interface ProcessVersions {
            readonly deskgap: string;
        }
    }
}
export {};
