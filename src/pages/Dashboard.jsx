import { useEffect, useState } from "react";
import { apiRequest, endpoints } from "../services/api";

function Dashboard() {
  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiRequest({ endpoint: endpoints.gastos });
      setGastos(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {gastos.map((g) => (
        <p key={g.id}>{g.nombre}</p>
      ))}
    </div>
  );
}

export default Dashboard;