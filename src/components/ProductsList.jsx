export default function ProductsList(){
    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
      ];

      return(
        <>
        <h1>LISTA DELLA SPESA:</h1>
        <ul>
       {products.map((product,index)=>(
        <li key={index}>
            <p> nome:{product.name} </p>
            <p>prezzo:{product.price} </p>
        </li>
       ))}
        </ul>
        </>
      )

}