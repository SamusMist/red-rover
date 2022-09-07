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
