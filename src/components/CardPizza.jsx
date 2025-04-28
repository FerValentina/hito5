const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">Pizza {name}</h5>
        <p><strong>Ingredientes:</strong></p>
        <ul className="text-warning">
          {ingredients.map((ing, idx) => (
            <li key={idx}>🍕 {ing}</li>
          ))}
        </ul>
        <p><strong>Precio:</strong> ${price.toLocaleString("es-CL")}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-secondary">Ver Más</button>
          <button className="btn btn-outline-success">Añadir 🛒</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
