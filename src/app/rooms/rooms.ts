export interface Room {
    totalRooms: number;
    availableRooms: number;
    bookedRooms: number;

    export interface RoomList{
        roomType : string;
        amenities : string;
        price : number;
        photo : string;
        availableRooms : number;
        checkinTime : string;
        checkoutTime : string;
    }
}