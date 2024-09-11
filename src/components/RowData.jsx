function RowData({ item, index }) {
  return (
    <tr>
      <td className="pl-4">{index + 1}</td>
      <td>
        <h6 className="font-medium mb-0">{item.name}</h6>
      </td>
      <td>
        <p>{item.age}</p>
      </td>
      <td>
        <span className="text-muted">{item.email}</span>
        <br />
      </td>
      <td>
        <span className="text-muted">{item.dob}</span>
        <br />
      </td>
      <td>
        <select
          className="form-control category-select"
          defaultValue={item.manage}
          id="exampleFormControlSelect1"
        >
          <option value={'Modulator'}>Modulator</option>
          <option value={'Admin'}>Admin</option>
          <option value={'User'}>User</option>
          <option value={'Subscriber'}>Subscriber</option>
        </select>
      </td>
      <td style={{ display: 'flex', gap: '10px' }}>
        <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2">
          <i className="fa fa-trash" />{' '}
        </button>
        <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2">
          <i className="fa fa-edit" />{' '}
        </button>
      </td>
    </tr>
  );
}

export default RowData;
