import { createSlice, current } from "@reduxjs/toolkit";

/**
 * Slice Employee
 * initialEmployeeState = Array of Object
 */
const initialEmployeeState = [
  {
    id: "ph1",
    birthDate: "2003-03-11",
    city: "New York",
    department: "Sales",
    firstName: "John",
    lastName: "Smith",
    startDate: "2022-11-01",
    state: "New York",
    street: "1234 Main St",
    zipCode: "10001",
  },
  {
    id: "ph2",
    birthDate: "2000-07-01",
    city: "Chicago",
    department: "Marketing",
    firstName: "Jane",
    lastName: "Doe",
    startDate: "2022-10-15",
    state: "Illinois",
    street: "5678 Park Ave",
    zipCode: "60601",
  },
  {
    id: "ph3",
    birthDate: "2003-05-20",
    city: "Los Angeles",
    department: "Engineering",
    firstName: "Bob",
    lastName: "Johnson",
    startDate: "2022-09-01",
    state: "California",
    street: "9012 Sunset Blvd",
    zipCode: "90001",
  },
  {
    id: "ph4",
    birthDate: "2003-05-20",
    city: "Houston",
    department: "Human Resources",
    firstName: "Emily",
    lastName: "Parker",
    startDate: "2022-09-01",
    state: "Texas",
    street: "123 Elm St",
    zipCode: "77001",
  },
  {
    id: "ph5",
    birthDate: "2000-12-01",
    city: "Philadelphia",
    department: "Legal",
    firstName: "Michael",
    lastName: "Brown",
    startDate: "2022-08-01",
    state: "Pennsylvania",
    street: "456 Oak St",
    zipCode: "19101",
  },
  {
    id: "ph6",
    birthDate: "2002-01-15",
    city: "Phoenix",
    department: "Sales",
    firstName: "Sarah",
    lastName: "Davis",
    startDate: "2022-07-01",
    state: "Arizona",
    street: "789 Pine St",
    zipCode: "85001",
  },
  {
    id: "ph7",
    birthDate: "1999-09-01",
    city: "San Antonio",
    department: "Marketing",
    firstName: "David",
    lastName: "Miller",
    startDate: "2022-06-01",
    state: "Texas",
    street: "321 Cedar St",
    zipCode: "78201",
  },
  {
    id: "ph8",
    birthDate: "2001-03-31",
    city: "San Diego",
    department: "Engineering",
    firstName: "Jessica",
    lastName: "Wilson",
    startDate: "2022-05-01",
    state: "California",
    street: "654 Maple St",
    zipCode: "92101",
  },
  {
    id: "ph9",
    birthDate: "1998-07-15",
    city: "Dallas",
    department: "Human Resources",
    firstName: "Richard",
    lastName: "Moore",
    startDate: "2022-04-01",
    state: "Texas",
    street: "987 Birch St",
    zipCode: "75201",
  },
  {
    id: "ph10",
    birthDate: "1997-11-01",
    city: "San Jose",
    department: "Legal",
    firstName: "Patricia",
    lastName: "Taylor",
    startDate: "2022-03-01",
    state: "California",
    street: "246 Elm St",
    zipCode: "95101",
  },
  {
    id: "ph11",
    birthDate: "1995-02-11",
    city: "Indianapolis",
    department: "Marketing",
    firstName: "Mark",
    lastName: "Thomas",
    startDate: "2022-01-01",
    state: "Indiana",
    street: "135 Main St",
    zipCode: "46201",
  },
  {
    id: "ph12",
    birthDate: "1996-08-15",
    city: "Austin",
    department: "Engineering",
    firstName: "Paul",
    lastName: "Moore",
    startDate: "2021-12-01",
    state: "Texas",
    street: "741 Elm St",
    zipCode: "78701",
  },
  {
    id: "ph13",
    birthDate: "1995-02-11",
    city: "Indianapolis",
    department: "Marketing",
    firstName: "Mark",
    lastName: "Thomas",
    startDate: "2022-01-01",
    state: "Indiana",
    street: "135 Main St",
    zipCode: "46201",
  },
  {
    id: "ph14",
    birthDate: "1996-08-15",
    city: "Austin",
    department: "Engineering",
    firstName: "Paul",
    lastName: "Moore",
    startDate: "2021-12-01",
    state: "Texas",
    street: "741 Elm St",
    zipCode: "78701",
  },
  {
    id: "ph15",
    birthDate: "1994-12-31",
    city: "Columbus",
    department: "Human Resources",
    firstName: "Steven",
    lastName: "Martin",
    startDate: "2021-11-01",
    state: "Ohio",
    street: "369 Oak St",
    zipCode: "43201",
  },
  {
    id: "ph16",
    birthDate: "1997-03-11",
    city: "Charlotte",
    department: "Marketing",
    firstName: "George",
    lastName: "Brown",
    startDate: "2022-01-01",
    state: "North Carolina",
    street: "567 Park Ave",
    zipCode: "28201",
  },
  {
    id: "ph17",
    birthDate: "1998-09-01",
    city: "Fort Worth",
    department: "Engineering",
    firstName: "Ashley",
    lastName: "Jones",
    startDate: "2021-12-01",
    state: "Texas",
    street: "1234 Elm St",
    zipCode: "76101",
  },
  {
    id: "ph18",
    birthDate: "1995-05-31",
    city: "Detroit",
    department: "Human Resources",
    firstName: "Jessica",
    lastName: "Miller",
    startDate: "2021-11-01",
    state: "Michigan",
    street: "5678 Oak St",
    zipCode: "48201",
  },
  {
    id: "ph19",
    birthDate: "1997-07-15",
    city: "El Paso",
    department: "Legal",
    firstName: "Samantha",
    lastName: "Anderson",
    startDate: "2021-10-01",
    state: "Texas",
    street: "9101 Pine St",
    zipCode: "79901",
  },
  {
    id: "ph20",
    birthDate: "1994-11-01",
    city: "Memphis",
    department: "Sales",
    firstName: "Ashley",
    lastName: "Thomas",
    startDate: "2021-09-01",
    state: "Tennessee",
    street: "12 Maple St",
    zipCode: "37501",
  },
  {
    id: "ph21",
    birthDate: "1996-03-20",
    city: "Seattle",
    department: "Marketing",
    firstName: "Joshua",
    lastName: "Moore",
    startDate: "2021-08-01",
    state: "Washington",
    street: "23 Cedar St",
    zipCode: "98101",
  },
  {
    id: "ph22",
    birthDate: "1995-06-15",
    city: "Denver",
    department: "Engineering",
    firstName: "Daniel",
    lastName: "Martin",
    startDate: "2021-07-01",
    state: "Colorado",
    street: "456 Birch St",
    zipCode: "80123",
  },
  {
    id: "ph23",
    birthDate: "1997-01-31",
    city: "Washington",
    department: "Human Resources",
    firstName: "Paul",
    lastName: "Miller",
    startDate: "2021-06-01",
    state: "District of Columbia",
    street: "789 Oak St",
    zipCode: "20001",
  },
  {
    id: "ph24",
    birthDate: "1994-05-20",
    city: "Boston",
    department: "Legal",
    firstName: "Jessica",
    lastName: "Wilson",
    startDate: "2021-05-01",
    state: "Massachusetts",
    street: "321 Elm St",
    zipCode: "02101",
  },
];

const employeeSlice = createSlice({
  name: "employee",
  initialState: initialEmployeeState,
  reducers: {
    addEmployee(state, action) {
      state = state.push({
        id: state.length + 1,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        birthDate: action.payload.birthDate,
        startDate: action.payload.startDate,
        street: action.payload.street,
        city: action.payload.city,
        state: action.payload.state,
        zipCode: action.payload.zipCode,
        department: action.payload.department,
      });
    },
    getEmployee(state) {
      console.log(current(state));
    },
  },
});

export const employeeActions = employeeSlice.actions;

export default employeeSlice.reducer;
