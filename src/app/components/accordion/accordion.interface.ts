export interface IAccordion {
  header: string;
  body?: string; // Body content will be shown with Angular's `content projection` allowing for more dynamic content to be placed a simple box
  showsBody?: boolean; // Below are exclusive to this component
  code?: string;
}
