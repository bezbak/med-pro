export enum MainRoutes {
    home = "",
    services = "our-services",
    about = "about",
  }
  
  export interface LinkModel {
    title: string;
    mainRoute: MainRoutes;
    anchor?: string;
  }
  