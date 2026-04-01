import Card from "../Card/Card.jsx";
import "../Dashboard/Dashboard.css";

function Dashboard() {
  return (
    <div>
      <div className="cards">
        <Card 
          title="Total Medicine" 
          value="1248" 
          subtitle="In Stock" 
          color="#ff4d4f" 
        />

        <Card 
          title="Low Stock" 
          value="24" 
          subtitle="Need Reorder" 
          color="#722ed1" 
        />

        <Card 
          title="Today's Orders" 
          value="18" 
          subtitle="3 Pending" 
          color="#52c41a" 
        />

        <Card 
          title="Earnings" 
          value="₹7560" 
          subtitle="This Month" 
          color="#1890ff" 
        />
        <Card
          title="Recent Orders"
          color="grey"
          textcolor="black"
        />
      </div>
    </div>
  );
}

export default Dashboard;