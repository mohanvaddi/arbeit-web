export interface addressInterface {
    door_no: string;
    street: string;
    village: string;
    city: string;
    district: string;
    state: string;
    pincode: number;
}

export interface Worker {
    uuid: number;
    fullname: string;
    profileImage: string;
    age: number;
    sex: 'male' | 'female' | 'prefer not to say';
    expertise: 'Barber' | 'Carpenter' | 'Painter' | 'Mason' | 'Physical Labour';
    mobile: number;
    fromTime: string;
    toTime: string;
    address: addressInterface;
    location: string;
}

export interface UserData {
    displayName: string;
    phoneNumberValidated: boolean;
    photoURL: string;
}

export interface UserInterface {
    userId: string;
    username: string;
    mobile?: string;
    email: string;
    photoURL?: string;
    isMobileVerified?: boolean;
    openToWork?: OpenToWork;
    posts?: Posts[];
}

export type WorkingDays =
    | 'monday'
    | 'tuesday'
    | 'wednesday'
    | 'thursday'
    | 'friday'
    | 'saturday'
    | 'sunday';

export interface OpenToWork {
    userId: string;
    username: string;
    mobile?: string;
    email: string;
    photoURL?: string;
    phoneNumberVerified: boolean;
    location: string;
    expertise: string;
    workingDays: WorkingDays[];
    fromTime: string;
    toTime: string;
    
}

export interface Posts {
    postId: string;
    userId: string;
    username: string;
    mobile: string;
    email: string;
    photoURL?: string;
    title: string;
    description: string;
    phoneNumberVerified: boolean;
    location: string;
    expertiseNeeded: string;
    createdAt?: string;
}
