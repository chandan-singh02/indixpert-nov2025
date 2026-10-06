import Table from "react-bootstrap/Table";

function RBTables() {
  const employees = [
    {
      name: "Joseph Oden",
      department: "Sales",
      salary: "$3,000",
      date: "01/01/2022",
      payment: "PENDING",
      paymentClass: "primary",
      employment: "Active",
    },
    {
      name: "Carol Brown",
      department: "Marketing",
      salary: "$4,500",
      date: "05/01/2022",
      payment: "PAID",
      paymentClass: "success",
      employment: "Active",
    },
    {
      name: "Peggy Castello",
      department: "Design",
      salary: "$3,800",
      date: "10/01/2022",
      payment: "NEGOTIATING",
      paymentClass: "warning",
      employment: "Active",
    },
    {
      name: "Katherine Grey",
      department: "Sales",
      salary: "$3,200",
      date: "15/01/2022",
      payment: "FAILED",
      paymentClass: "danger",
      employment: "Inactive",
    },
    {
      name: "Sandra Palace",
      department: "Marketing",
      salary: "$4,000",
      date: "20/01/2022",
      payment: "OVERDUE",
      paymentClass: "purple",
      employment: "Active",
    },
  ];

  return (
    <div className="component-page">
      <h1 className="component-title">Tables</h1>

      {/* Non Responsive Table */}

      <div className="table-section">
        <h2>Non Responsive Table</h2>

        <Table
          bordered
          hover
          className="badge-table"
        >
          <thead>
            <tr>
              <th>Employee</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Payment Date</th>
              <th>Payment Status</th>
              <th>Employment Status</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td className="employee-name">{employee.name}</td>

                <td>{employee.department}</td>

                <td>{employee.salary}</td>

                <td>{employee.date}</td>

                <td>
                  <span className={`status-badge ${employee.paymentClass}`}>
                    {employee.payment}
                  </span>
                </td>

                <td>{employee.employment}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Responsive Table */}

      <div className="table-section">
        <h2>Responsive Table</h2>

        <Table
          responsive
          bordered
          hover
          className="badge-table"
        >
          <thead>
            <tr>
              <th>Employee</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Payment Date</th>
              <th>Payment Status</th>
              <th>Employment Status</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td className="employee-name">{employee.name}</td>

                <td>{employee.department}</td>

                <td>{employee.salary}</td>

                <td>{employee.date}</td>

                <td>
                  <span className={`status-badge ${employee.paymentClass}`}>
                    {employee.payment}
                  </span>
                </td>

                <td>{employee.employment}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default RBTables;
