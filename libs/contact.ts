export interface Contact {
  name: string;
  number: string;
  id: string;
  birthDay: Date;
  city: string;
  email: string;
  hasJob: boolean;
  job: string;
  hobbies: HobbiesValues[];
  description: string;
  sex: "male" | "female";
}

export type HobbiesValues =
  | "hiking"
  | "fishing"
  | "travel"
  | "rest"
  | "sport"
  | "learning"
  | "sing"
  | "dance"
  | "shopping";