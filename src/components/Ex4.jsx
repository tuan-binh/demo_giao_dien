function Ex4() {
  const courses = ['Java', 'HTML', 'JavaScript', 'Python', 'C#'];
  return (
    <div style={{ border: '1px solid #000' }}>
      <h1>Danh sách khóa học </h1>
      <ul>
        {courses.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ex4;
