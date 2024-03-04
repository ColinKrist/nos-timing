import { getEventEntries, getEvents, login } from "./api";

console.log("Running...");

// read credentials from login.json
const creds = {
  username: process.env.LOGIN_USER_NAME ?? "",
  password: process.env.LOGIN_PASSWORD ?? "",
};

// login the user in the text file
const result = await login(creds);
const token = result.PromoterLoginV2Result.authToken;

console.log("Logged in! -", token);

// get the events
const events = await getEvents({ token });

console.log("Got events!", events.GetPromoterEventsV2Result.length, "events");

// find event for today
const todaysEvent = events.GetPromoterEventsV2Result.find((event) => {
  return event.RaceDay === true;
});

if (!todaysEvent) {
  console.error("Todays event not found");
  // process.exit(1);
}

// testing
const test = events.GetPromoterEventsV2Result[0];

// get the event entries
const eventEntries = await getEventEntries({ eventID: test.EventID, token });

console.log(
  "Got event entries!",
  eventEntries.GetEventEntriesV2Result.length,
  "entries"
);

const sorted = eventEntries.GetEventEntriesV2Result.sort((a, b) => {
  // first sort by category name, then sort by last name
  if (a.CategoryName < b.CategoryName) {
    return -1;
  }
  if (a.CategoryName > b.CategoryName) {
    return 1;
  }
  if (a.UserInfo.LastName.toLowerCase() < b.UserInfo.LastName.toLowerCase()) {
    return -1;
  }
  if (a.UserInfo.LastName.toLowerCase() > b.UserInfo.LastName.toLowerCase()) {
    return 1;
  }
  return 0;
});

console.log("Sorted!");

// convert event entries to csv
// sample output
//Last Name,First Name,Bib,Group Header,Category Entered / Merchandise Ordered,Waiver - USAC Online Waiver,License Status,USAC License,USAC Category Road,Age on 12/31/2023,Emergency Contact,Emergency Phone,Team,City,State,Email
//Anderson,Ian,11,CAT 2 Cross Country (XCO),CAT 2 MEN &lt;30,IA,Valid,541909,4,24,Grace Kane,(402) 651-0715,Harvest Racing,Omaha,NE,ian.anderson1218@gmail.com

const csv = sorted.map((entry) => {
  return `${entry.UserInfo.FirstName},${entry.UserInfo.LastName},${entry.Bib},${
    entry.GroupHeaderName
  },${entry.CategoryName},${entry.WaiverStatuses[0]?.Initials ?? ""},${
    entry.LicenseStatus
  },${entry.UserInfo.USACLicense},${entry.UserInfo.USACCXRank} TODO FIX ME,${
    entry.UserInfo.AgeAtYearEnd
  },${entry.UserInfo.EmergencyContactName},${
    entry.UserInfo.EmergencyContactPhone
  },${entry.UserInfo.Team},${entry.UserInfo.City},${entry.UserInfo.State},${
    entry.UserInfo.Email
  }`;
});

console.log("Converted to CSV!", csv.length, "entries");

// write to file with header
// Last Name,First Name,Bib,Group Header,Category Entered / Merchandise Ordered,Waiver - USAC Online Waiver,License Status,USAC License,USAC Category Road,Age on 12/31/2023,Emergency Contact,Emergency Phone,Team,City,State,Email

await Bun.write(
  "output.csv",
  `Last Name,First Name,Bib,Group Header,Category Entered / Merchandise Ordered,Waiver - USAC Online Waiver,License Status,USAC License,USAC Category Road,Age on 12/31/2023,Emergency Contact,Emergency Phone,Team,City,State,Email\n${csv.join(
    "\n"
  )}`
);

console.log("Wrote to file!");
console.log("-------------");
console.log("Done! Check output.csv for the results. Press any key to exit");

// just wait for any user input before exiting
for await (const line of console) {
  process.exit(0);
}
