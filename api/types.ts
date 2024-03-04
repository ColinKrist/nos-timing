export type LoginPayload = {
  username: string;
  password: string;
};

export type LoginResponse = {
  PromoterLoginV2Result: PromoterLoginV2Result;
};

export type PromoterLoginV2Result = {
  Status: string;
  authToken: string;
  promoterID: string;
};

////////////////////////

export type EventSearchPayload = {
  token: string;
};

export type EventSearchResponse = {
  GetPromoterEventsV2Result: GetPromoterEventsV2Result[];
};

export type GetPromoterEventsV2Result = {
  __type: string;
  CloseRegDate: string;
  EventID: number;
  EventName: string;
  PromoterID: number;
  PromoterTaxName: string;
  PromoterTaxPercentage: number;
  RaceDay: boolean;
  RaceDayRegistrationCode: string;
  RaceDaySurcharge: number;
  DateCreated: string;
  EventPermit: string;
  IsNACSPermitOnly: boolean;
  OneDayLicenseFee?: number;
  RacePredictor: string;
  RestrictedLicenseKey: any;
  ShowUSACWaiver: boolean;
};

//////////

export type EventEntriesSearchPayload = {
  token: string;
  eventID: number;
};

export type EventEntriesSearchResponse = {
  GetEventEntriesV2Result: GetEventEntriesV2Result[];
};

export type GetEventEntriesV2Result = {
  __type: string;
  AmountDiscounted: number;
  AmtPaid: number;
  Bib: string;
  CategoryName: string;
  ConfirmationNumber: string;
  CustomQuestions: any[];
  DateEntered: string;
  EID: number;
  EntryFee: number;
  EntryMethod: number;
  EventID: number;
  GroupHeaderName?: string;
  HideOnWhosRegistered: boolean;
  IsCheckedIn: any;
  IsRaceDay: boolean;
  LastModified: string;
  Notes: string;
  PromoterTax: number;
  Quantity: number;
  RaceID: string;
  RaceRecID: number;
  TransactionType: number;
  UserInfo: UserInfo;
  WaiverStatuses: WaiverStatuse[];
  CrossResultsPoints: any;
  UCIPoints: number;
  USACCXRank: number;
  LicenseStatus: string;
  RankingPoints: number;
};

export type UserInfo = {
  __type: string;
  Address1: string;
  Address2: string;
  City: string;
  Country: string;
  Email: string;
  FirstName: string;
  IsMigrated: boolean;
  LastName: string;
  MiddleName: any;
  OutsideAccountID?: number;
  Phone: string;
  State: string;
  ZIP: string;
  Team: string;
  Age: any;
  AgeAtYearEnd: number;
  AgeOnEventDate: number;
  DOB: string;
  DOBdd: number;
  DOBmm: number;
  DOByyyy: number;
  EmergencyContactName: string;
  EmergencyContactPhone: string;
  Gender: string;
  CurrentCyclocrossAge: number;
  UCIID: string;
  USACCXRank: number;
  USACLicense: string;
  UniqueLicenseNumber: string;
};

export type WaiverStatuse = {
  Initials?: string;
  SignDate: string;
  Signed: boolean;
  WaiverID: number;
  WaiverTitle: string;
};
