import RowData from './RowData';

function Ex8() {
  const data = [
    {
      name: 'Lê Minh Quang',
      age: 18,
      email: 'QuangLM@gmail.com',
      dob: '11/12/2001',
      manage: 'Modulator',
    },
    {
      name: 'Nguyễn Đức Anh',
      age: 18,
      email: 'AnhDN@gmail.com',
      dob: '11/12/2001',
      manage: 'Admin',
    },
    {
      name: 'Nguyễn Thị Viện',
      age: 18,
      email: 'VienNT@gmail.com',
      dob: '11/12/2001',
      manage: 'User',
    },
    {
      name: 'Nguyễn Trường Sơn',
      age: 18,
      email: 'SonNT@gmail.com',
      dob: '11/12/2001',
      manage: 'Modulator',
    },
    {
      name: 'Trần Trọng Đức',
      age: 18,
      email: 'DucTT@gmail.com',
      dob: '11/12/2001',
      manage: 'Admin',
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-uppercase mb-0">MANAGER USER</h5>
            </div>
            <div className="table-responsive">
              <table className="table no-wrap user-table mb-0">
                <thead>
                  <tr>
                    <th scope="col" className="border-0 text-uppercase font-medium pl-4" />
                    <th scope="col" className="border-0 text-uppercase font-medium">
                      Name
                    </th>
                    <th scope="col" className="border-0 text-uppercase font-medium">
                      Age
                    </th>
                    <th scope="col" className="border-0 text-uppercase font-medium">
                      Email
                    </th>
                    <th scope="col" className="border-0 text-uppercase font-medium">
                      Dateofbirth
                    </th>
                    <th scope="col" className="border-0 text-uppercase font-medium">
                      Manage
                    </th>
                    <th scope="col" className="border-0 text-uppercase font-medium">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <RowData key={index} item={item} index={index} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ex8;
