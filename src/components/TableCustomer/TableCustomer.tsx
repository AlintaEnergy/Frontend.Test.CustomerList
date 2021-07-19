type Props = {
  requestSort: (value: string) => void;
  getClassNamesFor: (value: string) => string;
};

export const TableCustomer: React.FC<Props> = ({
  requestSort,
  getClassNamesFor,
}) => {
  return (
    <thead>
      <tr>
        <th>
          <button
            type="button"
            onClick={() => requestSort("firstName")}
            className={getClassNamesFor("firstName")}
          >
            First Name
          </button>
        </th>
        <th>
          <button
            type="button"
            onClick={() => requestSort("lastName")}
            className={getClassNamesFor("lastName")}
          >
            Last Name
          </button>
        </th>
        <th>
          <button
            type="button"
            onClick={() => requestSort("phoneNumber")}
            className={getClassNamesFor("phoneNumber")}
          >
            Phone Number
          </button>
        </th>
        <th>
          <button
            type="button"
            onClick={() => requestSort("dateOfBirth")}
            className={getClassNamesFor("dateOfBirth")}
          >
            Date of Birth
          </button>
        </th>
      </tr>
    </thead>
  );
};
