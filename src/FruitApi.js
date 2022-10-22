import "./FruitApi.css";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

export default function FruitApi() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch("https://www.fruityvice.com/api/fruit/all")
      .then((res) => res.json())
      .then((json) => {
        setFruits(json);
      });
  });

  return (
    <div className="fruit">
      {fruits.map((f) => (
        <div key={f.id}>
          <Card style={{ width: "18rem" }} className="card">
            <Card.Header>
              <h3>{f.name}</h3>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <div className="card-data">
                  {
                    <span>
                      <strong>Genus: </strong> {f.genus}
                    </span>
                  }
                  {
                    <span>
                      <strong>Family: </strong> {f.family}
                    </span>
                  }
                  {
                    <span>
                      <strong>Order: </strong>
                      {f.order}
                    </span>
                  }
                  {
                    <span>
                      <strong>Carbohydrates: </strong>
                      {f.nutritions.carbohydrates}
                    </span>
                  }
                  {
                    <u>
                      <em>
                        <strong>Nutrition Details</strong>
                      </em>
                    </u>
                  }
                  {
                    <span>
                      <strong>Protein: </strong> {f.nutritions.protein}
                    </span>
                  }
                  {
                    <span>
                      <strong>Fat: </strong>
                      {f.nutritions.fat}
                    </span>
                  }
                  {
                    <span>
                      <strong>Calories: </strong> {f.nutritions.calories}
                    </span>
                  }
                  {
                    <span>
                      <strong>Sugar: </strong> {f.nutritions.sugar}
                    </span>
                  }
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}
