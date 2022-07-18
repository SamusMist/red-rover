export interface RoverFetch {
  (roverName: string, earthDate: string): void;
  }

  // export interface ErrorDisplayType {
  //   errorDisplay: string;
  // }

  export interface CameraDataType {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  }
  
  export interface RoverDataType {
    id: number;
    img_src: string;
    earth_date: string;
    camera: CameraDataType
    rover: RoverInfoType;
    sol: number;
    total_photos: number;
    key?: string
  }
  
  export interface RoverInfoType {
    name: string;
    status: string;
  }

  export interface ErrorProps {
    errorDisplay: string;
    errorMsg: string;
  }

  export interface HeaderProps {
    resetRover: () => void;
  }

  export interface RoverCardProps {
    camera: CameraDataType;
    img_src: string;
    id: number;
    deleteImage: (id: number) => void;
  }

  export interface RoverProps {
    fetchRoverData: RoverFetch;
    errorDisplay: string;
    roverPhotoData: RoverDataType[];
  }

  export interface RoverDisplayProps {
    deleteImage: (id: number) => void;
    roverPhotoData: RoverDataType[];
  }











  export interface CategoriesProps {
    fetchCat: (category: string) => void
  }
  
  export interface QuestionsComponent {
    questionsProp: QuestionDataType[];
    addToGame: AddQuestion;
    removeFromGame: RemoveQuestion;
  }
  
  export interface QuestionDataType {
    category: string,
    id: string,
    question: string,
    correctAnswer: string,
    incorrectAnswers: Array<string>,
    difficulty?: string,
    type: string,
    tags: Array<string>,
    key?: string
  }
  
  export interface AddQuestion {
    (likedQuestion: LikedQuestion): void;
  }
  
  export interface RemoveQuestion {
   (id: string): void;
  }
  
  export interface QuestionCardProps {
    addToGame: AddQuestion;
    removeFromGame: RemoveQuestion;
    category: string,
    id: string,
    question: string,
    correctAnswer: string,
    incorrectAnswers: Array<string>,
    difficulty?: string,
  }
  
  export interface LikedQuestion {
    question: string,
    correctAnswer: string,
    incorrectAnswers: Array<string>,
    difficulty?: string,
    category: string,
    id: string
  }
  
  export interface GameProps {
    game: QuestionDataType[] | LikedQuestion[];
    removeFromGame: RemoveQuestion;
  }
  
  export interface GameCardProps {
    category: string,
    question: string,
    correctAnswer: string,
    incorrectAnswers: Array<string>,
    difficulty?: string,
    id: string,
    removeFromGame: RemoveQuestion,
  }