import moment from "moment";

// ========== Types ==========

type User = {
  id: string;
  currentReservation: number | null;
  historyRentalIds: number[];
};

type RentalInfo = {
  id: number;
  userId: string;
  startTime: number;
  actualStartTime: number;
  endTime: number | null;
  rentSpotId: number;
  returnSpotId: number;
};

enum ReservationErrorType {
  MULTIPLE_RESERVATION = 1,
  LAST_RENTAL_NOT_RETURNED = 2,
  SAME_BASE = 3,
  NO_BIKES_AVAILABLE = 4,
  NO_RETURN_SPOT_AVAILABLE = 5,
}

// Map ReservationErrorType to error message
const ReservationErrorMsgs = {
  [ReservationErrorType.MULTIPLE_RESERVATION]: "too many reservations",
  [ReservationErrorType.LAST_RENTAL_NOT_RETURNED]: "renting",
  [ReservationErrorType.SAME_BASE]: "same base",
  [ReservationErrorType.NO_BIKES_AVAILABLE]: "no bicycles available for rent",
  [ReservationErrorType.NO_RETURN_SPOT_AVAILABLE]: "no place to return",
};

type ResponseInfo = {
  status: StatusCode;
  reservationId?: number;
  errorType?: ReservationErrorType;
};

enum StatusCode {
  SUCCESS = 1,
  FAIL = 0,
}

// ========== Utils ==========

// ========== Classes ==========

class RentSpot {
  private totalSpots: number;
  private numOfBikes: number;
  private reservedBikes: number;
  private reservedSpots: number;
  private reservedTime: number[];

  constructor(totalSpots: number, numOfBikes: number) {
    this.totalSpots = totalSpots;
    this.numOfBikes = numOfBikes;
    this.reservedBikes = 0;
    this.reservedSpots = 0;
  }

  get hasAvailableBikes() {
    return this.numOfBikes - this.reservedBikes > 0;
  }

  get hasAvailableReturnSpots() {
    return this.totalSpots - this.numOfBikes - this.reservedSpots > 0;
  }
}

class RentManagementSystem {
  private discountRate: number;
  // Map userId to User
  private users: Map<string, User>;
  // Map reservationId to RentSpot
  private reservations: Map<number, RentalInfo>;
  // Map rentSpotId to RentSpot
  private rentSpots: Array<RentSpot | null>;
  // Number of total reservations
  private numOfReservations: number;

  constructor(discountRate: number) {
    this.discountRate = discountRate;
    this.users = new Map<string, User>();
    this.reservations = new Map<number, RentalInfo>();
    // RentSpot starts from index 1, insert a null at index 0
    this.rentSpots = [null];
    this.numOfReservations = 0;
  }

  public addRentSpot(totalSpots: number, numOfBikes: number) {
    this.rentSpots.push(new RentSpot(totalSpots, numOfBikes));
  }

  public makeReservation(
    requestTime: number,
    userId: string,
    startTime: number,
    rentSpotId: number,
    returnSpotId: number
  ): ResponseInfo {
    // console.log(requestTime, startTime);

    // Create a new entry for the user if it does not exist
    if (!this.users.has(userId)) {
      this.users.set(userId, {
        id: userId,
        currentReservation: null,
        historyRentalIds: [],
      });
    }
    let user = this.users.get(userId) as User;

    // Check if the user has multiple reservations
    if (user.currentReservation !== null) {
      return {
        status: StatusCode.FAIL,
        errorType: ReservationErrorType.MULTIPLE_RESERVATION,
      };
    }

    // Check if the user has not returned the last rental
    if (user.historyRentalIds.length > 0) {
      let lastRental = this.reservations.get(
        user.historyRentalIds[user.historyRentalIds.length - 1]
      ) as RentalInfo;

      if (lastRental.endTime === null) {
        return {
          status: StatusCode.FAIL,
          errorType: ReservationErrorType.LAST_RENTAL_NOT_RETURNED,
        };
      }
    }

    // Check if the rent spot and return spot are the same
    if (rentSpotId === returnSpotId) {
      return {
        status: StatusCode.FAIL,
        errorType: ReservationErrorType.SAME_BASE,
      };
    }

    // Check if there are no available bikes
    if (!(this.rentSpots[rentSpotId] as RentSpot).hasAvailableBikes) {
      return {
        status: StatusCode.FAIL,
        errorType: ReservationErrorType.NO_BIKES_AVAILABLE,
      };
    }

    // Check if there are no available return spots
    if (!(this.rentSpots[returnSpotId] as RentSpot).hasAvailableReturnSpots) {
      return {
        status: StatusCode.FAIL,
        errorType: ReservationErrorType.NO_RETURN_SPOT_AVAILABLE,
      };
    }

    // Can make a reservation
  }
}

// ========== Main ==========
function main(lines: string[]) {
  // Initialize the rent management system
  const discountRate = Number(lines[0]);
  const numberOfSpots = Number(lines[1]);

  const rentManagementSystem = new RentManagementSystem(discountRate);

  lines = lines.slice(2);
  for (let i = 0; i < numberOfSpots; i++) {
    let [totalSpots, numOfBikes] = lines[i].split(" ").map((x) => Number(x));
    rentManagementSystem.addRentSpot(totalSpots, numOfBikes);
  }

  // Process requests
  lines = lines.slice(numberOfSpots);
  const numberOfRequests = Number(lines[0]);
  lines = lines.slice(1);
  for (let i = 0; i < numberOfRequests; i++) {
    let [requestType, ...args] = lines[i].split(" ");
    // console.log(args);

    if (requestType === "reserve:") {
      // Reserve a bike
      let [requestTime, userId, startTime, rentSpotId, returnSpotId] = args;

      let res = rentManagementSystem.makeReservation(
        moment(requestTime).unix(),
        userId,
        moment(startTime).unix(),
        Number(rentSpotId),
        Number(returnSpotId)
      );

      if (res.status === StatusCode.SUCCESS) {
        console.log(`reserve: ${userId} ${res.reservationId}`);
      } else {
        console.log(
          `reserve: ${
            ReservationErrorMsgs[res.errorType as ReservationErrorType]
          }`
        );
      }
    } else if (requestType === "rent:") {
      // Rent a bike
    } else if (requestType === "return:") {
      // Returen a bike
    } else if (requestType === "change:") {
      // Change return spot
    } else if (requestType === "cancel:") {
      // Cancel a reservation
    } else if (requestType === "base:") {
      // Query about base
    }
  }
}
