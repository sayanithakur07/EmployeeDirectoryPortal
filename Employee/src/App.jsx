function Employee(props) {
  return (
    <div className="employee">
      <img src={props.photo} alt="Employee" width="100" />
      <h2>{props.name}</h2>
      <p>ID: {props.id}</p>
      <p>Department: {props.department}</p>
      <p>Designation: {props.designation}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Employee Directory Portal</h1>

      <Employee
        name="Rahul"
        id="E101"
        department="IT"
        designation="Developer"
        photo="https://img.magnific.com/premium-photo/vertical-shot-adorable-male-child-formal-suit-outfit-posing_665346-100604.jpg?w=360"
      />

      <Employee
        name="Priya"
        id="E102"
        department="HR"
        designation="Manager"
        photo="https://img.magnific.com/premium-photo/confident-businesswoman-portrait-with-crossed-arm-with-smile-white-background-suit-wearing_1210214-1490.jpg"
      />
    </div>
  );
}

export default App;